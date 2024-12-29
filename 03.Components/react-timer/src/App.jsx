import './App.css'
import {useState} from 'react';
import FancyTimer from './components/FancyTimer'
import Timer from './components/Timer'

function App() {
  const[isShown, setIsShown] = useState(true);
  
  return (
    <>
      <Timer/>
      {isShown && <FancyTimer/>}
      <button onClick={() => {setIsShown(oldState => !oldState)}}>Hide/Show fancy timer</button>
    </>
  )
}

export default App
