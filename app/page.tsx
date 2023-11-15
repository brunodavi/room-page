"use client";

import { useState } from "react";
import Image from "next/image";

import Product from "./components/Product";

const productList = [
  {
    title: "Discover innovative ways to decorate",
    description: `
      We provide unmatched quality, comfort, and style for property
      owners across the country. Our experts combine form and function
      in bringing your vision to life. Create a room in your own style
      with our collection and make your property a reflection of you and
      what you love.
    `,
  },
  {
    title: "We are available all across the globe",
    description: `
      With stores all over the world, it's easy for you to find
      furniture for your home or place of business. Locally, we're in
      most major cities throughout the country. Find the branch nearest
      you using our store locator. Any questions? Don't hesitate to
      contact us today.
    `,
  },
  {
    title: "Manufactured with the best materials",
    description: `
      Our modern furniture store provide a high level of quality. Our
      company has invested in advanced technology to ensure that every
      product is made as perfect and as consistent as possible. With
      three decades of experience in this industry, we understand what
      customers want for their home and office.
    `,
  },
];

function getHero(device: string, index: number) {
  const imageNumber = index + 1;
  return `url(/images/${device}-image-hero-${imageNumber}.jpg)`;
}

function getMobileHero(index: number) {
  return getHero("mobile", index);
}

function getDesktopHero(index: number) {
  return getHero("desktop", index);
}

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const product = productList[productIndex];
  const indexLimit = productList.length - 1;

  const mobileHero = getMobileHero(productIndex);
  const desktopHero = getDesktopHero(productIndex);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNext = () => {
    if (productIndex >= indexLimit) {
      return setProductIndex(0);
    }

    setProductIndex(productIndex + 1);
  };

  const handlePrevious = () => {
    if (productIndex <= 0) {
      return setProductIndex(indexLimit);
    }

    return setProductIndex(productIndex - 1);
  };

  return (
    <>
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
            >
            </label>
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
          <button
            onClick={handlePrevious}
            className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2"
          >
            <Image
              src="/images/icon-angle-left.svg"
              width={10}
              height={10}
              alt="icon-angle-left"
            />
          </button>

          <button
            onClick={handleNext}
            className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2"
          >
            <Image
              src="/images/icon-angle-right.svg"
              width={10}
              height={10}
              alt="icon-angle-right"
            />
          </button>
        </div>
      </header>

      <main className="lg:h-screen">
        <div
          className="flex h-2/3"
        >
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

          <div className="lg:relative lg:h-full lg:flex lg:justify-center lg:items-center lg:w-2/5">
            <Product
              title={product.title}
              description={product.description}

              className="lg:px-20"
            />
            <div className="absolute bottom-0 left-0 w-32 h-[4rem] sm:hidden">
              <button onClick={handlePrevious} className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2">
                <Image
                  src="/images/icon-angle-left.svg"
                  width={12}
                  height={12}
                  alt="icon-angle-left"
                />
              </button>

              <button onClick={handleNext} className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2">
                <Image
                  src="/images/icon-angle-right.svg"
                  width={12}
                  height={12}
                  alt="icon-angle-right"
                />
              </button>
            </div>
          </div>
        </div>

        <section id="about" className="p-0 lg:flex lg:h-1/3 sm:w-full">
          <div className="lg:w-1/3">
            <Image
              className="object-cover w-full lg:h-full"
              src="/images/image-about-dark.jpg"
              width={420}
              height={266}
              alt="image-about-dark"
            />
          </div>

          <div className="sm:px-10 sm:py-14 lg:w-[42%] lg:h-full lg:pt-10 lg:px-8">
            <h3>About our furniture</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>

          <div className="lg:w-1/3 lg:h-full w-full">
            <Image
              className="object-cover w-full lg:h-full"
              src="/images/image-about-light.jpg"
              width={420}
              height={266}
              alt="image-about-light"
            />
          </div>
        </section>
      </main>
      <footer id="contact" className=".attribution">
        <p>
          <span>Challenge by</span>
          <a
            className="link"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </p>

        <p>
          <span>Coded by</span>
          <a className="link" href="#">Bruno Davi</a>
        </p>
      </footer>
    </>
  );
}
