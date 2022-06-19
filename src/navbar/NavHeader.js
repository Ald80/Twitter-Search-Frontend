import twitter_logo from '../twitter_logo.png'
import './NavHeader.css';

import { Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function NavHeader() {
  return (
    <Navbar bg="light" expand="lg" className="bg-dark navbar-twitter">
      <Image src={twitter_logo} style={{ "margin-left": "40px" }} rounded className="twitter-logo bg-dark" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand style={{ "padding-left": "80px" }} href="#" className="navbar-twitter">Twitter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

export default NavHeader;
