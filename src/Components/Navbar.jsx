"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = false;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
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

          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              src={logo}
              width={40}
              height={80}
              alt="Logo"
              className="rounded-lg object-cover"
            />{" "}
            PromptsHub
          </Link>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/prompts">All Prompts</Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>

              <li>
                <Button as={Link} href="/register" color="primary" size="sm">
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
