import { nanoid } from "nanoid";
import { EditorOptions, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import dispatch from "@/app/dispatch";
import { setMeta } from "@/app/meta/flows";
import { Meta } from "@/app/meta/store";
import { getDescription } from "./Editor/util";

declare module "@tiptap/react" {
  interface Commands<ReturnType> {
    customShortcuts: {
      /**
       * Opens EditorLinkSelect
       */
      showLinkSelect: () => ReturnType;
      /**
       * Close EditorLinkSelect
       */
      closeLinkSelect: () => ReturnType;
      /**
       * Saves progress to store
       */
      saveEditor: () => ReturnType;
      /**
       * toggle the Editor's read-only mode
       */
      toggleEditor: () => ReturnType;
      /**
       * Set Editor Title
       */
      setTitle: (val: string) => ReturnType;
    };
  }
}

interface CustomOptions {
  title: string;
  id: string;
}

interface CustomStorage {
  id: string;
  title: string;
  showLinkSelect: boolean;
}

const CustomMods = Extension.create<CustomOptions, CustomStorage>({
  name: "customMods",

  addOptions() {
    return {
      title: "",
      id: nanoid(),
    };
  },

  addStorage() {
    return {
      id: this.options.id,
      title: this.options.title,
      showLinkSelect: false,
    };
  },

  addCommands() {
    return {
      showLinkSelect:
        () =>
        ({ commands, editor }) => {
          const selection = editor.state.selection;
          const hasNoLink =
            Object.keys(editor.getAttributes("link")).length === 0;

          if (!selection.empty && hasNoLink) {
            this.storage.showLinkSelect = true;
          } else if (!hasNoLink) commands.unsetLink();
          return true;
        },

      closeLinkSelect: () => () => {
        this.storage.showLinkSelect = false;
        return true;
      },

      saveEditor:
        () =>
        ({ editor }) => {
          const content = editor.getHTML();
          dispatch(
            setMeta({
              id: this.storage.id,
              content,
              title: this.storage.title,
              description: getDescription(content),
            })
          );
          return true;
        },

      toggleEditor:
        () =>
        ({ editor }) => {
          this.editor.setEditable(!editor.isEditable);
          return true;
        },

      setTitle: (val) => () => {
        this.storage.title = val;
        return true;
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Ctrl-s": () => this.editor.commands.saveEditor(),
      "Ctrl-k": () => this.editor.commands.showLinkSelect(),
      "Ctrl-Q": () => this.editor.commands.toggleEditor(),
    };
  },
});

function initializeEditorConfig(
  meta: Meta | undefined
): Partial<EditorOptions> {
  const customConfig = meta ? { title: meta.title, id: meta.id } : {};
  return {
    content: meta?.content || "",
    extensions: [
      Link.configure({
        openOnClick: false,
        autolink: false,
      }),
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4]
        }
      }),
      CustomMods.configure(customConfig),
    ],
  };
}

export default initializeEditorConfig;
