import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")


  return (

    <div className="w-screen h-screen" style={{ backgroundColor: color }} > <h1 className='text-center pt-32'>Click your favorite color Button<br/>and see the magic!!!</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded'>

          <button onClick={() => setColor("red")} className='bg-red-600 border-red-600 outline-none px-4 py-1 rounded-full text-white'>red</button>
          <button onClick={() => setColor("blue")} className='bg-blue-600 border-blue-600 outline-none px-4 py-1 rounded-full text-white'>blue</button>
          <button onClick={() => setColor("pink")} className='bg-pink-600 border-pink-600 outline-none px-4 py-1 rounded-full text-white'>pink</button>
          <button onClick={() => setColor("purple")} className='bg-purple-600 border-purple-600 outline-none px-4 py-1 rounded-full text-white'>purple</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-600 border-yellow-600 outline-none px-4 py-1 rounded-full text-white'>yellow</button>
          <button onClick={() => setColor("green")} className='bg-green-600 border-green-600 outline-none px-4 py-1 rounded-full text-white'>green</button>
          <button onClick={() => setColor("cyan")} className='bg-cyan-600 border-cyan-600 outline-none px-4 py-1 rounded-full text-white'>cyan</button>
          <button onClick={() => setColor("lime")} className='bg-lime-600 border-lime-600 outline-none px-4 py-1 rounded-full text-white'>lime</button>

        </div>

      </div>


    </div>

  );
}

export default App
