import { Container } from "@/src/components/container";
import Image from "next/image";
import userAvatar from "@/public/user.png";
import { Button } from "@/src/components/Button";
import { FaShareAlt } from "react-icons/fa";
import { GameCard } from "@/src/components/CardGame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - Dalygames sua plataforma de jogos!",
  description: "Perfil Ragnar303",
};

export default function Profile() {
  return (
    <Container>
      <section className="flex flex-col gap-2 sm:flex-row w-full items-center  sm:items-start justify-between">
        <div className="flex gap-3 flex-col md:flex-row items-center justify-between">
          <Image
            src={userAvatar}
            alt="user-avatar"
            className="rounded-full w-40 h-40 "
          />
          <p className="text-2xl font-black">Ragnar303</p>
        </div>

        <div className="flex gap-2">
          <Button>Configuração</Button>
          <Button>
            <FaShareAlt className="text-2xl" />
          </Button>
        </div>
      </section>

      <p className="font-black text-2xl mt-10">Jogos Favoritos</p>
      <section className="w-full flex h-full flex-col  gap-3 md:flex-wrap md:flex-row mt-10 ">
        <GameCard />
        <GameCard />
        <GameCard />
      </section>
    </Container>
  );
}
