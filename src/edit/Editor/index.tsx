import { EditorContent, useEditor } from "@tiptap/react";

import { Meta } from "@/app/meta/store";
import EditorLinkSelect from "../EditorLinkSelect";
import EditorToolbar from "../EditorToolbar";
import EditorTitle from "../EditorTitle";
import initializeEditorConfig from "./config";
import S from "./styles";
import { useEffect, useMemo } from "react";

// NOTE: hmr and tiptap don't mix well
// https://github.com/ueberdosis/tiptap/issues/1451

type Props = {
  meta?: Meta;
};

const Editor: React.FC<Props> = ({ meta }) => {
  const config = useMemo(() => initializeEditorConfig(meta), [meta]);
  const editor = useEditor(config);

  if (editor === null) return null;

  return (
    <>
      <EditorTitle editor={editor} title={meta?.title || ""} />
      <S.EditorWrapper>
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
