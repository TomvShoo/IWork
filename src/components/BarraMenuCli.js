import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const BarraMenuCli = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/MenuCli">
          <EngineeringIcon color="primary" />
          IWork
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              IWork
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="Buscar"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/MenuCli">Menu Principal</Nav.Link>
              <NavDropdown
                title="Perfil"
                id="offcanvasNavbarDropdown-expand-lg"
              >
                <NavDropdown.Item href="/PerfilCliente">
                  <PersonIcon color="primary" /> Mi Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/EditarPerfilCli">
                  <ModeEditIcon color="primary" />
                  Editar Perfil
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">
                <HighlightOffIcon color="primary" /> Cerrar Sesión
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default BarraMenuCli;
