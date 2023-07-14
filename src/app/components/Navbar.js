"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="mt-10 flex justify-between items-center w-[90%] h-full sm:ml-20">
        <div className=" flex  ">
          <Image src="/logo.png" alt="/" width="160" height="60" />

          <ul className="hidden md:flex ">
            <li className="ml-8 text-sm uppercase hover:border-b border-blue-600 hover:text-blue-600">
              <Link href="#home">Product</Link>
            </li>

            <li className="ml-8 text-sm uppercase hover:border-b hover:text-blue-600 border-blue-600">
              <Link href="#about">Solutions </Link>
            </li>
            <li className="ml-8 text-sm uppercase hover:border-b  hover:text-blue-600 border-blue-600">
              {" "}
              <Link href="#skills">Pricing </Link>
            </li>
            <li className="ml-8 text-sm uppercase hover:border-b  hover:text-blue-600 border-blue-600">
              {" "}
              <Link href="#projects">Learn </Link>
            </li>
            <li className="ml-8 text-sm uppercase hover:border-b  hover:text-blue-600 border-blue-600">
              <Link href="#contact">Contact </Link>
            </li>
          </ul>
        </div>

        <div className="space-x-2 items-center">
          <SearchIcon size={20} />
          <Button
            variant="outlined"
            size="large"
            className="hover:bg-blue-600 hover:text-white "
          >
            Log In
          </Button>
          <Button
            variant="contained"
            size="large"
            className="bg-blue-600 text-white hover:outline-blue-700 hover:text-blue-700 hover:bg-white"
          >
            Start My Free Trial
          </Button>
        </div>
      </div>
      <div className="border-b border-blue-100"></div>
      <div className="uppercase text-xs sm:ml-20 mt-10 cursor-pointer">
        <Link href="/">Back to Templates</Link>
      </div>
    </>
  );
};

export default Navbar;
