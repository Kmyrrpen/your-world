import styled, { css } from "styled-components";

type SpacerProps = {
  larger?: boolean;
};

const Spacer = styled.div<SpacerProps>`
  display: flex;
  gap: ${(p) => (p.larger ? "0.5rem" : "0.2rem")};
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

type IconProps = {
  isActive?: boolean;
};

const EditorIcon = styled.button<IconProps>`
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
`;

const S = { Toolbar, EditorIcon, Spacer, LastItem };
export default S;
