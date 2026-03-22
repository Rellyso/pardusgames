import { LinkItemCountdown } from "./_components/link-item-countdown";
import { MainBanner } from "./_components/main-banner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <MainBanner />

      <section
        id="inscricoes"
        className="p-4 my-6 sm:my-12 w-full max-w-5xl self-center"
      >
        <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-8 font-heading">
          Inscrições
        </h2>
        <div>
          <LinkItemCountdown />
          {/* <LinkItem
            title="Termos, Regulamentos e Autorizações"
            description="Confira as principais informações, instruções, termos, autorizações e arquivos importantes da competição"
            link="https://drive.google.com/drive/folders/1SQh8JUpDT3pAxQkJu5UdWwq1aDJI5m7r"
          />
          <LinkItem
            title="Seleção de Judges e Staffs"
            description="Inscreva-se na seleção de Judges e Staffs"
            link="https://docs.google.com/forms/d/e/1FAIpQLSdJwDRmzzEfQaCmGdBe0ZSwrmLB-QjHa4nLwUWWFp8v8YZbTg/viewform"
          /> */}
        </div>
      </section>
    </main>
  );
}
