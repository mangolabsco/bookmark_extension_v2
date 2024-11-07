import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.svg";
import "./NavbarComponent.css";
import RestoreSessionComponent from "../Pages/RestoreSessionComponent";
import SaveTabsComponent from "../Pages/SaveTabsComponent";
const NavbarComponent = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Container className="navbar">
      {/* Navbar */}
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                active={activeTab === "save"}
                onClick={() => setActiveTab("save")}
              >
                Save
              </Nav.Link>
              <Nav.Link
                href="#profile"
                active={activeTab === "restore"}
                onClick={() => setActiveTab("restore")}
              >
                Restore
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container className="mt-4">
        {activeTab === "save" && (
          <p>
            <SaveTabsComponent />
          </p>
        )}
        {activeTab === "restore" && <RestoreSessionComponent />}
      </Container>
    </Container>
  );
};

export default NavbarComponent;
