import styled, { css } from "styled-components";

const Spacer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

const LastItem = styled.div`
  margin-left: auto;
`;

const Toolbar = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin-bottom: 1rem;
`;

type ButtonProps = React.PropsWithChildren<{
  isActive?: boolean;
  inverted?: boolean;
}>;

const EditorButton = styled.button<ButtonProps>`
  min-width: 1.5rem;
  padding: 0.3rem;
  background-color: #fff;
  border: none;
  color: #000;

  ${(p) =>
    p.isActive
      ? css`
          background-color: #000;
          color: #fff;
        `
      : ""}

  ${(p) =>
    p.inverted
      ? css`
          background-color: #000;
          color: #fff;
        `
      : ""}
`;

const S = { Toolbar, EditorButton, Spacer, LastItem };
export default S;
