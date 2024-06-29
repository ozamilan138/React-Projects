import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("white")
  
  return (
    <div className='w-full h-screen flex justify-center' style={{backgroundColor:color}}>
      <div className='flex gap-4 border border-slate-700 items-center jutify-center bg-white rounded-3xl p-4 mx-10 flex-wrap fixed bottom-12'>
          <button onClick={()=>setColor("red")}>
            <span className='font-medium bg-red-500 border border-slate-600 px-4 py-2 rounded-3xl' >Red</span>
          </button>
          <button onClick={()=>setColor("blue")}>
            <span className='font-medium bg-blue-500 border border-slate-600 px-4 py-2 rounded-3xl' >Blue</span>
          </button>
          <button onClick={()=>setColor("yellow")}>
            <span className='font-medium bg-yellow-500 border border-slate-600 px-4 py-2 rounded-3xl' >Yellow</span>
          </button>
          <button onClick={()=>setColor("green")}>
            <span className='font-medium bg-green-500 border border-slate-600 px-4 py-2 rounded-3xl' >Green</span>
          </button>
          <button onClick={()=>setColor("#ec4899")}>
            <span className='font-medium bg-pink-500 border border-slate-600 px-4 py-2 rounded-3xl' >Pink</span>
          </button>
          <button onClick={()=>setColor("violet")}>
            <span className='font-medium bg-violet-500 border border-slate-600 px-4 py-2 rounded-3xl' >Violet</span>
          </button>
          <button onClick={()=>setColor("brown")}>
            <span className='font-medium bg-orange-900 border border-slate-600 px-4 py-2 rounded-3xl' >Brown</span>
          </button>
          <button onClick={()=>setColor("purple")}>
            <span className='font-medium bg-purple-700 border border-slate-600 px-4 py-2 rounded-3xl' >Purple</span>
          </button>
      </div>
    </div>
  )
}

export default App
