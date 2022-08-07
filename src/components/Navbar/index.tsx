import { Link } from "react-router-dom";
import Button from "../Button";
import S from "./styles";

// for custom navbars.
export const NavbarStyles = S;

const Navbar: React.FC = () => {
  return (
    <S>
      <Button as={Link} to="/dashboard">
        Dashboard
      </Button>
      <div className="last-item">
        <Button as={Link} to="/dashboard/new">
          Create New
        </Button>
      </div>
    </S>
  );
};

export default Navbar;
