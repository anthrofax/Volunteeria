"use client";

import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function FlowbiteLink({ pathname }: { pathname: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <NavbarLink
      as={Link}
      href={`/${pathname}`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isHovered ? "text-purple1" : ""} text-base`}
      active={currentPath === `/${pathname}`}
    >
      {pathname[0] ? pathname[0]?.toUpperCase() + pathname.slice(1) : "Home"}
    </NavbarLink>
  );
}

export default FlowbiteLink;
