"use client";
import { useState } from "react";

import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BiJoystickButton } from "react-icons/bi";
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  p-2.5 fixed top-0 z-50 ">
      <div className="flex items-center backdrop-blur-xl  bg-linear-to-l to-zinc-800/50 from-emerald-300/20 py-2.5 px-3 rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60  max-w-5xl mx-auto drop-shadow-md drop-shadow-zinc-800/40">
        <nav className="flex w-full px-4 items-center gap-4">
          <Link href={"/"}>
            <h1 className="flex font-extrabold md:text-2xl hover:scale-105 duration-300">
              Dayl
              <span className="flex items-center text-green-400">
                <BiJoystickButton />
                Games
              </span>
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-1 font-bold ">
            <Link
              className="hover:text-emerald-600 duration-300"
              href={"/"}
            >
              Games
            </Link>
            <Link
              className="hover:text-emerald-600 duration-300"
              href={"/profile"}
            >
              Perfil
            </Link>
          </div>
        </nav>
        <FaRegUserCircle className="text-3xl hidden sm:flex" />
        <button
          className="flex sm:hidden text-3xl p-0.5 hover:bg-emerald-800/20 rounded duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <HiMenuAlt4 />}
        </button>
      </div>

      <div
        className={`flex sm:hidden font-bold flex-col items-center backdrop-blur-2xl   bg-linear-to-l to-zinc-800/50 from-emerald-300/20 py-2.5 px-3 rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60  max-w-5xl mx-auto drop-shadow-md drop-shadow-zinc-800/40 mt-0.5 gap-3  z-50 duration-300 transition-all  ${open ? "max-h-40 opacity-100 " : "h-0 opacity-0"} `}
      >
        <div>
          <Link
            className={`hover:text-emerald-500 duration-400 ${open ? "flex opacity-100 " : "hidden opacity-0"}`}
            href={"/game"}
          >
            Games
          </Link>
          <Link
            className={`hover:text-emerald-500 duration-400 ${open ? "flex opacity-100 " : "hidden opacity-0"}`}
            href={"/profile"}
          >
            Perfil
          </Link>
        </div>
      </div>
    </header>
  );
}
