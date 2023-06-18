import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuLogo from '../../assets/menu.png';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <header>
       <Navbar expand="lg" className="bg-body-tertiary navbar-container" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">
                    <i>Anonymous Forum</i>
                </Navbar.Brand>
                <Button variant='dark' onClick={handleShow}>
                    <img src={MenuLogo} width="30px"/>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Anonymous Forum - v.0.0.1</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p>This Aplication is created by <a href='https://github.com/Porfirio-Prodigy'>@prodigy-porfirio</a></p>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header