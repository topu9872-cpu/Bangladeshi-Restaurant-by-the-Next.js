"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Avatar  from "../../../public/assets/avatar.gif";
import ThemeToggle from "../themeProveder/ThemeToggle";
import { Context } from "../ContextProvider/ContextProvider";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const session = authClient.useSession();
  const user = session.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { cart } = useContext(Context);
  const totalMoney = () =>
    cart.reduce((sum, item) => sum + Number(item.price.replace("$", "")), 0);

  return (
    <nav
      className={`bg-base-200 shadow-md px-4 md:px-8 
      fixed top-0 left-0 w-full z-100 flex justify-center
      transition-all duration-400 ease-out transform
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-110 p-2 shadow bg-base-100 rounded-box w-52 font-semibold border border-base-300"
            >
              <li>
                <Link
                  href="/"
                  className={pathName === "/" ? "text-[#fa3d3b]" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={pathName === "/cart" ? "text-[#fa3d3b]" : ""}
                >
                  Cart ({cart.length})
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className={pathName === "/dashboard" ? "text-[#fa3d3b]" : ""}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="btn btn-ghost text-xl md:text-2xl font-bold font-serif italic text-[#fa3d3b]"
          >
            🍛 Bangli Foods
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-2">
            <li>
              <Link
                href="/"
                className={`text-sm font-bold ${pathName === "/" && "text-[#fa3d3b]"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`text-sm font-bold ${pathName === "/cart" && "text-[#fa3d3b]"}`}
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
          {user && (
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-accent italic leading-none">
                  Welcome,
                </span>
                <span className="text-sm font-bold text-sky-500 leading-none">
                  {user.name}
                </span>
              </div>
              <div className="avatar relative">
                <div className="w-9 h-9 rounded-full  ">
                  <Image
                    src={user?.image || Avatar}
                    height={30}
                    width={30}
                    alt={user.name}
                  />
                </div>
                <span className="absolute bottom-1 right-0 block  rounded-full bg-accent border-2 border-white status status-accent animate-ping"></span>
              </div>
            </div>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                <span className="badge badge-xs indicator-item -top-1 rounded-full bg-[#fa3d3b] text-white border-none">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-110 mt-3 w-52 shadow-xl border border-base-300"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length} Items</span>
                <span className="text-[#fa3d3b] font-semibold">
                  Subtotal: ${totalMoney().toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link href="/cart" className="w-full">
                    <button className="btn btn-sm btn-block bg-[#fa3d3b] text-white border-none">
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {session.data ? (
            <button
              onClick={handleLogOut}
              className="btn btn-xs md:btn-sm btn-outline border-[#fa3d3b] text-[#fa3d3b] hover:bg-[#fa3d3b] hover:text-white transition-all font-semibold rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link href={"/signin"}>
              <button className="btn btn-xs md:btn-sm btn-outline border-[#fa3d3b] text-[#fa3d3b] hover:bg-[#fa3d3b] hover:text-white transition-all font-semibold rounded-lg">
                Login
              </button>
            </Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
