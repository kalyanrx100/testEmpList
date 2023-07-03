// import React,{useRef} from 'react'

// export default function UseRef(){

// const inputElement = useRef()

// const focusInput = ()=>{
//     inputElement.current.focus()

// }

//     return(
//         <>
//         <input type='text' ref={inputElement}></input>
//         <button onClick={focusInput}>Click</button>
//         </>
//     )
// }

// import React,{useRef,useState,useEffect} from 'react'

// export default function UseRef(){

//     const [inputVal,setInputVal] = useState()

//     const count = useRef(0)

//     useEffect(()=>{

//         count.current = count.current + 1
//     },[inputVal])
    
//     return(
//         <>
//         <input  onChange={(e)=>setInputVal(e.target.value)}></input>
//         <h1>{count.current}</h1>
//         </>
//     )
// }

// import { useReducer } from 'react';

// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <button onClick={() => {dispatch({ type: 'incremented_age' })}}>
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }

// import React,{useState} from 'react'

// function UseRef() {
// const [age,setAge] = useState(0)

//   return (
//     <>
    
//     <p>hello you are {age} </p>
//     <button onClick={()=>{setAge(age+1)}}>Click</button>
//     </>
//   )
// }

// export default UseRef

// import React from 'react'


// function Car (props){

//     return <li>{props.brand}</li>
// }


// function UseRef() {

//     const cars = ["BMW","AUDI","MARUTI","HYUNDAI"]

//   return (
//    <>
   
//    {

//     cars.map((e)=><Car brand={e}/>)

//    }
   
//    </>
//   )
// }

// export default UseRef



// import {useState} from 'react';

// const App = () => {
	
//   const initialState = [
//     {id: 1, country: 'Austria'},
//     {id: 2, country: 'Belgium'},
//     {id: 3, country: 'Canada'},
//   ];

//   const [data, setData] = useState(initialState);

//   const updateState = () => {
//     const newState = data.map(obj => {
//       // 👇️ if id equals 2, update country property
//       if (obj.id === 2) {
//         return {...obj, country: 'Denmark'};
//       }

//       // 👇️ otherwise return the object as is
//       return obj;
//     });

//     setData(newState);
//   };

//   return (
//     <div>
//       <button onClick={updateState}>Update state</button>

//       {data.map(obj => {
//         return (
//           <div key={obj.id}>
//             <h2>id: {obj.id}</h2>
//             <h2>country: {obj.country}</h2>
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;



// import React,{useState} from 'react'

// export default function UpdateCountry(){

// const initialState = [
//     {id:1, name: 'Australia'},
//     {id:2, name: 'USA'},
//     {id:3, name:'India'}
// ]


// const [data,setData] = useState(initialState)


// const updateCountr = ()=>{

//     const newState = data.map((e)=>{
//         if(e.id===2){
//             return {...e, name: 'Russia'};
//         }

//     })
//     setData(newState)
// }


// return(
//     <>
//     {
//         data.map((e)=>{

//             return(
//                 <tr key={e.id}>
//                 <td>{e.name}</td>
//                 </tr>
//             )
//         })

//     }
//     <button onClick={updateCountr}>Update</button>
//     </>
// )

// }



import React from 'react'

function UseRef() {
  return (
    <div>UseRef</div>
  )
}

export default UseRef




