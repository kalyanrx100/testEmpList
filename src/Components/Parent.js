import React from 'react';
import { useState,createContext  } from 'react';
import Child from './Child';
import { Provider } from 'react';
import { Link } from 'react-router-dom';

function Parent() {

const [name,setName] = useState('john')

const UserContext = createContext()


  return (
    <>
<Link to='/chi'>Child</Link>
    <UserContext.provider value = {name}>
    <Child/>
    </UserContext.provider>
    </>
  )
}

export default Parent;


