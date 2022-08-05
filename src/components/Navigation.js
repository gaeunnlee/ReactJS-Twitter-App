import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import styles from "styles/Navigation.module.css"




const Navigation = () => { return (
    <Nav variant="pills" defaultActiveKey="1" className={styles.nav}>
        <Nav.Item >
            <Nav.Link as={Link} to="/ReactJS-Twitter-App" eventKey="1">
                <i className="bi-house-door-fill"></i>
            </Nav.Link>
        </Nav.Item>        
        <Nav.Item >
            <Nav.Link as={Link} to="/ReactJS-Twitter-App/profile" eventKey="2">
                <i className="bi-person-fill"></i>
            </Nav.Link>
        </Nav.Item>
  </Nav>
)}

export default Navigation