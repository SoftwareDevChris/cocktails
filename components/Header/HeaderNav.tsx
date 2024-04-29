"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
      {/* Mobile menu */}
      <div className="block md:hidden">
        {!isMenuOpen ? (
          <RiMenu2Fill
            className="text-2xl z-50"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <>
            <RiMenu3Fill
              className="text-2xl z-50"
              onClick={() => setIsMenuOpen(false)}
            />
            <ul className="absolute text-center left-0 bg-[#141414] z-40 py-6 px-4 w-full flex flex-col space-y-6 uppercase tracking-wide font-Oswald">
              <li className="cursor-pointer hover:underline underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-2">
                <Link href="/recipes">Recipes</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Website Menu */}
      <div className="hidden md:block">
        <ul className="flex space-x-6 uppercase tracking-wide font-Oswald">
          <li className="cursor-pointer hover:underline underline-offset-2">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-2">
            <Link href="/recipes">Recipes</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-2">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};