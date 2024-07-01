'use client'

import { Countdown } from "@/components/countdown"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSubscriptionDate } from "../_hooks/useSubscriptionDate"

export const SubscriptionButton = () => {
  const { isAfterDate } = useSubscriptionDate()

  return (
    <Link href={isAfterDate ? '#cronograma' : ''}>
      <Button
        pill
        disabled={!isAfterDate}
        variant={isAfterDate ? 'default' : 'outline'}
        className='uppercase font-title font-normal tracking-wide'
      >
        {isAfterDate
          ? <>Acesse o cronograma</>
          : <span>
            Inscreva-se em {' '}
            <Countdown />
          </span>}
      </Button>
    </Link>
  )
}