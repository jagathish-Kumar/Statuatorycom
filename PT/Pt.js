import '../App.css';
import React , {useState} from 'react';
import {Switch} from 'antd';
import Ptdisfu from './Ptdisfu';
import Epfenafu from '../EPF/Epfenafu';
function Pt()
{
return (
  
<div class="form-check form-switch" data-bs-toggle="tooltip" data-bs-placement="top" title="Professional Tax has been enabled by default based on your organisation's location and you cannot disable it." >
  <input class="form-check-input"  type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled style={{width:'45px',height:'25px',marginLeft:'1060px'}}/>
</div>
      
);
}
export default Pt;