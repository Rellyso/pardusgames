'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactLenis } from 'lenis/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </ReactLenis>
  )
}