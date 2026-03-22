import Image from "next/image";
import Claws from "@/public/assets/claws.svg";
import Pardus2024 from "@/public/assets/images/pardus-2024.png";

export function SeeYouBanner() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] relative flex flex-1 flex-col justify-center">
      <div className="inset-0 absolute overflow-hidden after:bg-linear-to-r after:absolute after:inset-0 after:from-black/70 after:to-transparent after:from-20% after:to-100%">
        <Image
          src={Pardus2024}
          alt="banner"
          priority
          placeholder="blur"
          className="w-full h-full object-cover absolute scale-1 object-top"
        />
      </div>
      <div className="relative z-10 px-4 uppercase w-full max-w-5xl self-center flex items-center flex-col">
        <div className="flex items-center gap-2">
          <h1 className="font-heading text-6xl text-center text-theme-primary">
            OBRIGADO, ATLETAS!
          </h1>
        </div>
      </div>

      <div className="flex items-center flex-col relative z-10 px-4 mt-2 gap-2 w-full max-w-5xl self-center">
        <div className="max-w-md text-center">
          <mark className="font-sans text-xl font-bold bg-theme-primary text-zinc-950">
            A arena{" "}
            <a
              className="font-black"
              href="http://www.instagram.com/pardusgames"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pardusgames
            </a>{" "}
            te espera novamente em <span>abril/2025</span>
          </mark>
        </div>

        <div className="flex gap-2">
          <Image src="/assets/logo.svg" alt="logo" width={75} height={36} />

          <Image src={Claws} priority alt="claws" className="h-10 w-auto" />
        </div>
      </div>
    </div>
  );
}
