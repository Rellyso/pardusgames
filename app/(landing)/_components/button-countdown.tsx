'use client'

import { Countdown } from "@/components/countdown"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate"

export const SubscriptionButton = () => {
  const { isAfterDate } = useSubscriptionDate()

  return (
    <Link href={isAfterDate ? 'https://inscricoes.wodengage.games/eventos/pardus-games' : ''}>
      <Button
        pill
        disabled={!isAfterDate}
        variant='outline'
        className='uppercase font-title text-white tracking-wide'
      >
        {isAfterDate
          ? <>Inscreva-se</>
          : <span>
            Inscreva-se em {' '}
            <Countdown />
          </span>}
      </Button>
    </Link>
  )
}