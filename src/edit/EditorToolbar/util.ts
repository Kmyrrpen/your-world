import { Editor } from '@tiptap/react';

export const chainFocus = (editor: Editor) => editor.chain().focus();
export const toggleHeading = (editor: Editor, level: 1 | 2 | 3 | 4) =>
  chainFocus(editor).toggleHeading({ level }).run();
