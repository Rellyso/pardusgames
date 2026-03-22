import Banner from "@/public/assets/images/banner-2026.png";
import { SubscriptionButton } from "./button-countdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Claws from "@/public/assets/claws.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function MainBanner() {
  return (
    <div className="w-full relative flex flex-col justify-center">
      <Image
        src={Banner}
        alt="banner"
        priority
        placeholder="blur"
        className="w-full h-full object-contain object-top"
      />
      <div className="relative mt-4 z-10 px-4 uppercase w-full max-w-5xl self-center">
        <p className="font-sans text-sm sm:text-md">23 E 24 DE MAIO DE 2026</p>
        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-start self-start gap-2">
            <h2
              className="font-heading text-base sm:text-4xl [box-decoration-break:clone]
            [-webkit-box-decoration-break:clone] bg-white text-primary px-1"
            >
              Venha viver Uma experiência
            </h2>
            <h2
              className="font-heading text-base sm:text-4xl [box-decoration-break:clone]
            [-webkit-box-decoration-break:clone] bg-theme-primary text-black px-1"
            >
              {" "}
              PARDUS GAMES
            </h2>
          </div>
          {/* <Image src={Claws} priority alt="claws" className="h-10 w-auto" /> */}
        </div>
      </div>

      {/* <div className="relative z-10 px-4 mt-4 flex flex-col gap-4 w-full max-w-5xl self-center">
        <div className="flex gap-2 items-center">
          <h3 className="font-sans text-3xl uppercase">
            Inscreva-se no lote promocional
          </h3>
          <Badge variant="default" className="uppercase">
            Vagas limitadas
          </Badge>
        </div>
        <div className="flex gap-2">
          <SubscriptionButton />
          <Link href="#provas">
            <Button variant="outline" className="font-heading uppercase">
            Provas
            </Button>
            </Link>
        </div>
      </div> */}
    </div>
  );
}
