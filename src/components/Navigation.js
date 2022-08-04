import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";



const Navigation = () => { return (
    <Nav variant="pills" defaultActiveKey="/">
          
        <Nav.Item >
            <Nav.Link as={Link} to="/ReactJS-Twitter-App" >
                Home
            </Nav.Link>
        </Nav.Item>
           
        <Nav.Item >
            <Nav.Link as={Link} to="/ReactJS-Twitter-App/profile" >
                Profile
            </Nav.Link>
        </Nav.Item>
  </Nav>
)}

export default Navigation