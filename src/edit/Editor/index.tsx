import { Editor as EditorType, EditorContent } from "@tiptap/react";
import EditorLinkSelect from "../EditorLinkSelect";
import EditorToolbar from "../EditorToolbar";
import EditorTitle from "../EditorTitle";
import S from "./styles";

// NOTE: hmr and tiptap don't mix well
// https://github.com/ueberdosis/tiptap/issues/1451

type Props = {
  editor: EditorType;
};

const Editor: React.FC<Props> = ({ editor }) => {
  return (
    <>
      <S.EditorWrapper>
        <EditorTitle editor={editor} />
        <EditorToolbar editor={editor} />
        <EditorContent className="editor-content" editor={editor} />
        {editor.storage.customMods.showLinkSelect ? (
          <EditorLinkSelect editor={editor} />
        ) : null}
      </S.EditorWrapper>
    </>
  );
};

export default Editor;
