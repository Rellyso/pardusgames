import { MapPin, Navigation, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Masonry, type MasonryItem } from "@/components/reactbits/masonry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  WHO_WE_ARE,
} from "@/constants/event";
import { workouts } from "@/constants/workouts-data";
import { cn } from "@/lib/utils";
import { WorkoutCard } from "@/components/workout-card";

const GALLERY_MASONRY_ITEMS: MasonryItem[] = [
  {
    id: "gallery-1",
    img: "/assets/images/previous-editions/01.jpeg",
    url: EVENT.instagramLink,
    height: 230,
    title: "Pardus Games 2024",
  },
  {
    id: "gallery-2",
    img: "/assets/images/previous-editions/02.jpeg",
    url: EVENT.instagramLink,
    height: 320,
    title: "Pardus Games 2024",
  },
  {
    id: "gallery-3",
    img: "/assets/images/previous-editions/03.jpeg",
    url: EVENT.instagramLink,
    height: 260,
    title: "Pardus Games 2024",
  },
  {
    id: "gallery-4",
    img: "/assets/images/previous-editions/04.jpeg",
    url: EVENT.instagramLink,
    height: 300,
    title: "Pardus Games 2024",
  },
  {
    id: "gallery-5",
    img: "/assets/images/previous-editions/05.jpeg",
    url: EVENT.instagramLink,
    height: 220,
    title: "Pardus Games 2024",
  },
  {
    id: "gallery-6",
    img: "/assets/images/previous-editions/06.jpeg",
    url: EVENT.instagramLink,
    height: 340,
    title: "Pardus Games 2024",
  },
];

const TESTIMONIAL_MARQUEE_ITEMS = TESTIMONIALS.flatMap((item) => [
  {
    ...item,
    id: `${item.name}-${item.category}-a`,
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
      className="mx-auto w-full max-w-6xl overflow-x-clip px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Categorias" />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <BorderGlow
            key={category.name}
            className="rounded-md"
            borderRadius={8}
            edgeSensitivity={36}
            glowRadius={56}
            glowIntensity={1.3}
            glowColor="44 100% 45%"
            backgroundColor="#1A1A1A"
            colors={["#e5a800", "#f5a500", "#e5a800"]}
          >
            <article
              className={`p-4 sm:p-5 ${
                category.featured ? "border-primary" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-3xl uppercase leading-none sm:text-4xl">
                  {category.name}
                </h3>
                {category.featured ? (
                  <Badge className="rounded-sm text-[10px] tracking-[0.12em]">
                    EM ALTA
                  </Badge>
                ) : null}
              </div>
              <ul className="space-y-2 text-sm uppercase text-zinc-200 sm:text-base">
                {category.divisions.map((division) => (
                  <li key={`${category.name}-${division}`}>{division}</li>
                ))}
              </ul>
            </article>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}

export function WhoWeAreSection() {
  return (
    <section
      id="quem-somos"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <article className="rounded-md border border-theme-border bg-[#141414] p-5 sm:p-7">
          <SectionTitle title={WHO_WE_ARE.title} subtitle="Nossa história" />
          <p className="mb-4 text-sm leading-relaxed text-zinc-100 sm:text-base">
            {WHO_WE_ARE.intro}
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {WHO_WE_ARE.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="h-fit rounded-md border border-theme-primary/50 bg-black p-5 sm:p-7">
          <span className="inline-flex rounded-sm border border-theme-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-theme-primary">
            Idealizadoras
          </span>
          <div className="mt-4 space-y-3">
            {WHO_WE_ARE.founders.map((founder) => (
              <div
                key={founder}
                className="rounded-sm border border-theme-border bg-[#121212] px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-100"
              >
                {founder}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-zinc-300">
            Mais do que uma competição, o Pardus Games é uma experiência feita
            por atletas, para atletas.
          </p>
        </aside>
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
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href={EVENT.regulationLink}>
            Baixar regulamento completo (PDF)
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function WorkoutsSection() {
  return (
    <section
      id="provas"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
    >
      <SectionTitle title="Provas" subtitle="WODs do campeonato" />

      <div className="grid gap-3 md:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.slug} workout={workout} />
        ))}
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
                <Avatar>
                  {person.image && (
                    <AvatarImage src={person.image} alt={person.name} />
                  )}
                  <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold leading-4 uppercase">
                    {person.name}
                  </h3>
                  <p className="text-xs break-all uppercase tracking-[0.12em] text-[#9e7700]">
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
      <Masonry
        items={GALLERY_MASONRY_ITEMS}
        animateFrom="bottom"
        duration={0.6}
        stagger={0.06}
        scaleOnHover
        hoverScale={1.05}
        blurToFocus
        colorShiftOnHover={false}
      />
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
      <SectionTitle title="Últimas no Instagram" subtitle="@pardusgames" />

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
                <Avatar className="mb-1">
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
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
              key={sponsor.name}
              className={cn(
                "flex h-24 relative items-center justify-center rounded-md border uppercase tracking-widest",
                {
                  "border-theme-primary bg-black text-theme-primary":
                    sponsor.variant === "default",
                  "border-theme-primary bg-white text-zinc-300":
                    sponsor.variant === "secondary",
                },
              )}
            >
              {index === 0 ? <Trophy className="mr-2 size-4" /> : null}
              {!sponsor.logo && (
                <span className="text-xs sm:text-sm">{sponsor.name}</span>
              )}
              {sponsor.logo && (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-12 w-auto object-contain top-1/2 translate-y-1/2"
                  fill
                />
              )}
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
            Dica para atletas de fora: reserve hospedagem com antecedência em
            áreas centrais para facilitar o deslocamento.
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
