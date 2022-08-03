import styled from "styled-components";

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
`;

const Modal = styled.div`
  width: 100%;
  max-width: 32rem;
  min-height: 10rem;
  padding: 1rem;
  background-color: #fff;
`;

const LinkInput = styled.input`
  width: 100%;
`

const S = { ModalWrapper, Modal, LinkInput };
export default S;