'use client'
import { Fragment } from 'react'
import clsx from 'clsx'
import { useSubscriptionDate } from '@/app/(landing)/_hooks/useSubscriptionDate'

interface ICountdownProps {
  className?: string
}


export function Countdown({ className }: ICountdownProps) {
  const {
    hoursAmount,
    minutesAmount,
    secondsAmount
  } = useSubscriptionDate()

  const counterIterator = [
    {
      key: 'Horas',
      value: hoursAmount || 0,
    },
    {
      key: 'Minutos',
      value: minutesAmount || 0,
    },
    {
      key: 'Segundos',
      value: secondsAmount || 0,
    },
  ].filter(({ key, value }) => !(key === 'Dias' && value === 0))

  return (
    <div
      className={clsx(
        'inline',
        className,
      )}
    >
      {counterIterator.map(({ key, value }, i) => {
        const counterValue = String(value).padStart(2, '0')

        return (
          <Fragment key={key}>
            {i !== 0 && <span className="text-theme-primary px-[1px]">:</span>}
            <span>{counterValue[0]}</span>
            <span>{counterValue[1]}</span>
          </Fragment>
        )
      })}
    </div>
  )
}
