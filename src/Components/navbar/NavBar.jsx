"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import ThemeToggle from "../themeProveder/ThemeToggle";
import { Context } from "../ContextProvider/ContextProvider";

const NavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
const{cart}=useContext(Context)
const totalMoney = () =>
  cart.reduce((sum, item) => sum + Number(item.price.replace("$", "")), 0);
  return (
    <nav
 className={`bg-base-200 shadow-md px-4 md:px-8 
fixed top-0 left-0 w-full z-50 flex justify-center
transition-all duration-700 ease-out transform
${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost text-2xl font-bold hidden md:flex lg:flex font-serif italic text-[#fa3d3b]"
        >
          🍛 Bangli Foods
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold gap-2">
          <li>
            <Link
              href="/"
              className={`text-sm font-bold  ${pathName === "/" && "text-[#fa3d3b]"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`text-sm font-bold  ${pathName === "/cart" && "text-[#fa3d3b]"}`}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`text-sm font-bold ${pathName === "/dashboard" && "text-[#fa3d3b]"}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2 md:gap-4">
        <div className="flex items-center">
          {isSearchActive ? (
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 border border-gray-200 animate-in fade-in zoom-in duration-200">
              <input
                type="text"
                placeholder="Search..."
                className="input input-sm bg-transparent border-none focus:outline-none text-black w-24 md:w-48"
                autoFocus
              />
              <IoClose
                className="cursor-pointer text-xl text-gray-500 hover:text-[#fa3d3b]"
                onClick={() => setIsSearchActive(false)}
              />
            </div>
          ) : (
            <button
              className="btn btn-ghost btn-circle hover:bg-orange-100"
              onClick={() => setIsSearchActive(true)}
            >
              <IoSearch className="text-xl" />
            </button>
          )}
        </div>

        <div className="dropdown dropdown-end hidden sm:flex">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-[#fa3d3b] text-white">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-52 shadow-xl border border-gray-100"
          >
            <div className="card-body">
              <span className="font-bold text-lg text-black">{cart.length} Items</span>
              <span className="text-[#fa3d3b] font-semibold">
                Subtotal: ${totalMoney().toFixed(2)}
              </span>
              <div className="card-actions">
                <Link href="/cart" className="w-full">
                  <button className="btn btn-sm btn-block bg-[#fa3d3b] text-white border-none hover:bg-[#fa3d3b]">
                    View Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-sm btn-outline border-[#fa3d3b] text-[#fa3d3b] hover:bg-[#fa3d3b] hover:text-white transition-all font-semibold rounded-lg">
          Logout
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
