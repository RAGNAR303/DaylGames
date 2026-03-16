import { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex grow sm:grow-0 hover:font-bold duration-300 transition-all backdrop-blur-xl  bg-linear-to-l to-zinc-800/50 from-emerald-300/20 py-2.5 px-3 rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60  drop-shadow-md drop-shadow-zinc-800/40">
      {children}
    </div>
  );
}
