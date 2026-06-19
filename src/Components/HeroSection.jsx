"use client";

import { Button, Chip, Input } from "@heroui/react";
import { FiSearch, FiArrowRight } from "react-icons/fi";


const trendingTags = [
  "ChatGPT",
  "Marketing",
  "Coding",
  "SEO",
  "Business",
  "Study",
  "Midjourney",
  "Productivity",
];

export default function HeroSection() {
  return (
    <section className="bg-[#0A061F] px-6 py-10">
      <div
        className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[url('/assets/hero.png')]
      bg-cover
      bg-center
      min-h-125
    "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        <div className="relative z-10 flex h-full flex-col justify-center p-8 md:p-16">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Discover The Perfect
            <span className="block bg-linear-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              AI Prompt
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-xl text-gray-300">
            Access thousands of high-quality prompts for ChatGPT, Gemini,
            Claude, Midjourney and more.
          </p>

          {/* Search */}
          <div className="mb-8 flex max-w-3xl overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md">
            <input
              type="text"
              placeholder="Search prompts..."
              className="flex-1 bg-transparent px-6 py-5 text-white outline-none"
            />

            <button
              className="
            bg-linear-to-r
            from-fuchsia-500
            to-purple-500
            px-8
            text-white
          "
            >
              🔍
            </button>
          </div>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-3">
            {["Marketing", "Coding", "Writing", "SEO", "Business", "Study"].map(
              (tag) => (
                <span
                  key={tag}
                  className="
              rounded-full
              border
              border-fuchsia-500/30
              bg-white/5
              px-4
              py-2
              text-sm
              text-gray-200
            "
                >
                  #{tag}
                </span>
              ),
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-gray-300">
            <span>⭐ 4.9 Rating</span>
            <span>🚀 10K+ Prompts</span>
            <span>👥 5K+ Users</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-6 grid gap-6 md:grid-cols-4">
        {[
          {
            title: "Explore Prompts",
            desc: "Browse trending AI prompts",
          },
          {
            title: "Generate Content",
            desc: "Boost creativity instantly",
          },
          {
            title: "AI Automation",
            desc: "Build powerful workflows",
          },
          {
            title: "Sell Prompts",
            desc: "Monetize your expertise",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
          group
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-6
          transition-all
          hover:border-fuchsia-500/40
          hover:bg-white/10
        "
          >
            <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>

            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
