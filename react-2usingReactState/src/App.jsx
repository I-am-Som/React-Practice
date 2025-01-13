import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-slate-800 flex justify-center items-center'>
      <div className='h-[50%] w-[50%] bg-slate-700 flex justify-center items-center rounded-[10px] gap-[10px]'>
          <button className='h-[50px] w-[100px] bg-red-300 rounded-[10px]' onClick={()=>{setCount(count + 1)}}>
            count : {count}
          </button>
          <button className='h-[50px] w-[100px] bg-red-300 rounded-[10px]' onClick={()=>{setCount(count + 1)}}>
            count : {count}
          </button>
      </div>
    </div>
  )
}

export default App;
