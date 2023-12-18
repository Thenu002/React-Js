import React, { useState }from 'react'
export default function StateHoldObject()
{
    const[college,setCollege]=useState({name2:"Selva",hobby:"Fighting",love:"Not Interested"})
    const changeD=()=>{setCollege((prevState)=>{return{...prevState,love:"Chumma Sonnen"}})}
    return(
        <div>
            <h1>Name: {college.name2}</h1>
            <h1>Hobby: {college.hobby}</h1>
            <h1>Love: {college.love}</h1>
            <button onClick={changeD}>Thodunga..</button>
        </div>
    )
}