import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu stackable fixed="top">
      <Menu.Item header>Kenyatta's Profile</Menu.Item>
      <Menu.Item as={NavLink} to="/" name="about" exact>
        <Menu.Item as={NavLink} to="/profile" name="profile" exact />
        <Menu.Item as={NavLink} to="/contact" name="contact" exact />
      </Menu.Item>
    </Menu>
  );
}
