import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="hero h-[360px] relative flex flex-col pt-8" style={{backgroundImage: 'url(/images/mobile-image-hero-1.jpg)'}}>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-between">
            <label htmlFor="my-drawer" className="drawer-button btn swap shadow-none bg-transparent border-none p-6 ml-0 -mr-12">
              <input id="my-drawer" type="checkbox" />
              <Image src="/images/icon-hamburger.svg" width={16} height={16} alt="icon-hamburger" />
            </label>

            <Image className="mx-auto" src="/images/logo.svg" width={64} height={64} alt="logo" />
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="menu bg-base-100 text-base-content w-full flex flex-row place-content-between content-center h-28">
 
              <label htmlFor="my-drawer" aria-label="close sidebar" className="flex items-center px-4">
                <Image src="/images/icon-close.svg" width={16} height={16} alt="icon-close" />
              </label>

              <nav>
                <ul className="flex font-semibold justify-center lowercase">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#shop">Shop</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
  
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-28 h-[3.55rem]">
          <button className="join-item btn bg-black border-none rounded-none h-full w-1/2">
            <Image src="/images/icon-angle-left.svg" width={10} height={10} alt="icon-angle-left" />
          </button>

          <button className="join-item btn bg-black border-none rounded-none h-full w-1/2">
            <Image src="/images/icon-angle-right.svg" width={10} height={10} alt="icon-angle-right" />
          </button>
        </div>
      </header>

      <main>
        <section>
          <h1>Discover innovative ways to decorate</h1>

          <div>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <button>Shop now</button>
          </div>
        </section>

        <section>
          <h1>We are available all across the globe</h1>
          <div>
            <p>
              With stores all over the world, it&aposs easy for you to find
              furniture for your home or place of business. Locally, we&aposre in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don&apost hesitate to
              contact us today.
            </p>
            <button>Shop now</button>
          </div>
        </section>

        <section>
          <h1>Manufactured with the best materials</h1>
          <div>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <button>Shop now</button>
          </div>
        </section>

        <section>
          <h1>About our furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
      </main>
      <footer className=".attribution">
        <span>Challenge by</span>
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>

        <span>. Coded by</span>
        <a href="#">Bruno Davi</a>.
      </footer>
    </>
  );
}
