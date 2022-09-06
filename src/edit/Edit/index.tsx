import { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import { useEditor } from '@tiptap/react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { world } from '@/app/world/store';
import EditorNavbar from '../EditorNavbar';
import Editor from '../Editor';
import EditorTitle from '../EditorTitle';
import EditorLinkSelect from '../EditorLinkSelect';
import EditorToolbar from '../EditorToolbar';
import initializeEditorConfig from './config';

const S = styled.div`
  ${(p) => p.theme.constants.contentWidth};
  .editor-container {
    padding: 1rem 0 4rem;
  }
`;

const Edit: React.FC = () => {
  const { id } = useParams();
  const { files } = useSnapshot(world);
  const [searchParams] = useSearchParams();
  const startEditable = searchParams.get('edit') === 'true' || id === 'new';

  const meta = id ? files[id] : undefined;
  const config = useMemo(
    () => initializeEditorConfig(meta, startEditable),
    [meta],
  );

  const editor = useEditor(config);

  return (
    <S>
      <EditorNavbar editor={editor} />
      <div className="editor-container">
        {editor ? (
          <>
            <EditorTitle editor={editor} />
            <EditorToolbar editor={editor} />
            <EditorLinkSelect editor={editor} />
            <Editor editor={editor} />
          </>
        ) : null}
      </div>
    </S>
  );
};

export default Edit;
