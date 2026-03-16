"use client";
import { FormEvent, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useRouter } from "next/navigation";
// interface InputProps extends HTMLInputElement{

// }

export function Input() {
  const [gameSearch, setGameSearch] = useState("");
  const router = useRouter();
  function searchGame(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (gameSearch === "") return;

    router.push(`/game/search/${gameSearch}` );
  }

  return (
    <form
      onSubmit={searchGame}
      className="flex items-center py-2 px-3 backdrop-blur-2xl  bg-linear-to-l to-zinc-800/50
     from-emerald-300/20  rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60 focus-within:border-emerald-500 focus-within:scale-[1.02] focus-within:ring-2 focus-within:ring-emerald-500/25 duration-100 transition-discrete"
    >
      <input
        type="text"
        placeholder="Está procurando algum jogo?"
        className="w-full outline-0 focus-within:text-emerald-500 font-bold"
        value={gameSearch}
        onChange={(e) => setGameSearch(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-tl-xl rounded-br-xl bg-emerald-500 p-2 
      shadow-2xl drop-shadow-md drop-shadow-zinc-800/40 opacity-70 hover:opacity-100
       duration-200 hover:scale-[1.04]"
      >
        <ImSearch className="text-zinc-900" />
      </button>
    </form>
  );
}
