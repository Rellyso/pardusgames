"use client";

import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { Button } from "@/components/ui/button";
import { SUBSCRIPTION } from "@/constants/subscription";
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate";

export const SubscriptionButton = () => {
  const { isAfterDate } = useSubscriptionDate();

  if (isAfterDate) {
    return (
      <Link href={SUBSCRIPTION.link}>
        <Button variant="default" className="uppercase font-semibold">
          Inscreva-se agora
        </Button>
      </Link>
    );
  }

  return (
    <Button
      disabled
      size="lg"
      variant={isAfterDate ? "default" : "default"}
      className="uppercase w-50 font-semibold"
    >
      <span>
        Inscreva-se em <Countdown />
      </span>
    </Button>
  );
};
