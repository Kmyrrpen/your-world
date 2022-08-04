import { contentWidth } from "@/styles/constants";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  ${contentWidth}
`;

const Spacer = styled.div`
  display: flex;
  gap: 1rem;
`

const LastItem = styled.div`
  margin-left: auto;
`;

const S = { Navbar, LastItem, Spacer };
export default S;
