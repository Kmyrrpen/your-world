import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import S from "./styles";

type Props = {
  editor: Editor;
};

const EditorLinkSelect: React.FC<Props> = ({ editor }) => {
  const [draftLink, setDraftLink] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draftLink.length > 0) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: draftLink })
        .closeLinkSelect()
        .run();
    } else {
      editor.commands.closeLinkSelect();
    }
  };

  return (
    <S.ModalWrapper onClick={() => editor.commands.closeLinkSelect()}>
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
