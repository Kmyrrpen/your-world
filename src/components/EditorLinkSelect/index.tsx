import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/react";

import { closeLinkSelect } from "../Editor";
import S from "./styles";

type Props = {
  editor: Editor;
};

const EditorLinkSelect: React.FC<Props> = ({ editor }) => {
  const [draftLink, setDraftLink] = useState(
    editor?.getAttributes("link").href
  );

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draftLink === "")
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    else {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: draftLink })
        .run();
    }
    
    closeLinkSelect();
  };

  return (
    <S.ModalWrapper onClick={() => closeLinkSelect()}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <S.LinkInput
            ref={inputRef}
            value={draftLink}
            onChange={(e) => setDraftLink(e.target.value)}
          />
        </form>
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default EditorLinkSelect;
