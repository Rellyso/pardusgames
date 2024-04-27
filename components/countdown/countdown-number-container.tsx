import { ReactNode } from 'react'

interface CountdownNumberContainerProps {
  children: ReactNode
}

export function CountdownNumberContainer({ children }: CountdownNumberContainerProps) {
  return <span className="rounded-md bg-zinc-900 px-2 py-1">{children}</span>
}
