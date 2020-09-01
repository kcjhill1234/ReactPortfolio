import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu stackable fixed="top">
      <Menu.Item header className="profileName">
        Kenyatta Hill: Portfolio
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" name="about" exact />
      <Menu.Item as={NavLink} to="/profile" name="profile" exact />
      <Menu.Item as={NavLink} to="/contact" name="contact" exact />
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/LinkedIn" name="LinkedIn" exact />
        <Menu.Item as={NavLink} to="/GitHub" name="GitHub" exact />
      </Menu.Menu>
    </Menu>
  );
}
