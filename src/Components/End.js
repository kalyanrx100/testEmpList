import React,{useContext} from 'react'
import { nameContext } from './Start'


export default function End(props){

    const name = useContext(nameContext)

    return(
        <>
        {props.wish+" "}
        {name}
        </>
    )

}