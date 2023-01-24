import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Carousel from './components/Carousel'

const App: Component = () => {
  return (
    <>
      <h1 class='text-3xl font-bold underline'>Hello world!</h1>
      <Carousel>
        <For each={[1, 2, 3, 4, 5]}>
          {(item) => (
            <div class='w-[300px] h-full bg-teal-700 flex justify-center items-center text-white text-3xl mx-2 flex-none'>
              item {item}
            </div>
          )}
        </For>
      </Carousel>
    </>
  )
}

export default App
