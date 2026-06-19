"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = false;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-linear-to-r from-[#050014]/95 via-[#12003a]/95 to-[#1a044d]/95 shadow-lg backdrop-blur-xl">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo}
              width={42}
              height={42}
              alt="Logo"
              className="rounded-xl shadow-md"
            />

            <div className="flex flex-col leading-none">
              <h2 className="text-3xl font-bold">
                Prompt
                <span className="text-fuchsia-500">Hub</span>
              </h2>
              <span className="text-xs text-default-500">
                AI Prompt Marketplace
              </span>
            </div>
          </Link>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link
              href="/"
              className="text-default-600 transition-colors duration-200 hover:text-primary"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/prompts"
              className="text-default-600 transition-colors duration-200 hover:text-primary"
            >
              All Prompts
            </Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Button
                  as={Link}
                  href="/login"
                  variant="bordered"
                  radius="full"
                  size="sm"
                  startContent={<FiLogIn size={16} />}
                  className=" border-default-500/50 bg-white/5 px-5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Login
                </Button>
              </li>

              <li>
                <Button
                  as={Link}
                  href="/register"
                  radius="full"
                  size="sm"
                  startContent={<FiUserPlus size={16} />}
                  className="bg-linear-to-r from-violet-500 to-fuchsia-500 px-5font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/50"
                >
                  Register
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Button color="danger" variant="flat" size="sm">
                  Logout
                </Button>
              </li>
            </>
          )}
        </ul>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>

            <li>
              <Link href="/prompts" className="block py-2">
                All Prompts
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link href="/login" className="block py-2">
                    Login
                  </Link>
                </li>

                <li>
                  <Link href="/register" className="block py-2">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/dashboard" className="block py-2">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Button
                    color="danger"
                    variant="flat"
                    size="sm"
                    className="mt-2 w-full"
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
