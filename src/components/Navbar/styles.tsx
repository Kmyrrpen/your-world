import styled from "styled-components";

const S = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  ${(p) => p.theme.constants.contentWidth};

  .spacer {
    display: flex;
    gap: 1rem;
  }

  .last-item {
    margin-left: auto;
  }
`;

export default S;
