import Image from "next/image";
import { SetStateAction, useState } from "react";

import { getMobileHero } from "@/app/utils/getHero";
import Pagination from "../shared/Pagination";

type HeaderMobileType = {
  index: number;
  setIndex: (value: SetStateAction<number>) => void;
};

export default function HeaderMobile(props: HeaderMobileType) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mobileHero = getMobileHero(props.index);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header
      className="hero h-[360px] relative flex flex-col pt-8 lg:hidden"
      style={{ backgroundImage: mobileHero }}
    >
      <div className="drawer">
        <input
          checked={drawerOpen}
          onClick={handleDrawerToggle}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex items-center justify-between">
          <label
            htmlFor="my-drawer"
            className="drawer-button btn swap shadow-none bg-transparent border-none p-6 ml-0 -mr-12"
          >
            <input id="my-drawer" type="checkbox" />
            <Image
              src="/images/icon-hamburger.svg"
              width={16}
              height={16}
              alt="icon-hamburger"
            />
          </label>

          <Image
            className="mx-auto"
            src="/images/logo.svg"
            width={64}
            height={64}
            alt="logo"
          />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-100 text-base-content w-full flex flex-row place-content-between content-center h-28">
            <div className="flex items-center px-4">
              <label htmlFor="my-drawer" aria-label="close sidebar w-16 h-16">
                <Image
                  src="/images/icon-close.svg"
                  width={16}
                  height={16}
                  alt="icon-close"
                />
              </label>
            </div>

            <nav>
              <ul className="flex font-semibold justify-center lowercase">
                <li onClick={handleDrawerToggle}>
                  <a href="#">Home</a>
                </li>
                <li onClick={handleDrawerToggle}>
                  <a href="#shop">Shop</a>
                </li>
                <li onClick={handleDrawerToggle}>
                  <a href="#about">About</a>
                </li>
                <li onClick={handleDrawerToggle}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-28 h-[3.55rem]">
        <Pagination iconSize={10} limit={2} setIndex={props.setIndex} />
      </div>
    </header>
  );
}
