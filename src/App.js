import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import EmpData from './Components/EmpData';
import EmpUpdate from './Components/EmpUpdate'
import EmpNew from './Components/EmpNew';
import Start from './Components/Start';
import Edata from './Components/Edata';
import UseRef from './Components/UseRef';
import UpdateObject from './Components/UpdateObject';






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/ed' element={<EmpData/>}></Route>
      <Route path='/eu' element={<EmpUpdate/>}></Route>
      <Route path='/en' element={<EmpNew/>}></Route>
      <Route path='/sta'element ={<Start/>}></Route>
      <Route path = '/edata' element={<Edata/>}></Route>
      <Route path='/uref' element={<UseRef/>}></Route>
      <Route path='/uo' element={<UpdateObject/>}></Route>
     
      
      
    </Routes>
    </>
  );
}

export default App;
