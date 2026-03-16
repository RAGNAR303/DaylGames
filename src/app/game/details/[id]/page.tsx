import { Card } from "@/src/components/Card";
import { Container } from "@/src/components/container";
import { Banner } from "@/src/components/container/banner";
import { Label } from "@/src/components/label";
import { GameProps } from "@/src/utils/types/game";
import { Metadata } from "next";
import { redirect } from "next/navigation";
type DetailsProps = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params,
}: DetailsProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const response: GameProps = await fetch(
      `${process.env.DAYLGAME_URl}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } },
    )
      .then((res) => res.json())
      .catch(() => {
        return { title: "DaylGames - Seu portal de games" };
      });

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}....`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { title: "DaylGames - Seu portal de games" };
  }
}

async function getGameDetails(id: number) {
  try {
    const response = await fetch(
      `${process.env.DAYLGAME_URl}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } },
    );
    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

async function randonGame() {
  try {
    const response = await fetch(
      `${process.env.DAYLGAME_URL}/next-api/?api=game_day`,
    );

    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Details({ params }: DetailsProps) {
  const { id } = await params;
  const details: GameProps = await getGameDetails(id);
  const randon: GameProps = await randonGame();

  if (!details) {
    redirect("/");
  }

  return (
    <Container>
      {details && (
        <main className="w-full flex flex-col gap-5">
          <Banner item={details} />
          <h2 className="text-center font-extrabold md:text-2xl ">
            {details.title}
          </h2>{" "}
          <hr className="text-green-500" />
          <p className="backdrop-blur-xl  bg-linear-to-l to-zinc-800/50 from-emerald-300/20 py-2.5 px-3 rounded-tl-2xl rounded-br-2xl border-2 border-zinc-700/60  drop-shadow-md drop-shadow-zinc-800/40">
            {details.description}
          </p>
          <strong>Categorias: </strong>
          <div className="flex  flex-wrap gap-2">
            {details.categories.map((item, index) => (
              <Label key={index}>{item}</Label>
            ))}
          </div>
          <strong>Platarformas: </strong>
          <div className="flex  flex-wrap gap-2">
            {details.platforms.map((item, index) => (
              <Label key={index}>{item}</Label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <strong>Lançamento: </strong>
            <p>{details.release}</p>
          </div>
          <hr className="text-green-500" />
          <strong>Jogo recomendado </strong>
          <div className="flex h-60">
            <Card data={randon} />
          </div>
        </main>
      )}
    </Container>
  );
}
