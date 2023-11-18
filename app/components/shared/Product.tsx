import IconArrow from "../icons/IconArrow"

type ProductType = {
  title: string,
  description: string,

  className?: string,
}

export default function Product(props: ProductType) {
  return (
    <section id="shop" className={props.className}>
      <h1>{props.title}</h1>

      <div>
        <p>
          {props.description}
        </p>

        <button className='shop btn btn-link no-underline hover:no-underline hover:text-secondary group flex items-center mt-10 lg:mt-2 lg:-mx-4'>
          Shop now <IconArrow className="-mt-[0.12rem] stroke-black group-hover:stroke-secondary" />
        </button>
      </div>
    </section>
  )
}
