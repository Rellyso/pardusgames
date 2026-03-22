import { MapPin, Navigation, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CATEGORIES,
  EVENT,
  INSTAGRAM_POSTS,
  PARAMETERS,
  SPONSORS,
  STAFF,
  TESTIMONIALS,
} from "@/constants/event";

const GALLERY_PLACEHOLDERS = [
  { id: "gallery-1", aspect: "aspect-4/3" },
  { id: "gallery-2", aspect: "aspect-square" },
  { id: "gallery-3", aspect: "aspect-square" },
  { id: "gallery-4", aspect: "aspect-4/3" },
  { id: "gallery-5", aspect: "aspect-square" },
  { id: "gallery-6", aspect: "aspect-square" },
] as const;

const TESTIMONIAL_MARQUEE_ITEMS = TESTIMONIALS.flatMap((item) => [
  {
    ...item,
    id: `${item.name}-${item.category}-a`,
  },
  {
    ...item,
    id: `${item.name}-${item.category}-b`,
  },
]);

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="font-heading text-4xl uppercase leading-none sm:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-theme-primary">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function CategoriesSection() {
  return (
    <section
      id="categorias"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Categorias" />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <article
            key={category.name}
            className={`rounded-md border border-theme-border bg-[#1A1A1A] p-4 sm:p-5 ${
              category.featured
                ? "border-theme-primary shadow-[0_0_0_1px_#e5a800]"
                : ""
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-3xl uppercase leading-none sm:text-4xl">
                {category.name}
              </h3>
              {category.featured ? (
                <Badge className="rounded-sm text-[10px] tracking-[0.12em]">
                  TOP
                </Badge>
              ) : null}
            </div>
            <ul className="space-y-2 text-sm uppercase text-zinc-200 sm:text-base">
              {category.divisions.map((division) => (
                <li key={`${category.name}-${division}`}>{division}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ParametersSection() {
  return (
    <section
      id="parametros"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Parâmetros" />
      <div className="rounded-md border border-theme-border bg-[#141414] px-5 py-2 sm:px-8">
        <Accordion type="single" collapsible>
          {PARAMETERS.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto rounded-md border border-theme-border bg-[#101010]">
                  <table className="min-w-full text-left text-xs uppercase sm:text-sm">
                    <thead>
                      <tr className="border-b border-theme-border bg-black/40 text-theme-primary">
                        <th className="px-3 py-2 font-heading text-base">
                          Parâmetros
                        </th>
                        <th className="px-3 py-2 font-heading text-base">
                          Feminino
                        </th>
                        <th className="px-3 py-2 font-heading text-base">
                          Masculino
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows.map((row) => (
                        <tr
                          key={`${item.key}-${row.movement}`}
                          className="border-b border-theme-border/60 last:border-b-0"
                        >
                          <td className="px-3 py-2 font-medium text-zinc-100">
                            {row.movement}
                          </td>
                          <td className="px-3 py-2 text-zinc-300">
                            {row.female}
                          </td>
                          <td className="px-3 py-2 text-zinc-300">
                            {row.male}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-6 sm:mt-8">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={EVENT.regulationLink}>
            Baixar regulamento completo (PDF)
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="equipe" className="bg-[#f5f5f0] py-14 text-black sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionTitle title="Equipe Oficial" subtitle="Staff do evento" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {STAFF.map((person) => (
            <article
              key={person.role}
              className="rounded-md border border-zinc-300 bg-white p-4"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="size-14 rounded-full border border-zinc-300 bg-zinc-200" />
                <div>
                  <h3 className="font-semibold uppercase">{person.name}</h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#9e7700]">
                    {person.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Pardus Games 2024" subtitle="Edição anterior" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {GALLERY_PLACEHOLDERS.map((item) => (
          <article
            key={item.id}
            className={`group relative overflow-hidden rounded-md border border-theme-border ${item.aspect}`}
          >
            <Image
              src="/assets/images/pardus-2024.png"
              alt="Galeria Pardus Games 2024"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/45" />
            <div className="absolute bottom-2 right-2 rounded-sm border border-theme-primary bg-black/60 px-2 py-1 text-xs uppercase tracking-[0.12em] text-theme-primary opacity-0 transition duration-300 group-hover:opacity-100">
              Expandir
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link
            href={EVENT.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais fotos
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Ultimas no Instagram" subtitle="@pardusgames" />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {INSTAGRAM_POSTS.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-md border border-theme-border bg-[#121212]"
          >
            <div className="relative aspect-square">
              <Image
                src="/assets/images/pardus-2024.png"
                alt={`Preview ${post.title} no Instagram`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute left-2 top-2">
                <Badge className="rounded-sm text-[10px] tracking-[0.12em]">
                  Instagram
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-zinc-200">
                {post.title}
              </p>
              <Button asChild size="sm" variant="outline" className="h-8 px-3">
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="overflow-hidden bg-black py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionTitle title="O que dizem os atletas" />
        <div className="relative">
          <div className="testimonial-marquee flex w-max gap-4">
            {TESTIMONIAL_MARQUEE_ITEMS.map((item) => (
              <article
                key={item.id}
                className="w-72.5 shrink-0 rounded-md border border-theme-border bg-[#151515] p-5 sm:w-85"
              >
                <div className="mb-4 size-12 rounded-full border border-theme-border bg-zinc-800" />
                <p className="text-lg leading-snug text-white sm:text-xl">
                  \"{item.quote}\"
                </p>
                <p className="mt-5 text-sm font-semibold uppercase text-theme-primary">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">
                  {item.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="bg-[#1A1A1A] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionTitle title="Apoio e realização" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SPONSORS.map((sponsor, index) => (
            <article
              key={sponsor}
              className={`flex h-24 items-center justify-center rounded-md border uppercase tracking-widest ${
                index === 0
                  ? "border-theme-primary bg-black text-theme-primary"
                  : "border-theme-border bg-zinc-900 text-zinc-300"
              }`}
            >
              {index === 0 ? <Trophy className="mr-2 size-4" /> : null}
              <span className="text-xs sm:text-sm">{sponsor}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section
      id="local"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Onde vai acontecer" />
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <article className="rounded-md border border-theme-border bg-[#121212] p-2">
          <div className="aspect-video rounded-sm border border-theme-border bg-[url('https://mossoronoar.com.br/wp-content/uploads/2023/12/sesc-mossoro.jpg')] bg-cover bg-center p-6">
            <div className="h-full w-full rounded-sm border border-theme-primary/30 bg-black/60 p-6">
              <p className="font-heading text-4xl uppercase text-theme-primary sm:text-6xl">
                SESC
              </p>
              <p className="text-lg uppercase sm:text-2xl">Mossoró / RN</p>
            </div>
          </div>
        </article>

        <article className="rounded-md border border-theme-border bg-[#121212] p-5">
          <h3 className="font-heading text-3xl uppercase">SESC Mossoró</h3>
          <ul className="mt-4 space-y-3 text-sm uppercase text-zinc-300">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-theme-primary" />
              Mossoró · Rio Grande do Norte
            </li>
            <li className="flex items-center gap-2">
              <Navigation className="size-4 text-theme-primary" />
              23 e 24 de maio de 2026
            </li>
          </ul>
          <p className="mt-5 text-sm uppercase text-zinc-300">
            Dica para atletas de fora: reserve hospedagem com antecedencia em
            areas centrais para facilitar o deslocamento.
          </p>
          <div className="mt-6">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href="https://maps.google.com/?q=SESC+Mossoró"
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
