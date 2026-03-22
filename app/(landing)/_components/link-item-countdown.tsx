"use client";

import { Countdown } from "@/components/countdown";
import { LinkItem } from "@/components/link-item";
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate";

export const LinkItemCountdown = () => {
  const { isAfterDate } = useSubscriptionDate();

  const description = isAfterDate ? (
    "Inscrições encerradas"
  ) : (
    <>
      Inscreva-se em <Countdown className="inline" />
    </>
  );

  return (
    <LinkItem
      title="Lote promocional"
      disabled
      description={description}
      link="https://inscricoes.wodengage.games/eventos/pardus-games"
    />
  );
};
