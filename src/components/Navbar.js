import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

  return (
    <>
      <Navbar sticky="top" className="nav-bar" variant="light">
        <Container>
          <Navbar.Brand href="#home">
         
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
         </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
