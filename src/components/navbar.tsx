"use client";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { Navbar as FlowbiteNavbar, Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  return (
    <FlowbiteNavbar fluid rounded className="p-5 shadow-md shadow-slate-300 ">
      <FlowbiteNavbar.Brand href="https://flowbite-react.com">
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
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2 items-center gap-5">
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link href="/about" className="nav-links">
            About
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/signup" className="nav-links">
            Sign up
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/login" className="nav-links">
            Login
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/login" className="nav-links block md:hidden bg-purple2 text-white2">
            Volunteers / Jobs
          </FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>

        <form action="/volunteers" className="hidden md:block">
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
        <FlowbiteNavbar.Toggle />
      </div>
    </FlowbiteNavbar>
  );
}

export default Navbar;
