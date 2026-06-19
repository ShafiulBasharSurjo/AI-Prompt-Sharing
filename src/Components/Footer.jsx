"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-r from-[#050014] via-[#12003a] to-[#1a044d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src={logo}
                width={42}
                height={42}
                alt="Logo"
                className="rounded-xl shadow-md"
              />

              <h2 className="text-3xl font-bold">
                Prompt
                <span className="text-fuchsia-500">Hub</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-300">
              Discover, share, and monetize high-quality AI prompts for ChatGPT,
              Gemini, Claude, Midjourney, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/prompts">All Prompts</Link>
              </li>

              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link href="/categories">Categories</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Community</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="#">Trending Prompts</Link>
              </li>

              <li>
                <Link href="#">Top Creators</Link>
              </li>

              <li>
                <Link href="#">Become a Creator</Link>
              </li>

              <li>
                <Link href="#">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Stay Updated</h3>

            <p className="mb-4 text-sm text-gray-300">
              Get new prompt collections and platform updates directly in your
              inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-xl border border-fuchsia-500 bg-transparent px-4 py-3 outline-none"
              />

              <button
                className="
                  rounded-r-xl
                  bg-linear-to-r
                  from-purple-500
                  to-fuchsia-500
                  px-5
                  font-semibold
                  transition
                  hover:opacity-90
                "
              >
                Subscribe
              </button>
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-fuchsia-500 hover:text-fuchsia-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-fuchsia-500 hover:text-fuchsia-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-fuchsia-500 hover:text-fuchsia-500"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-fuchsia-500 hover:text-fuchsia-500"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-400 md:flex-row">
          <p>
            © 2026 <span className="text-fuchsia-500">PromptHub</span>. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy">Privacy Policy</Link>

            <Link href="/terms">Terms of Service</Link>

            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-700/20 blur-3xl" />
    </footer>
  );
}

export default Footer;
