import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../App.css';

 function Samplecal1()
 { 
    return(
    <div style={{marginLeft:"105px",marginTop:"5px"}}>

<button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i className="fa fa-eye">  View Sample Calculation
  </i>
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sample LOP based EPF Calculation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <h6>Let's assume the salary split-up considered for EPF is as shown below with PF wage restricted to ₹ 15,000</h6>
    <table id="table">
  <tr>
    <th>SALARY COMPONENTS</th>
    <th>EARNINGS as mentioned in the CTC</th>
    <th>EARNINGS with 10 days of LOP</th>
  </tr>
  <tr>
    <td><b>Basic : </b> Always considered for EPF</td>
    <td>₹ 18,000</td>
<td> ₹ 12,000</td>
  </tr>
  <tr>
    <td><b>Transport Allowance : </b>
Considered for EPF only when PF wage {'<'} ₹ 15,000</td>
    <td>₹ 15,000</td>
    <td>₹ 2,666</td>
  </tr>
  <tr>
    <td><b>Telephone Allowance : </b>
Considered for EPF only when PF wage {'<'} ₹ 15,000</td>
    <td>₹ 3,000</td>
    <td>₹ 2,000</td>
  </tr>
</table>
      </div>
     <div class="container">
         <div class="row">
         <div class="col-md-6" style={{backgroundColor:"lavender"}}>
         <h5 style={{fontSize:"12px"}}>THE OPTION IS NOT ENABLED</h5>
         <h6>EPF = 12% of 12000 = ₹ 1,440</h6>
         <h5 style={{fontSize:"10px"}}>(Basic in CTC {'>'} ₹ 15,000)</h5>
         <h5 style={{fontSize:"15px"}}>Here, Basic is 18k (as given in the salary split-up), which is more than the (Always)restricted PF wage of 15k. Hence, only the Basic component is considered for EPF Computation.</h5>
         </div>
         <div class="col-md-6" style={{backgroundColor:"#FAECEA"}}>
         <h5 id="enable" style={{fontSize:"12px"}}>THE OPTION IS ENABLED</h5>
         <h6>EPF = 12% of 15000 = ₹ 1,800</h6>
         <h5 style={{fontSize:"10px"}}>(Basic + Transport Allowance + Telephone Allowance {'>'} ₹ 15,000)</h5>
         <h5 style={{fontSize:"15px"}}>Here, Basic is 12k, which is less than the PF wage Restriction of 15k, hence other PF components such as Travelling Allowance and Telephone Allowance are included in the PF wage computation to bring the EPF to 15k.</h5>
         </div>
         </div>
     </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" style={{marginRight:"980px"}}>Okay, got it!</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
}
 
  export default Samplecal1;