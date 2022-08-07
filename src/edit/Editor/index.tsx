import { Editor as EditorType, EditorContent } from "@tiptap/react";
import S from "./styles";

// NOTE: hmr and tiptap don't mix well
// https://github.com/ueberdosis/tiptap/issues/1451

type Props = {
  editor: EditorType;
};

const Editor: React.FC<Props> = ({ editor }) => {
  return (
    <S>
      <EditorContent
        spellCheck="false"
        className="editor-content"
        editor={editor}
      />
    </S>
  );
};

export default Editor;
