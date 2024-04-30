'use client'
import { useState } from "react"

const ClientPage = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="text-center w-48"><span className="text-7xl">{num}</span> <br/>
    <button className="btn btn-outline mt-6 w-32" onClick={()=>setNum(num+1)}>Increase</button>
    <br/>
    <button className="btn btn-outline mt-2 w-32" onClick={()=>setNum(num-1)}>Decrease</button>
    </div>
  )
}
export default ClientPage