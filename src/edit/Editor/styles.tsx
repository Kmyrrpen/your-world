import styled from 'styled-components';

const S = styled.div`
  min-height: 20rem;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .editor-content {
    display: flex;
    flex-grow: 1;
  }

  .ProseMirror {
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export default S;
