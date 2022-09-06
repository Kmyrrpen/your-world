import { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import { useEditor } from '@tiptap/react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { world } from '@/app/world';
import EditorNavbar from '../EditorNavbar';
import Editor from '../Editor';
import EditorTitle from '../EditorTitle';
import EditorLinkSelect from '../EditorLinkSelect';
import EditorToolbar from '../EditorToolbar';
import initConfig from './config';

const S = styled.div`
  width: ${(p) => p.theme.constants.contentWidth.default};
  max-width: ${(p) => p.theme.constants.contentWidth.max};

  .editor-container {
    padding: 1rem 0 4rem;
  }
`;

type Props = {
  isNew?: true;
};

const Edit: React.FC<Props> = ({ isNew }) => {
  // grab the meta with id in url
  const { id } = useParams();
  const { files } = useSnapshot(world);
  const meta = id ? files[id] : undefined;

  // starts editable if query param edit is true or creating a new file
  const [searchParams] = useSearchParams();
  const editable = searchParams.get('edit') === 'true' || Boolean(isNew);

  const config = useMemo(() => initConfig(meta, editable), [meta]);
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
