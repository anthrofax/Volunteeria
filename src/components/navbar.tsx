"use client";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Navbar as FlowbiteNavbar, Button } from "flowbite-react";

function Navbar() {
  return (
    <FlowbiteNavbar fluid rounded>
      <FlowbiteNavbar.Brand href="https://flowbite-react.com">
        <img
          src="logo-dark.svg"
          className="mr-3 h-10 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Volunteeria
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="/about">About</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/signup">Sign up</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/login">Login</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>

      <div className="flex md:order-2">
        <form action="/volunteers" >
          <Button pill gradientMonochrome="purple" type="submit">
            Volunteers / Jobs{" "}
            <div className="ml-2 mb-2">
              <MdOutlineVolunteerActivism size={30} />
            </div>
          </Button>
          <FlowbiteNavbar.Toggle />
        </form>
      </div>
    </FlowbiteNavbar>
  );
}

export default Navbar;
