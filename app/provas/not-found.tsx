import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-heading text-3xl uppercase tracking-widest text-primary sm:text-4xl">
        Prova não encontrada
      </p>
      <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.08em] text-zinc-300 sm:text-base">
        Essa prova ainda não foi publicada. Confira as provas disponíveis na
        página inicial.
      </p>
      <Button asChild className="mt-8">
        <Link href="/#provas">Voltar para as provas</Link>
      </Button>
    </main>
  );
}
