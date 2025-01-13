import { useState } from 'react';
import Component1 from './components/Component1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-slate-800 flex items-center justify-center">
      <div className='h-50vh w-50vw flex items-center justify-center'>
        <Component1 ButtonName="clickbutton" className="h-30vh w-50vw rounded-10px" />
        <h1>hello !!!</h1>
      </div>
    </div>
  );
}

export default App;
