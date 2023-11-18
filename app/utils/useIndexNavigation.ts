import { SetStateAction } from "react"

export default function useIndexNavigation(setIndex: (value: SetStateAction<number>) => void, limit: number) {
  function previousIndex(prevIndex: number) {
    if (prevIndex <= 0) {
      return limit
    }

    return prevIndex - 1
  }
  
  function nextIndex(prevIndex: number) {
    if (prevIndex >= limit){
      return 0
    }
  
    return prevIndex + 1
  }

  const handlePrevious = () => setIndex(previousIndex)
  const handleNext = () => setIndex(nextIndex)

  return [handlePrevious, handleNext]
}
