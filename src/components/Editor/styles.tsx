import styled from "styled-components";

const EditorWrapper = styled.div`
    margin: auto;
    max-width: 50rem;
    min-height: 20rem;
    padding: 1.5rem;
    border-radius: 5px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;

  .ProseMirror {
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`

const S = { EditorWrapper };
export default S;