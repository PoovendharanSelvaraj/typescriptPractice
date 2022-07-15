import React, { useEffect } from 'react'

interface headProps  {
    label:string
}

const BasicPractice = ({ label }:headProps) => {
    const name:string = "Rock Star";
    const age:number = 25;
    const isFetch:Boolean = false;

    useEffect(()=>{
       fetch("")
    },[])
  return (
    <div>
        <h1>{label}</h1>
        <p>Type-string Name - {name}</p>
        <p>Number Age - {age}</p>
    </div>
  )
}

export default BasicPractice