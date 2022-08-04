import { Editor } from "@tiptap/react";
import styled from "styled-components";

type Props = {
  editor: Editor;
};

const S = {
  Input: styled.input`
    font-size: 3rem;
    font-weight: bold;
    outline: none;
    border: none;
    margin-bottom: 1rem;
    font-family: inherit;
  `
}

const EditorTitle: React.FC<Props> = ({ editor }) => {
  return (
    <S.Input
      defaultValue={editor.storage.customMods.title}
      onChange={(e) => editor.commands.setTitle(e.target.value)}
      placeholder="Title..."
    />
  );
};

export default EditorTitle;
