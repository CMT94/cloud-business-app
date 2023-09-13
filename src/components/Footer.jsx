import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

import Button from "./shared/Button";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div
      className="w-full mt-24 bg-slate-900 text-gray-300
    py-8 px-2"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              App Security
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Dashboard Design
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Analytics
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Cloud Data
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              API
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Documentation
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Guides
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Subscription
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              About
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Blog
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Jobs
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Press
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Partners
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Claims
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Privacy
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Terms
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Policies
            </li>
            <li className="py-1 cursor-pointer hover:translate-x-2 duration-300 ease-in-out">
              Conditions
            </li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles and ressources, sent to your inbox weekly.
          </p>
          <form
            action="/"
            onSubmit={(ev) => ev.preventDefault()}
            className="flex flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 mr-4 rounded-md mb-4"
            />
            <Button type="solid" customClass="p-2 mb-4">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="flex-col sm:flex max-w-[1240px] px-2 py-4 m-auto justify-between items-center sm:flex-row text-center text-gray-500">
        <p>{currentYear} BRAND, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="cursor-pointer hover:text-white hover:transition duration-300 ease-in-out" />
          <FaInstagram className="cursor-pointer hover:text-white hover:transition duration-300 ease-in-out" />
          <FaTwitter className="cursor-pointer hover:text-white hover:transition duration-300 ease-in-out" />
          <FaTwitch className="cursor-pointer hover:text-white hover:transition duration-300 ease-in-out" />
          <FaGithub className="cursor-pointer hover:text-white hover:transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
