import { useState } from "react"
function App() {
 const [color, setColor] = useState("olive")
  return (
    <>
     <div className="w-full h-screen duration-200"
     style = {{backgroundColor:color}}
     
     >

      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "deeppink"}} onClick={()=>{setColor("deeppink")}}>Deep Pink</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "purple"}} onClick={()=>{setColor("purple")}}>Purple</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "blueviolet"}} onClick={()=>{setColor("blueviolet")}}>Blue Violet</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "hotpink"}} onClick={()=>{setColor("hotpink")}}>HotPink</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "chocolate"}} onClick={()=>{setColor("chocolate")}}>Chocolate</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "darkorchid"}} onClick={()=>{setColor("darkorchid")}}>Dark Orchid</button>

          <button className="outline-none px-4 text-white shadow-sm rounded-2xl p-2" style={{backgroundColor: "indigo"}} onClick={()=>{setColor("indigo")}}>Indigo</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
