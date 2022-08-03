import { useSnapshot } from "valtio";
import { useParams } from "react-router-dom";
import { metaStore } from "@/app/meta/store";

import Editor from "../Editor";
import S from "./styles";

const Edit: React.FC = () => {
  const { id } = useParams();
  const { files } = useSnapshot(metaStore);

  return (
    <S.Edit>
      <Editor meta={files.get(id || "")} />
    </S.Edit>
  );
};

export default Edit;
