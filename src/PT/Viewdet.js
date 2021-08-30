import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../App.css'
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactTooltip from "react-tooltip";
import Taxslab from './Taxslab';
const Viewdet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="viewdet">
      <Button color="white" onClick={toggle} style={{ marginBottom: '1rem', color:'#0066ff'}}>View Details</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody id="samplecalc1">
          <div class="form-group col-md-4">
    <label for="wl">Work Location</label>
    <input type="email" class="form-control" id="wl" aria-describedby="emailHelp" value="Head Office (Andhra Pradesh)" disabled/>
  </div>
  <br/>

  <div class="form-group col-md-4">
    <label for="pt1">PT Number</label>
    <input type="email" class="form-control" id="pt1" aria-describedby="emailHelp" placeholder="Enter PT Number"/>
  </div>
  <br/>

  <div class="form-group col-md-4">
    <label for="dc3">Deduction Cycle</label>  <i className="fa fa-info" data-tip="Provident Fund (PF) contributions for each month should be deposited to the Employee Provident Fund Organisation (EPFO) within the 15th of the following month" data-for='toolTip1' data-place='top'></i>
    <input type="text" class="form-control" id="dc3" aria-describedby="emailHelp" value="Monthly" disabled/>
  </div>
  <br/>

  <Taxslab/>
  <br/>

  <button type="button" class="btn btn-link"> <i className="fa fa-check"> Save</i></button>
<button type="button" class="btn btn-link" onClick={toggle}> <i className="fa fa-times"> Cancel</i></button>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Viewdet;
