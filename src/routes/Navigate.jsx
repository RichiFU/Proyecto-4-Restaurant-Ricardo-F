import { NavLink } from "react-router-dom"
// react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import "../css/estiloNav.css"

// const Navigate = () => {
//   return (
//     <header>
//         <nav>
//             <a href="/">Home</a>
//             <a href="/menu">Menu</a>
//             <a href="/about">About</a>
//             <a href="/Reserva">Reserva</a>
//             <a href="/admin">Admin</a>
//         </nav>
//     </header>
//   )
// }

// export default Navigate


const Navigate = () => {
  return (
    // <div>

    //     <NavLink to="/home">Home</NavLink>
    //     <NavLink to="/products">Products</NavLink>
    //     <NavLink to="/login">Login</NavLink>

    //     <div>
    //         <a href="/home">Home</a>
    //         <a href="/products">Products</a>
    //         <a href="/login">Login</a>
    //     </div>
    // </div>
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" className="pixel-nav">
        <Container className="custom-navbar">
          <div>
            <Nav.Link className="navlink-logo" as={NavLink} to="/">
              <Image src="../../public/arcade-logo2.jpg" className="nav-logo border border-1" rounded />
            </Nav.Link>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link as={NavLink} to="/" className="fs-4 me-2">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/menu" className="fs-4 me-2">Menu</Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="fs-4 me-2">Sobre Nosotros</Nav.Link>
                <Nav.Link as={NavLink} to="/reservas" className="fs-4 me-2">Reservas</Nav.Link>
                <Nav.Link as={NavLink} to="/contacto" className="fs-4 me-2">Contacto</Nav.Link>
                <Nav.Link as={NavLink} to="/admin" className="fs-4 me-2">Admin</Nav.Link>
          
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navigate