import Image from "next/image";
import Banner from '@/public/assets/images/site-bg-min-2.jpg';
import Claws from '@/public/assets/claws.svg';
import { Button } from "@/components/ui/button";
import { LinkItem } from "@/components/link-item";
import Link from "next/link";
import { SubscriptionButton } from "./_components/button-countdown";
import { LinkItemCountdown } from "./_components/link-item-countdown";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="min-h-full w-full flex flex-col bg-slate-50">
      <header className="w-full bg-black flex items-center justify-center border-b-[1px] border-theme-border">
        <span className="py-4 px-4 h-full flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={48}
          />
        </span>
      </header>
      <main className="flex-1 bg-black">
        <div className="w-full min-h-96 relative flex flex-col justify-center">
          <div className="inset-0 absolute overflow-hidden after:bg-gradient-to-r after:absolute after:inset-0 after:from-black/70 after:to-transparent after:from-20% after:to-100%">
            <Image
              src={Banner}
              alt="banner"
              className="w-full h-full object-cover absolute scale-1 object-top"
            />
          </div>
          <div className="relative z-10 px-4 uppercase">
            <p className="font-title text-base">DIAS 6 e 7 de Julho</p>
            <div className="flex items-center gap-2">
              <h1 className="font-title text-4xl">PARDUS GAMES</h1>
              <Image
                src={Claws}
                alt="claws"
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="relative z-10 px-4 mt-4 flex flex-col gap-2">
            <p className="font-sans">Venha viver uma experiência Pardus!</p>

            <div className="flex gap-2 mt-2">
              <SubscriptionButton />
              <Link href='#materiais'>
                <Button pill variant='outline' className='font-title uppercase'>Saiba mais</Button>
              </Link>
            </div>
          </div>
        </div>

        <section id='materiais' className="p-4 my-12">
          <h2 className="text-4xl mb-8 font-title">MATERIAIS</h2>
          <div>
            <LinkItemCountdown />
            <LinkItem
              title='Termos, Regulamentos e Autorizações'
              description='Confira as principais informações, instruções, termos, autorizações e arquivos importantes da competição'
              link='https://drive.google.com/drive/folders/1SQh8JUpDT3pAxQkJu5UdWwq1aDJI5m7r'
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
