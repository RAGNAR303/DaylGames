import Image from "next/image";

import { FaRegCirclePlay } from "react-icons/fa6";
import { GameProps } from "@/src/utils/types/game";
import Link from "next/link";

interface CardProps {
  data: GameProps;
}

export function Card({ data }: CardProps) {
  return (
    <Link href={`/game/details/${data.id}`} className="w-full">
      <article className="group flex flex-col gap-4 p-2  backdrop-blur-2xl  bg-linear-to-l to-zinc-800/50 from-emerald-300/20  rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60 hover:border-emerald-500 duration-200 h-full hover:ring-2 hover:ring-emerald-500/25">
        <div className=" h-35 sm:h-40 md:h-56 overflow-hidden rounded-tl-xl rounded-br-xl relative">
          <Image
            src={data.image_url}
            alt={data.title}
            quality={100}
            fill={true}
            sizes="(max-width:768px) 100vw , (max-width:1200px) 44vw"
            className=" group-hover:scale-105 duration-300 object-cover "
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold text-sm text-shadow-2xs text-shadow-zinc-900 line-clamp-1">
            {data.title}
          </p>
          <button className="bg-gray-300/15 rounded-full">
            <FaRegCirclePlay className="animate-pulse " />
          </button>
        </div>
      </article>
    </Link>
  );
}
