'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { WhatsappLogo } from '@phosphor-icons/react'
import Link from "next/link"

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

        <Button asChild variant='link' className="text-white text-2xl h-12 w-12 p-0 hover:bg-zinc-700 rounded-full">
          <Link href="https://wa.me/+558488995994" target="_blank" rel="noopener">
            <WhatsappLogo />
          </Link>
        </Button>
      </header>
    </div>
  )
}