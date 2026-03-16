import Image from "next/image";
import { Container } from "../components/container";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Card } from "../components/Card";
import { GameProps } from "../utils/types/game";
import Link from "next/link";
import { Input } from "../components/Input";

async function getRandonGame() {
  try {
    const response = await fetch(
      `${process.env.DAYLGAME_URL}/next-api/?api=game_day`,
      { next: { revalidate: 360 } },
    );

    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getAllGames() {
  try {
    const response = await fetch(
      `${process.env.DAYLGAME_URL}/next-api/?api=games`,
    );

    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const game: GameProps = await getRandonGame();
  const gameAll: GameProps[] = await getAllGames();
  return (
    <Container>
      <h1 className="text-xl md:text-2xl font-bold text-center ">
        Separamos um jogo exclusivo para voçê
      </h1>
      <main className="flex flex-col gap-2.5 mt-5 w-full max-w-6xl">
        <Link href={`/game/details/${game.id}`} className="w-full">
          <section className="w-full h-64 items-center  rounded shadow-2xs overflow-hidden relative bg-black">
            <Image
              src={game.image_url}
              alt={game.title}
              quality={100}
              priority={true}
              fill={true}
              className="max-h-96 object-cover hover:scale-105 duration-300 opacity-50 hover:opacity-100 transition-all"
              sizes="(max-width:768px) 100vw , (max-width:1200px) 44vw"
            />
            <div className="absolute bottom-1.5 left-1.5 flex py-2 px-4 items-center gap-2  bg-zinc-800/50  backdrop-blur rounded">
              <p className="font-bold text-shadow-2xs text-shadow-zinc-900  ">
                {game.title}
              </p>
              <button className="bg-gray-300/15 rounded-full">
                <FaRegCirclePlay className="animate-pulse " />
              </button>
            </div>
          </section>
        </Link>

        <Input />

        <section className="flex flex-col mt-8 mb-5 ">
          <h2 className="font-bold text-xl">Jogos para conhecer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-6">
            {gameAll.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </section>
      </main>
    </Container>
  );
}
