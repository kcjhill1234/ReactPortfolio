import React from "react";
import { Menu } from "semantic-ui-react";


export default function Navbar() {
  return (
    <Menu stackable fixes="top">
      <Menu.Item header>Kenyatta's Profile</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  );
}
