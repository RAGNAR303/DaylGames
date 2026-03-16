import { GameProps } from "@/src/utils/types/game";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

interface BannerProps {
  item: GameProps;
}

export function Banner({ item }: BannerProps) {
  return (
    <section className="w-full h-64 items-center  rounded shadow-2xs overflow-hidden relative bg-black ">
      <Image
        src={item.image_url}
        alt={item.title}
        quality={100}
        priority={true}
        fill={true}
        className="max-h-96 object-cover hover:scale-105 duration-300 opacity-50 hover:opacity-100 transition-all"
        sizes="(max-width:768px) 100vw , (max-width:1200px) 44vw"
      />
      <div className="absolute bottom-0 flex py-2 px-4 items-center gap-2  bg-zinc-800/50  backdrop-blur rounded-tr-3xl border-2 border-green-500">
        <p className="font-extrabold text-shadow-2xs text-shadow-zinc-900 text-green-500 ">
          {item.title}
        </p>
        <button className="bg-gray-300/15 rounded-full">
          <FaRegCirclePlay className="animate-pulse " />
        </button>
      </div>
    </section>
  );
}
