'use client'

import { Navbar as FlowbiteNavbar } from "flowbite-react";

function Navbar() {
  return (
    <FlowbiteNavbar fluid={true} rounded={true}>
      <FlowbiteNavbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Volunteeria
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="/navbars" active={true}>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/about">About us</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/signup">Sign up</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/login">Log in</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/volunteers">Volunteers/Job</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
