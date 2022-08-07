import { Editor } from "@tiptap/react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { NavbarStyles as S } from "@/components/Navbar";

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
    <S>
      <Button as={Link} to="/dashboard">
        Dashboard
      </Button>
      <div className="last-item">
        <div className="spacer">
          <Button onClick={toggleEditor}>
            {editor && editor.isEditable ? "Read" : "Edit"}
          </Button>
          <Button onClick={saveEditor}>Save</Button>
        </div>
      </div>
    </S>
  );
};

export default EditorNavbar;
