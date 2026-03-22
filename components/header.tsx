"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { List, WhatsappLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { EVENT } from "@/constants/event";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NAV_ITEMS = [
  { label: "Categorias", href: "#categorias" },
  { label: "Parâmetros", href: "#parametros" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#local" },
];

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex h-20 w-full items-center justify-center border-b border-theme-border bg-black/95 backdrop-blur-sm">
      <header className="mx-4 flex w-full max-w-6xl items-center justify-between">
        <Link href="#inicio" className="flex h-full items-center py-4">
          <Image src="/assets/logo.svg" alt="logo" width={80} height={38} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            onClick={() => sendGAEvent({ event: "contato", value: "whatsapp" })}
            variant="ghost"
            className="text-white hover:bg-zinc-800"
          >
            <Link
              href={EVENT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogoIcon className="text-2xl" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="text-xs uppercase tracking-[0.12em]"
          >
            <Link
              href={EVENT.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscrições
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-800"
              >
                <List className="size-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu Pardus</SheetTitle>
                <SheetDescription>
                  Navegue rapido pelas secoes principais.
                </SheetDescription>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="justify-start text-left uppercase"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}

                <Button asChild className="mt-3 w-full uppercase">
                  <Link
                    href={EVENT.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inscreva-se agora
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full uppercase">
                  <Link
                    href={EVENT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};
