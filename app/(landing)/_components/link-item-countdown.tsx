"use client";

import { Countdown } from "@/components/countdown";
import { LinkItem } from "@/components/link-item";
import { SUBSCRIPTION } from "@/constants/subscription";
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate";

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
