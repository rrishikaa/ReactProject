import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
   
  <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-3 " > 
   
       <div className ="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">

        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("red")} style ={{backgroundColor:"red"}}>Red</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("blue")} style ={{backgroundColor:"blue"}}>Blue</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("pink")} style ={{backgroundColor:"pink"}}>Pink</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("green")} style ={{backgroundColor:"green"}}>green</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("lavender")} style ={{backgroundColor:"lavender"}}>Lavender</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("yellow")} style ={{backgroundColor:"yellow"}}>Yellow</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("white")} style ={{backgroundColor:"white"}}>White</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("grey")} style ={{backgroundColor:"grey"}}>Grey</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-white  " onClick ={()=> setColor("black")} style ={{backgroundColor:"black"}}>Black</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("purple")} style ={{backgroundColor:"purple"}}>Purple</button>
        <button className ="outline-none px-5 py-1 shadow-lg rounded-full text-black  " onClick ={()=> setColor("olive")} style ={{backgroundColor:"olive"}}>Olive</button>



       </div>

    </div>

     </div>
  
    
       
      
   
  )
}

export default App
