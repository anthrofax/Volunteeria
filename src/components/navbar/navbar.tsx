import {
  Button,
  CustomFlowbiteTheme,
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import Image from "next/image";
import FlowbiteLink from "./navbar-link";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-cyan-700 text-purple1",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
  },
};

const PAGES_LIST = ["", "about", "signup", "login"];

function Navbar() {
  return (
    <FlowbiteNavbar
      fluid
      rounded
      className="p-5 shadow-md shadow-slate-300"
      theme={customTheme}
    >
      <NavbarBrand href="/">
        <Image
          src="logo-dark.svg"
          className="mr-3"
          alt="Flowbite React Logo"
          width={55}
          height={55}
        />
        <span className="self-center whitespace-nowrap text-3xl  dark:text-white">
          Volunteeria
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <form action="/volunteers" className="hidden md:block">
          {" "}
          <Button
            pill
            gradientMonochrome="purple"
            type="submit"
            className="text-xl"
          >
            Volunteers / Jobs{" "}
            <div className="ml-2 mb-2">
              <MdOutlineVolunteerActivism size={30} />
            </div>
          </Button>
        </form>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {PAGES_LIST.map((page) => (
          <FlowbiteLink pathname={`${page}`} />
        ))}
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
