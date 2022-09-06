import { nanoid } from 'nanoid';
import { EditorOptions, Extension } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

import dispatch from '@/app/dispatch';
import { Meta, setMeta } from '@/app/world';
import { getDescription } from './util';

declare module '@tiptap/react' {
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

// arguments passed to configure object for the custom extension
interface CustomOptions {
  title: string;
  id: string | undefined;
}

// additional storage items
interface CustomStorage {
  id: string;
  title: string;
  showLinkSelect: boolean;
}

const CustomExtension = Extension.create<CustomOptions, CustomStorage>({
  name: '__custom__',
  addOptions() {
    // options are memoized inside tiptap even when editor is destroyed.
    // pass nanoid instead
    return {
      title: '',
      id: undefined,
    };
  },

  addStorage() {
    const { id, title } = this.options;
    return {
      title,
      id: typeof id === 'string' ? id : nanoid(),
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
            Object.keys(editor.getAttributes('link')).length === 0;

          if (!selection.empty) {
            if (hasNoLink) {
              // only show when selecting text that do not have link
              this.storage.showLinkSelect = true;
            } else {
              // else unset the links inside selected text
              commands.unsetLink();
            }
          }

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
            }),
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
      'Ctrl-s': () => this.editor.commands.saveEditor(),
      'Ctrl-k': () => this.editor.commands.showLinkSelect(),
      'Ctrl-Q': () => this.editor.commands.toggleEditor(),
    };
  },
});

function initConfig(
  meta: Meta | undefined,
  startEditable: boolean,
): Partial<EditorOptions> {
  // undefined still counts as overriding the default arguments in tiptap
  // declare config here instead to avoid that
  const customConfig = meta ? { title: meta.title, id: meta.id } : {};

  return {
    content: meta?.content || '',
    editable: startEditable,
    extensions: [
      Link.configure({
        openOnClick: false,
        autolink: false,
      }),
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      CustomExtension.configure(customConfig),
    ],
  };
}

export default initConfig;
