import React,{useState,createContext} from 'react'
import One from './One'

export const nameContext = createContext()

export default function Start(){

    const [name,setName] = useState('michael')
return(

    <>
    <nameContext.Provider value={name}>
    <One wish ='hello'/>
    </nameContext.Provider>
    
    </>
)

}