import { useEffect, useState } from "react"
import NavBar from "./components/Navbar";



function App(){
  const [state, setState] = useState("Abiodun")
  const [count, setCount] = useState(0)
  


  useEffect(() => {
    console.log("first")
  },[count]);

  const increment = ()=>{
    setCount((prev)=> prev + 1)
  }

  const decrement = ()=>{
    setCount(prev => prev === 0 ? 0 : prev - 1)
  }

  return(
    <div className="flex  flex-col ">
      <NavBar/>
      <div className="flex mt-20 flex-col items-center justify-center gap-5 text-3xl text-black">
      <button onClick={decrement}>-</button>
      <p className="text-3xl ">{count}</p>
      <button onClick={increment}>+</button>
      </div>
      
    </div>
  )
}

export default App