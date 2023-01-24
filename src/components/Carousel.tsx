import { Component, JSX } from 'solid-js'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Carousel: Component<Props> = (props: Props) => {
  const children = props.children
  let carouselRef: any

  function handlePrev() {
    if (carouselRef) {
      carouselRef.scrollLeft -= 100
    }
  }

  function handleNext() {
    if (carouselRef) {
      carouselRef.scrollLeft += 100
    }
  }

  return (
    <>
      <div class='flex items-center my-16 justify-center'>
        <button onClick={handlePrev}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-8 h-8'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <div class='overflow-hidden w-[1000px] h-[300px] border border-sky-800 mx-8'>
          <div
            class={`flex w-full h-full overflow-x-scroll transition`}
            ref={carouselRef}>
            {children}
          </div>
        </div>
        <button onClick={handleNext}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-8 h-8'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Carousel
