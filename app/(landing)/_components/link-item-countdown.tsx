'use client'


import { LinkItem } from "@/components/link-item"
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate"
import { Countdown } from "@/components/countdown"

export const LinkItemCountdown = () => {
  const { isAfterDate } = useSubscriptionDate()

  const description = isAfterDate
    ? '2° lote disponível até 15 de junho'
    : <>Inscreva-se em <Countdown className="inline" /></>

  return (
    <LinkItem
      title='Inscrições'
      disabled={!isAfterDate}
      description={description}
      link='https://inscricoes.wodengage.games/eventos/pardus-games'
    />
  )
}