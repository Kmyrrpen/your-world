import { nanoid } from "nanoid";
import { Content, EditorOptions, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import dispatch from "@/app/dispatch";
import { setMeta } from "@/app/meta/flows";
import { openLinkSelect } from ".";

declare module "@tiptap/react" {
  interface Commands<ReturnType> {
    customShortcuts: {
      /**
       * Opens EditorLinkSelect
       */
      showLinkSelect: () => ReturnType;
      saveEditor: () => ReturnType;
    };
  }
}

const CustomShortcuts = Extension.create({
  name: "customShortcuts",

  addCommands() {
    return {
      showLinkSelect:
        () =>
        ({ commands }) => {
          const selection = this.editor.state.selection;
          const hasNoLink =
            Object.keys(this.editor.getAttributes("link")).length === 0;

          if (!selection.empty && hasNoLink) {
            openLinkSelect();
          } else if (!hasNoLink) commands.unsetLink();
          return true;
        },
      saveEditor: () => () => {
        const content = this.editor.getJSON();
        dispatch(setMeta({ id: nanoid(), content }));
        return true;
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Ctrl-s": () => this.editor.commands.saveEditor(),
      "Ctrl-k": () => this.editor.commands.showLinkSelect(),
    };
  },
});

function initializeEditorConfig(content: Content): Partial<EditorOptions> {
  return {
    content,
    extensions: [
      Link.configure({
        openOnClick: false,
        autolink: false,
      }),
      StarterKit,
      CustomShortcuts,
    ],
  };
}

export default initializeEditorConfig;
