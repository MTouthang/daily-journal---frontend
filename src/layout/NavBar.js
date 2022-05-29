import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="info" expand="md" light className="p-4">
        <NavbarBrand tag={Link} to="/" className="text-white mx-6">
          DAILY JOURNAL
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="text-white">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" className="text-white">
                ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" className="text-white">
                CONTACT ME
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
