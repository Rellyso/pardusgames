"use client";

import { Countdown } from "@/components/countdown";
import { LinkItem } from "@/components/link-item";
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate";
import { SUBSCRIPTION } from "@/constants/subscription";

export const LinkItemCountdown = () => {
  const { isAfterDate } = useSubscriptionDate();

  const description = isAfterDate ? (
    "Inscrições abertas! Clique para se inscrever e garantir sua vaga no evento."
  ) : (
    <>
      Inscreva-se em <Countdown className="inline" />
    </>
  );

  return (
    <LinkItem
      title="Lote promocional"
      disabled={!isAfterDate}
      description={description}
      link={SUBSCRIPTION.link}
    />
  );
};
