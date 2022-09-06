import styled from 'styled-components';

const S = styled.div`
  width: ${(p) => p.theme.constants.contentWidth.default};
  max-width: ${(p) => p.theme.constants.contentWidth.max};
  display: flex;
  align-items: center;
  padding: 1rem 0;

  .spacer {
    display: flex;
    gap: 1rem;
  }

  .last-item {
    margin-left: auto;
  }
`;

export default S;
