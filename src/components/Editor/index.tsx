import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { proxy, useSnapshot } from "valtio";
import EditorLinkSelect from "../EditorLinkSelect";
import EditorToolbar from "../EditorToolbar";
import S from "./styles";

// NOTE: hmr and tiptap don't mix well
// https://github.com/ueberdosis/tiptap/issues/1451

const linkSelectState = proxy({ isOpen: false });
export const showLinkSelect = () => (linkSelectState.isOpen = true);
export const closeLinkSelect = () => (linkSelectState.isOpen = false);

const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Link,
    ],
    content: "",
  });

  const linkSelectSnap = useSnapshot(linkSelectState);

  if (editor === null) return null;
  return (
    <S.EditorWrapper>
      {linkSelectSnap.isOpen ? <EditorLinkSelect editor={editor} /> : null}
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </S.EditorWrapper>
  );
};

export default Editor;
