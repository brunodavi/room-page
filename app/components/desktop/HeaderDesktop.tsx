import Image from "next/image";

import { getDesktopHero } from "@/app/utils/getHero";

type HeaderDesktopType = {
  index: number,
}

export default function HeaderDesktop({ index }: HeaderDesktopType) {
  const desktopHero = getDesktopHero(index)

  return (
    <header
    className="hero w-3/5 text-white font-semibold flex flex-col sm:hidden"
    style={{ backgroundImage: desktopHero }}
  >
    <div className="flex w-full h-32 items-center">
      <Image
        className="mx-10 w-16"
        src="/images/logo.svg"
        width={64}
        height={64}
        alt="logo"
      />
      <nav className="w-56">
        <ul className="flex justify-between">
          <li className="flex flex-col items-center group">
            <a href="#">home</a>
            <div className="bg-white w-4 h-px invisible group-hover:visible" />
          </li>
          <li className="flex flex-col items-center group">
            <a href="#shop">shop</a>
            <div className="bg-white w-4 h-px invisible group-hover:visible" />
          </li>
          <li className="flex flex-col items-center group">
            <a href="#about">about</a>
            <div className="bg-white w-4 h-px invisible group-hover:visible" />
          </li>
          <li className="flex flex-col items-center group">
            <a href="#contact">contact</a>
            <div className="bg-white w-4 h-px invisible group-hover:visible" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}