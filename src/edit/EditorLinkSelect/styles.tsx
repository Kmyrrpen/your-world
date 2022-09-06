import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2.5rem;
  background-color: #00000022;
  z-index: 50;

  .modal {
    width: 100%;
    max-width: 32rem;
    min-height: 10rem;
    padding: 1rem;
    background-color: #fff;
  }

  .title {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .link-input {
    width: 100%;
    font-size: 1rem;
    font-family: inherit;
    border: none;
    border-bottom: 1px solid ${(p) => p.theme.borderColor};
    outline: none;

    &:focus {
      border-bottom-width: 2px;
    }
  }
`;

const S = { ModalWrapper };
export default S;
