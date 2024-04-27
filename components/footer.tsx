import Logo from '@/public/assets/logo.svg'
import clsx from 'clsx'
import Image from 'next/image'

export function Footer() {
  return (
    <footer
      className={clsx(
        'relative w-full overflow-hidden min-h-96 flex items-center',
        'border-t border-theme-border bg-black',
      )}
    >
      <div className="-translate-1/2 absolute left-1/2 top-full z-0 flex h-24 w-64 items-center justify-center bg-primary blur-full" />

      <div
        className={clsx(
          'relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-8 md:px-16',
          'flex flex-col items-center justify-between text-zinc-300 md:flex-row md:items-center',
        )}
      >
        <div className="flex flex-col gap-1 my-4 md:my-0">
          <Image
            className="w-32 self-center"
            src={Logo}
            alt="Pardus Games Logo"
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="">
            Página criada com {'<3'} por{' '}
            <a
              target="_blank"
              className="underline underline-offset-2 transition-all hover:text-theme-primary"
              href="https://instagram.com/rellysondouglaas"
              rel="noreferrer"
            >
              rellyson
            </a>
          </p>

          <p className="font-sans">
            Crie a sua também{' '}
            <a
              target="_blank"
              className="underline underline-offset-2 transition-all hover:text-theme-primary"
              href="https://wa.me/5584981353024?text=Oi,+Vim+pelo+Pardus+Games"
              rel="noreferrer"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
