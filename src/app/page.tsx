import { Container } from "../components/container";
import { Card } from "../components/Card";
import { GameProps } from "../utils/types/game";
import Link from "next/link";
import { Input } from "../components/Input";
import { Banner } from "../components/container/banner";

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
          <Banner item={game} />
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
