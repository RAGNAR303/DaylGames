import { Card } from "@/src/components/Card";
import { Container } from "@/src/components/container";
import { Input } from "@/src/components/Input";
import { GameProps } from "@/src/utils/types/game";

import { PiSmileySadBold } from "react-icons/pi";
interface SearchProps {
  params: {
    title: string;
  };
}

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    console.log(decodeTitle);
    console.log(title);
    const response = await fetch(
      `${process.env.DAYLGAME_URL}/next-api/?api=game&title=${title}`,
    );

    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

export default async function Search({ params }: SearchProps) {
  const { title } = await params;
  const games: GameProps[] = await getData(title);

  return (
    <Container>
      <main className="w-full min-h-2/3">
        <Input />
        {!games && (
          <div className="flex flex-col  text-center  items-center text-emerald-500">
            <PiSmileySadBold className=" text-6xl" />
            <p>Nenhum game encontrado...</p>
          </div>
        )}
        {games && (
          <h2 className="mt-5 font-bold md:text-2xl">
            Encontramos{" "}
            <span className="text-emerald-500">{games.length} </span>games pela
            pesquisa.{" "}
          </h2>
        )}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-6">
          {games && games.map((item) => <Card data={item} key={item.id} />)}
        </section>
      </main>
    </Container>
  );
}
