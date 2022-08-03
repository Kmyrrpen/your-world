import { Editor } from "@tiptap/react";

type Props = {
  title: string;
  editor: Editor;
};

const EditorTitle: React.FC<Props> = ({ title, editor }) => {
  return (
    <input
      defaultValue={title}
      onChange={(e) => editor.commands.setTitle(e.target.value)}
    />
  );
};

export default EditorTitle;
