import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/constants/event";
import Banner from "@/public/assets/images/banner-2026.png";
import { EventCountdown } from "./event-countdown";

export function MainBanner() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-theme-border bg-[#0f0f0f]"
    >
      <Image
        src={Banner}
        alt="Atletas no Pardus Games"
        priority
        placeholder="blur"
        className="absolute inset-0 z-0 h-full w-full object-cover object-top opacity-30"
      />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_top_left,rgba(229,168,0,0.28),transparent_48%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 pt-10 sm:pb-20 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Badge className="mb-3 rounded-sm px-3 py-1 text-[11px] tracking-[0.18em]">
            COMPETIÇÃO EM TRIO
          </Badge>

          <h1 className="font-heading text-6xl uppercase leading-[0.9] text-white sm:text-8xl lg:text-9xl">
            PARDUS GAMES 2026
          </h1>

          <p className="mt-4 font-heading text-3xl uppercase leading-none text-theme-primary sm:text-5xl">
            {EVENT.shortDate}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-200 sm:text-base">
            {EVENT.cityState}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="sm:min-w-55">
              <Link
                href={EVENT.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscreva-se agora
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="sm:min-w-55">
              <Link href="#categorias">Ver categorias</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-zinc-300">
            Organizado por {EVENT.organizerInstagram} · Locução oficial por{" "}
            {EVENT.announcer}
          </p>
        </div>

        <div className="rounded-md border border-theme-border bg-black/65 p-4 backdrop-blur-sm sm:p-6">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-zinc-300">
            Contagem para o evento
          </p>
          <EventCountdown />
          <div className="mt-4 rounded-sm border border-theme-primary/30 bg-theme-primary/10 px-3 py-2">
            <p className="text-xs uppercase tracking-[0.13em] text-theme-primary">
              SESC Mossoró · RN
            </p>
            <p className="text-sm uppercase text-zinc-200">
              23 e 24 de maio de 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
