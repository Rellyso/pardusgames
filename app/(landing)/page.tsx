import Image from "next/image";
import Banner from '@/public/assets/images/site-bg-min-2.jpg';
import Claws from '@/public/assets/claws.svg';
import { Button } from "@/components/ui/button";
import { LinkItem } from "@/components/link-item";
import Link from "next/link";
import { SubscriptionButton } from "./_components/button-countdown";
import { LinkItemCountdown } from "./_components/link-item-countdown";
export default function Home() {
  return (
    <>
      <div className="w-full min-h-96 relative flex flex-col justify-center">
        <div className="inset-0 absolute overflow-hidden after:bg-gradient-to-r after:absolute after:inset-0 after:from-black/70 after:to-transparent after:from-20% after:to-100%">
          <Image
            src={Banner}
            alt="banner"
            priority
            placeholder="blur"
            className="w-full h-full object-cover absolute scale-1 object-top"
          />
        </div>
        <div className="relative z-10 px-4 uppercase w-full max-w-screen-lg self-center">
          <p className="font-title text-base">DIAS 6 e 7 de Julho</p>
          <div className="flex items-center gap-2">
            <h1 className="font-title text-4xl">PARDUS GAMES</h1>
            <Image
              src={Claws}
              priority
              alt="claws"
              className="h-10 w-auto"
            />
          </div>
        </div>

        <div className="relative z-10 px-4 mt-4 flex flex-col gap-2 w-full max-w-screen-lg self-center">
          <p className="font-sans">Venha viver uma experiência Pardus!</p>

          <div className="flex gap-2 mt-2">
            <SubscriptionButton />
            <Link href='#provas'>
              <Button pill variant='outline' className='font-title uppercase'>Provas</Button>
            </Link>
          </div>
        </div>
      </div>

      <section id='provas' className="p-4 my-12 max-w-screen-lg w-full self-center">
        <h2 className="text-4xl mb-8 font-title">WORKOUTS 🔥</h2>
        <div>
          <LinkItem
            title='PROVA 1 - JUST GO'
            description='Confira as instruções e detalhes da primeira prova'
            link='https://drive.google.com/file/d/1hX2XyWscUxp0r0v-gB3UulWg3sMoRMyd/view'
          />
          <LinkItem
            title='PROVA 2 - BALLS AND SHOTS'
            description='Confira as instruções e detalhes da prova 2'
            link='https://drive.google.com/file/d/1i4vsG0ZpLEmYvMQZMUt_AAAmYoL-zpeh/view'
          />
          <LinkItem
            title='PROVA 3 - GRIP BURNING'
            description='Confira as instruções e detalhes da prova 3'
            link='https://drive.google.com/file/d/1gQwDp_yA4cocCmF5YWZ-y1ywKccLPLnf/view'
          />
          <LinkItem
            title='PROVA 4 - LAST GAS'
            description='Confira as instruções e detalhes da prova 4'
            link='https://drive.google.com/file/d/1QMugAn-4mV8wXwp4FwhhPzAJXGXmUbjD/view'
          />
        </div>
      </section>

      <section id='floor-plans' className="p-4 my-12 max-w-screen-lg w-full self-center">
        <h2 className="text-4xl mb-8 font-title">FLOOR PLANS 🌱</h2>
        <div>
          <LinkItem
            title='FLOOR PLAN PROVA 1'
            description='Confira a planta da prova 1'
            link='https://drive.google.com/file/d/1lAgb8EuC0YN6yM6h8vBFF1kV-Otzvyhc/view'
          />
          <LinkItem
            title='FLOOR PLAN PROVA 2'
            description='Confira a planta da prova 2'
            link='https://drive.google.com/file/d/1ETwKza2n5WlKtttYklf7AHpTmIvuCXUI/view'
          />
          <LinkItem
            title='FLOOR PLAN PROVA 3'
            description='Confira a planta da prova 3'
            link='https://drive.google.com/file/d/12vbS5ubfLfdQrK3w2clz5WbcbKGZvnpV/view'
          />
          <LinkItem
            title='FLOOR PLAN PROVA 4'
            description='Confira a planta da prova 4'
            link='https://drive.google.com/file/d/1yJeDXsSPYqKeBxFcduKX0FEoMU2zPrpi/view'
          />
        </div>
      </section>

      <section id='cronograma' className="p-4 my-12  w-full max-w-screen-lg self-center">
        <h2 className="text-4xl mb-8 font-title">CRONOGRAMA</h2>
        <div>
          <LinkItem
            title='Cronograma dia 01'
            description='Confira horários, baterias e raias da sua equipe'
            link='https://drive.google.com/file/d/1B3R5oCPX1U6SdDA3op7fpqUz2v6tOhrl/view'
          />
        </div>
      </section>

      <section id='materiais' className="p-4 my-12  w-full max-w-screen-lg self-center">
        <h2 className="text-4xl mb-8 font-title">MATERIAIS</h2>
        <div>
          <LinkItemCountdown />
          <LinkItem
            title='Termos, Regulamentos e Autorizações'
            description='Confira as principais informações, instruções, termos, autorizações e arquivos importantes da competição'
            link='https://drive.google.com/drive/folders/1SQh8JUpDT3pAxQkJu5UdWwq1aDJI5m7r'
          />
          <LinkItem
            title='Seleção de Judges e Staffs'
            description='Inscreva-se na seleção de Judges e Staffs'
            link='https://docs.google.com/forms/d/e/1FAIpQLSdJwDRmzzEfQaCmGdBe0ZSwrmLB-QjHa4nLwUWWFp8v8YZbTg/viewform'
          />
        </div>
      </section>
    </>
  );
}
