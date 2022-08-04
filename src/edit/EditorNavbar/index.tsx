import Button from "@/components/Button";
import { NavbarStyles as S } from "@/components/Navbar";
import { Editor } from "@tiptap/react";
import { Link } from "react-router-dom";

type Props = {
  editor: Editor | null;
};

const EditorNavbar: React.FC<Props> = ({ editor }) => {
  const toggleEditor = () => {
    if (!editor) return;
    editor.chain().focus().toggleEditor().run();
  };

  const saveEditor = () => {
    if (!editor) return;
    editor.chain().focus().saveEditor().run();
  };

  return (
    <S.Navbar>
      <Link to="/">Dashboard</Link>
      <S.LastItem>
        <S.Spacer>
          <Button onClick={toggleEditor}>
            {editor && editor.isEditable ? "Read" : "Edit"}
          </Button>
          <Button onClick={saveEditor}>Save</Button>
        </S.Spacer>
      </S.LastItem>
    </S.Navbar>
  );
};

export default EditorNavbar;
