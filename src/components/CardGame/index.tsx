"use client";
import { useState } from "react";
import { RiEditCircleFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
export function GameCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handledFavorit() {
    setShowInput(!showInput);

    if (input !== "") {
      return;
    }
    setInput(input);
    setInput("");
  }

  return (
    <div
      className={`box-theme flex-col h-40  grow justify-between ${showInput ? "scale-[1.01] shadow-md shadow-emerald-600/80" : ""}`}
    >
      <div className="flex gap-2">
        <button
          onClick={handledFavorit}
          className="text-3xl hover:scale-110 duration-200 transition-all"
        >
          {!showInput ? <RiEditCircleFill /> : <MdCancel />}
        </button>

        {showInput && (
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Digite o nome do jogo..."
            className="bg-emerald-500/25 w-full border-2 border-zinc-700/60 p-1 rounded-md"
          />
        )}
      </div>

      {!showInput && !input && (
        <div>
          <p className="font-black">Adicione um Jogo</p>
        </div>
      )}

      {input && (
        <div>
          <p>Jogo favorito: </p>
          <p className="font-black">{input}</p>
        </div>
      )}
    </div>
  );
}
