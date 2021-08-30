import '../App.css';
import Epf from './Epf';
import {useState} from 'react';
import Epfenafu from './Epfenafu';
function Epfdisfu() {
  const [toggle,setToggle]=useState(false);
function toggler()
{
toggle ? setToggle(false):setToggle(true);
}
    return (
<div className="container">
    <h3 style={{marginLeft:"25%"}}>Employees' Provident Fund (EPF)</h3>
    <h6 style={{marginLeft:"25%"}}>Any organisation with 20 or more employees must register for the Employee Provident Fund (EPF) scheme,</h6>
    <h6 style={{marginLeft:"25%"}}>a retirement benefit plan for all salaried employees.</h6>  
    </div>
    );
  }
  export default Epfdisfu;