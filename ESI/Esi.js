import '../App.css';
import React , {useState} from 'react';
import {Switch} from 'antd';
import Esidisfu from './Esidisfu';
import Esienafu from './Esienafu';
function Esi()
{
const [toggle,setToggle]=useState(false);
const toggler = ()=>
{
toggle ? setToggle(false):setToggle(true);
}
return (
  
      <div id="toggbut">
      <Switch data-bs-toggle="tooltip" data-bs-placement="top" title="Enable ESI" onClick={toggler}/>
      {toggle ? <Esienafu/> : <Esidisfu/> }
      </div>
      
);
}
export default Esi;