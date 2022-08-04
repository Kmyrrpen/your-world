import { useMemo } from "react";
import { useSnapshot } from "valtio";
import { useEditor } from "@tiptap/react";
import { useParams } from "react-router-dom";

import { metaStore } from "@/app/meta/store";
import EditorNavbar from "../EditorNavbar";
import Editor from "../Editor";
import initializeEditorConfig from "../config";
import S from "./styles";

const Edit: React.FC = () => {
  const { id } = useParams();
  const { files } = useSnapshot(metaStore);

  const meta = files[id || ""];
  const config = useMemo(() => initializeEditorConfig(meta), [meta]);
  const editor = useEditor(config);

  return (
    <>
      <EditorNavbar editor={editor} />
      <S.Edit>{editor ? <Editor editor={editor} /> : null}</S.Edit>
    </>
  );
};

export default Edit;
