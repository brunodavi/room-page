import Image from "next/image";

import { SetStateAction } from "react";

import useIndexNavigation from "@/app/utils/useIndexNavigation";

type PaginationType = {
  iconSize: number,
  limit: number,

  setIndex: (value: SetStateAction<number>) => void,
}

export default function Pagination({ iconSize, limit, setIndex }: PaginationType) {
  const [handlePrevious, handleNext] = useIndexNavigation(setIndex, limit)

  return (
    <>
      <button onClick={handlePrevious} className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2">
        <Image
          src="/images/icon-angle-left.svg"
          width={iconSize}
          height={iconSize}
          alt="icon-angle-left"
        />
      </button>

      <button onClick={handleNext} className="join-item btn btn-accent bg-black border-none rounded-none h-full w-1/2">
        <Image
          src="/images/icon-angle-right.svg"
          width={iconSize}
          height={iconSize}
          alt="icon-angle-right"
        />
      </button>
    </>
  )
}