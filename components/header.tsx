'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { WhatsappLogo } from '@phosphor-icons/react'
import Link from "next/link"
import { sendGAEvent } from '@next/third-parties/google'

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black border-theme-border border-b-[1px]">
      <header className="w-full max-w-screen-lg flex items-center justify-between mx-4">

        <span className="py-4 px-4 h-full flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={75}
            height={36}
          />
        </span>

        <Button
          asChild
          onClick={() => sendGAEvent({ event: 'contato', value: 'whatsapp' })}
          variant='link'
          className="text-white text-sm p-2 hover:bg-zinc-700 rounded-full"
        >
          <Link
            href="https://wa.me/+558488995994"
            target="_blank"
            rel="noopener"
            className='decoration-transparent space-x-2'
          >
            <span>Entre em contato</span> <WhatsappLogo className="text-2xl" />
          </Link>
        </Button>
      </header>
    </div>
  )
}