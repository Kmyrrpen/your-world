import styled from "styled-components";

type Props = {
  red?: boolean;
};

const Button = styled.button<Props>`
  min-width: 3rem;
  padding: 0.5rem 1.5rem;
  background-color: ${(p) => (p.red ? "#ca4d44" : "#000")};
  color: #fff;
  border: none;
  font-size: 0.9rem;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export default Button;
