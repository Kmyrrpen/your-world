import { proxy, useSnapshot } from "valtio";
import { EditorContent, useEditor } from "@tiptap/react";

import { Meta } from "@/app/meta/store";
import EditorLinkSelect from "../EditorLinkSelect";
import EditorToolbar from "../EditorToolbar";
import initializeEditorConfig from "./config";
import S from "./styles";

// NOTE: hmr and tiptap don't mix well
// https://github.com/ueberdosis/tiptap/issues/1451

type Props = {
  meta?: Meta;
};

const linkSelectState = proxy({ isOpen: false });
export const openLinkSelect = () => (linkSelectState.isOpen = true);
export const closeLinkSelect = () => (linkSelectState.isOpen = false);

const Editor: React.FC<Props> = ({ meta }) => {
  const editor = useEditor(initializeEditorConfig(meta?.content || ""));
  const linkSelectSnap = useSnapshot(linkSelectState);

  if (editor === null) return null;

  return (
    <S.EditorWrapper>
      {linkSelectSnap.isOpen ? <EditorLinkSelect editor={editor} /> : null}
      <EditorToolbar editor={editor} />
      <EditorContent className="editor-content" editor={editor} />
    </S.EditorWrapper>
  );
};

export default Editor;
