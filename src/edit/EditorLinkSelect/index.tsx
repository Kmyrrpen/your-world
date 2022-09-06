import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tiptap/react';
import S from './styles';

type Props = {
  editor: Editor;
};

const EditorLinkSelect: React.FC<Props> = ({ editor }) => {
  const [draftLink, setDraftLink] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (!editor.storage.customMods.showLinkSelect) return null;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draftLink.length > 0) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: draftLink })
        .closeLinkSelect()
        .run();
    } else {
      editor.commands.closeLinkSelect();
    }
  };

  return (
    <S.ModalWrapper onClick={() => editor.commands.closeLinkSelect()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="title">Attach Link</h2>
        <form onSubmit={onSubmit}>
          <input
            className="link-input"
            spellCheck="false"
            ref={inputRef}
            value={draftLink}
            onChange={(e) => setDraftLink(e.target.value)}
          />
        </form>
      </div>
    </S.ModalWrapper>
  );
};

export default EditorLinkSelect;
