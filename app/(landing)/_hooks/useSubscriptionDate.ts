import { differenceInSeconds, isAfter } from "date-fns"
import { useEffect, useState } from "react"

const TIME_COUNT = {
  days: 60 * 60 * 24,
  hours: 60 * 60,
  minutes: 60,
  seconds: 60,
}


const SUBSCRIPTION_DATE = new Date('2024-04-28T15:00:00.000Z')

export const useSubscriptionDate = () => {
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const isAfterDate = isAfter(new Date(), SUBSCRIPTION_DATE) || false

  useEffect(() => {
    if (differenceInSeconds(SUBSCRIPTION_DATE, new Date()) < 0) {
      setCurrentSeconds(-1)
    }

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(SUBSCRIPTION_DATE, new Date())

      setCurrentSeconds(secondsDifference)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const daysAmount = Math.floor(currentSeconds / TIME_COUNT.days)
  const restSecondsOfDaysAmount = currentSeconds % TIME_COUNT.days
  const hoursAmount = Math.floor(restSecondsOfDaysAmount / TIME_COUNT.hours)
  const restOfHoursAmount = currentSeconds % TIME_COUNT.hours
  const minutesAmount = Math.floor(restOfHoursAmount / TIME_COUNT.minutes)
  const secondsAmount = Math.floor(currentSeconds % 60)

  return {
    currentSeconds,
    isAfterDate,
    daysAmount,
    hoursAmount,
    minutesAmount,
    secondsAmount
  }
}