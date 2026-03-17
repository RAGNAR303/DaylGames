import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="p-2 bg-emerald-500 opacity-80 hover:opacity-100 hover:scale-105 font-black
   scale-[1.03] duration-300 transition-discrete text-zinc-800 rounded"
    >
      {children}
    </button>
  );
}
