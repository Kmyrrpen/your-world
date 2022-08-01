import { Editor } from "@tiptap/react";
import S from "./styles";

type Props = {
  editor: Editor;
};

const chainFocus = (editor: Editor) => editor.chain().focus();
const toggleHeading = (editor: Editor, level: 1 | 2 | 3 | 4) =>
  chainFocus(editor).toggleHeading({ level }).run();

const EditorToolbar: React.FC<Props> = ({ editor }) => {
  const saveEditor = () => {
    editor;
  };

  return (
    <S.Toolbar>
      <S.Spacer>
        <S.EditorButton
          onClick={() => toggleHeading(editor, 1)}
          isActive={editor.isActive("heading", { level: 1 })}
        >
          H1
        </S.EditorButton>
        <S.EditorButton
          onClick={() => toggleHeading(editor, 2)}
          isActive={editor.isActive("heading", { level: 2 })}
        >
          H2
        </S.EditorButton>
        <S.EditorButton
          onClick={() => toggleHeading(editor, 3)}
          isActive={editor.isActive("heading", { level: 3 })}
        >
          H3
        </S.EditorButton>
        <S.EditorButton
          onClick={() => toggleHeading(editor, 4)}
          isActive={editor.isActive("heading", { level: 4 })}
        >
          H4
        </S.EditorButton>
      </S.Spacer>
      <S.Spacer>
        <S.EditorButton
          onClick={() => chainFocus(editor).toggleBulletList().run()}
          isActive={editor.isActive("bullet-list")}
        >
          UL
        </S.EditorButton>
        <S.EditorButton
          onClick={() => chainFocus(editor).toggleOrderedList().run()}
          isActive={editor.isActive("ordered-list")}
        >
          OL
        </S.EditorButton>
        <S.EditorButton
          onClick={() => editor.commands.showLinkSelect()}
          isActive={editor.isActive("link")}
        >
          a
        </S.EditorButton>
      </S.Spacer>

      <S.Spacer>
        <S.EditorButton
          onClick={() => chainFocus(editor).toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <strong>B</strong>
        </S.EditorButton>
        <S.EditorButton
          onClick={() => chainFocus(editor).toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <strong>
            <em>I</em>
          </strong>
        </S.EditorButton>
        <S.EditorButton
          onClick={() => chainFocus(editor).toggleStrike().run()}
          isActive={editor.isActive("strike")}
        >
          <s>S</s>
        </S.EditorButton>
      </S.Spacer>
      <S.LastItem>
        <S.EditorButton
          onClick={() => chainFocus(editor).saveEditor().run()}
          inverted
        >
          Save
        </S.EditorButton>
      </S.LastItem>
    </S.Toolbar>
  );
};

export default EditorToolbar;
