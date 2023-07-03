import React,{useState,useEffect} from 'react'
import axios from 'axios'

 function Edata(){

const [data,setData] = useState()
useEffect(()=>{
    getData()
    },[])

const getData = async()=>{
    const gData = await axios.get('https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project')
    const res = gData.data
    setData(res)     
    //console.log('xxxxxxxxxxxxxxx',gData.config.transitional.silentJSONParsing)          
}





    return(
        <>
        {
            data && data.length >0 ?
            data.map((d,i)=>{
               return(
                <tr key={d.id}>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                </tr>
               )
            })
            :null
        }
         
        </>
    )
}
export default Edata;