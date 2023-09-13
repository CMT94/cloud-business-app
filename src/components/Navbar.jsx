import React from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Button from "./shared/Button";
import ButtonLink from "./shared/ButtonLink";
import { Link } from "react-scroll";

const navLinks = [
  { title: "Home", href: "home", offset: 0 },
  { title: "About", href: "about", offset: -350 },
  { title: "Support", href: "support", offset: -60 },
  { title: "Pricing", href: "pricing", offset: -50 },
];

const Navbar = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] =
    React.useState(false);

  const toggleClick = () => setIsMobileMenuDisplayed((prevState) => !prevState);
  const closeMobileMenu = () => setIsMobileMenuDisplayed(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="w-full h-full px-2 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            {navLinks.map((navLink, navLinkIndex) => (
              <li
                key={navLinkIndex}
                className="font-normal cursor-pointer hover:text-indigo-700 hover:transition duration-300 ease-in-out"
              >
                <Link
                  to={navLink.href}
                  offset={navLink.offset}
                  smooth={true}
                  duration={500}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <ButtonLink>Sign In</ButtonLink>
          <Button type="solid">Sign Up</Button>
        </div>

        <div className="md:hidden mr-4">
          {!isMobileMenuDisplayed ? (
            <MenuIcon
              className="w-[24px] cursor-pointer"
              onClick={toggleClick}
            />
          ) : (
            <XIcon className="w-[24px] cursor-pointer" onClick={toggleClick} />
          )}
        </div>
      </div>

      <ul
        className={
          !isMobileMenuDisplayed ? "hidden" : "absolute bg-zinc-200 w-full px-8"
        }
      >
        {navLinks.map((navLink, navLinkIndex) => (
          <li
            key={navLinkIndex}
            className="border-b-2 border-zinc-300 w-full cursor-pointer hover:text-indigo-700 hover:transition duration-300 ease-in-out"
          >
            <Link
              to={navLink.href}
              offset={navLink.offset}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              {navLink.title}
            </Link>
          </li>
        ))}
        <div className="flex flex-col my-4">
          <Button type="outline">Sign In</Button>
          <Button type="solid">Sign Up</Button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
