import { Editor } from "@tiptap/react";
import S from "./styles";

type Props = {
  editor: Editor;
};

const chainFocus = (editor: Editor) => editor.chain().focus();
const toggleHeading = (editor: Editor, level: 1 | 2 | 3 | 4) =>
  chainFocus(editor).toggleHeading({ level }).run();

const EditorToolbar: React.FC<Props> = ({ editor }) => {
  if (!editor.isEditable) return null;
  return (
    <S.Toolbar>
      <>
        <S.Spacer>
          <S.EditorIcon
            onClick={() => chainFocus(editor).setParagraph().run()}
            isActive={editor.isActive("paragraph")}
          >
            <strong>P</strong>
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => toggleHeading(editor, 2)}
            isActive={editor.isActive("heading", { level: 2 })}
          >
            H2
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => toggleHeading(editor, 3)}
            isActive={editor.isActive("heading", { level: 3 })}
          >
            H3
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => toggleHeading(editor, 4)}
            isActive={editor.isActive("heading", { level: 4 })}
          >
            H4
          </S.EditorIcon>
        </S.Spacer>
        <S.Spacer>
          <S.EditorIcon
            onClick={() => chainFocus(editor).toggleBulletList().run()}
            isActive={editor.isActive("bullet-list")}
          >
            UL
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => chainFocus(editor).toggleOrderedList().run()}
            isActive={editor.isActive("ordered-list")}
          >
            OL
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => editor.commands.showLinkSelect()}
            isActive={editor.isActive("link")}
          >
            a
          </S.EditorIcon>
        </S.Spacer>

        <S.Spacer>
          <S.EditorIcon
            onClick={() => chainFocus(editor).toggleBold().run()}
            isActive={editor.isActive("bold")}
          >
            <strong>B</strong>
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => chainFocus(editor).toggleItalic().run()}
            isActive={editor.isActive("italic")}
          >
            <strong>
              <em>I</em>
            </strong>
          </S.EditorIcon>
          <S.EditorIcon
            onClick={() => chainFocus(editor).toggleStrike().run()}
            isActive={editor.isActive("strike")}
          >
            <s>S</s>
          </S.EditorIcon>
        </S.Spacer>
      </>
    </S.Toolbar>
  );
};

export default EditorToolbar;
