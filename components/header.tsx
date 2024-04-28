import Image from "next/image"

export const Header = () => {
  return (
    <header className="w-full bg-black flex items-center justify-center border-b-[1px] border-theme-border">
      <span className="py-4 px-4 h-full flex items-center">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={75}
          height={36}
        />
      </span>
    </header>
  )
}