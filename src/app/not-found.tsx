import Link from "next/link";
import { Container } from "../components/container";
import { Button } from "../components/Button";

export default function Notfound() {
  return (
    <Container>
      <main className="flex gap-2 flex-col justify-center items-center h-70">
        <p className="font-extrabold text-6xl">404 </p>
        <p className="font-extrabold text-2xl">Pagina não econtrada....</p>
        <Link href={"/"}>
          <Button>Retorna para home</Button>
        </Link>
      </main>
    </Container>
  );
}
