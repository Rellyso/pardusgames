import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { EVENT } from "@/constants/event";
import Logo from "@/public/assets/logo.svg";

export function Footer() {
  return (
    <footer
      className={clsx(
        "relative w-full overflow-hidden min-h-72 flex items-center",
        "border-t border-theme-border bg-black",
      )}
    >
      <div className="-translate-1/2 absolute left-1/2 top-full z-0 flex h-24 w-64 items-center justify-center bg-theme-primary blur-3xl" />

      <div
        className={clsx(
          "relative z-10 mx-auto w-full max-w-6xl px-4 py-14",
          "flex flex-col items-center justify-between gap-8 text-zinc-300 md:flex-row md:items-end",
        )}
      >
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Image className="w-32" src={Logo} alt="Pardus Games Logo" />
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            @pardusgames
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.12em] md:justify-end">
            <Link
              className="transition-colors hover:text-white"
              href="#categorias"
            >
              Categorias
            </Link>
            <Link
              className="transition-colors hover:text-white"
              href="#parametros"
            >
              Parâmetros
            </Link>
            <Link
              className="transition-colors hover:text-white"
              href={EVENT.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscrições
            </Link>
            <Link className="transition-colors hover:text-white" href="#local">
              Contato
            </Link>
          </nav>

          <Link
            href={EVENT.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.14em] text-theme-primary transition-colors hover:text-white"
          >
            Instagram {EVENT.instagram}
          </Link>

          <p className="text-center text-xs uppercase tracking-[0.14em] text-zinc-500 md:text-right">
            © 2026 Pardus Games · Organizado pelo Box Pardus
          </p>

          <p className="text-center text-xs uppercase tracking-[0.14em] text-zinc-500 md:text-right">
            Desenvolvido por{" "}
            <Link
              href="https://instagram.com/rellysondouglaas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-primary transition-colors hover:text-white"
            >
              Rellyson Douglas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
