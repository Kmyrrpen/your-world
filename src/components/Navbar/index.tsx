import { Link } from "react-router-dom";
import S from "./styles";

// for custom navbars
export const NavbarStyles = { ...S };

const Navbar: React.FC = () => {
  return (
    <S.Navbar>
      <Link to="/">Dashboard</Link>
      <Link to="/new">Create New</Link>
    </S.Navbar>
  );
};

export default Navbar;
