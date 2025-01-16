import { useState } from 'react';

function App() {
  const color1 = "bg-slate-800";
  const color2 = "bg-amber-100";
  const [color, setColor] = useState(color1);

  function myBgColor() {
    console.log("color changed");
    if (color === color1) {
      setColor(color2);
    } else {
      setColor(color1);
    }
  }

  return (
    <div className={`h-screen w-screen ${color} flex items-center justify-center`}>
      <button id='exampleButton'
        className='h-[50px] w-[100px] bg-slate-400 rounded-[10px]'
        onClick={myBgColor}>
        Click
      </button>
    </div>
  );
}

export default App;
