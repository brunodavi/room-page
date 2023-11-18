"use client";

import { useState } from "react";

import Product from "./components/shared/Product";
import HeaderMobile from "./components/mobile/HeaderMobile";
import HeaderDesktop from "./components/desktop/HeaderDesktop";
import Pagination from "./components/shared/Pagination";
import About from "./components/shared/About";
import useIndexNavigation from "./utils/useIndexNavigation";

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

export default function Home() {
  const [productIndex, setProductIndex] = useState(0);
  const product = productList[productIndex];

  const [handlePrevious, handleNext] = useIndexNavigation(setProductIndex, 2)

  function handleKeyDown({ key }: { key: string }) {
    const handleKeys: Record<string, () => void> = {
      ArrowLeft: handlePrevious,
      ArrowRight: handleNext,
    }

    if (handleKeys[key]) {
      handleKeys[key]()
    }
  }

  return (
    <>
      <HeaderMobile index={productIndex} setIndex={setProductIndex} />
      <main className="lg:h-screen" onKeyDown={handleKeyDown}>
        <div className="flex h-2/3">
          <HeaderDesktop index={productIndex} />

          <div className="lg:relative lg:h-full lg:flex lg:justify-center lg:items-center lg:w-2/5">
            <Product
              title={product.title}
              description={product.description}

              className="lg:px-20"
            />
            <div className="absolute bottom-0 left-0 w-32 h-[4rem] sm:hidden">
              <Pagination iconSize={12} limit={2} setIndex={setProductIndex} />
            </div>
          </div>
        </div>
        <About />
      </main>
    </>
  );
}
