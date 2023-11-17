import Image from "next/image";

export default function About() {
  return (
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
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
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
  );
}
