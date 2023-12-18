import { useState } from 'react'
export default function StateFunction()
{
    const[carname,setCarName]=useState("Expectation ");
    const changeCarname=()=>setCarName("Gives Serupadi.")
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>Life Advice: {carname}</h1>
            <button onClick={changeCarname}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Increment</button>
            <button onClick={decrCount}>Decrement</button>
        </div>

    )
}
