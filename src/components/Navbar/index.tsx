import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Dashboard</Link>
      <Link to="/new">Create Article</Link>
    </Container>
  )
}

export default Navbar;