import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log("updated number = " , number)
  }, [number])

  const increase = ()=> {
    
    if(number > 9) {
      setNumber(number +10)
    } else {
      setNumber(number + 1)
    }
  }

  const decrease = ()=> {
    setNumber(number - 1)
  }
  return (
    <>
    <h2>Hello counter app</h2>
    <h1>Number is : {number}</h1>
    <button className="red" onClick={decrease}> Decrement </button>
    <button className="green" onClick={increase}> Increment </button>
    </>
  );
}

export default App;
