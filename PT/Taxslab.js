import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../App.css'
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactTooltip from "react-tooltip";

const Taxslab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="viewdet">
      <Button color="white" onClick={toggle} style={{ marginBottom: '1rem', color:'#0066ff'}}><i className="fa fa-caret-down">  Tax Slabs based on Monthly Gross Salary</i></Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody id="samplecalc1">
          <div class="container2">          
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>START RANGE (₹)</th>
        <th>END RANGE (₹)</th>
        <th>MONTHLY TAX AMOUNT (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts1" value="1" disabled/>
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts2" placeholder="15,000" />
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts3" placeholder="0" />
  </div></td>
      </tr>
      <tr>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts4" placeholder="15,001"/>
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts5" placeholder="20,000"/>
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts6" placeholder="150"/>
  </div></td>
      </tr>
      <tr>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts7" placeholder="20001"/>
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts8" placeholder="999999999"/>
  </div></td>
        <td><div class="form-group col-md-5">
    <input type="number" class="form-control" id="ts9" placeholder="200"/>
  </div></td>
      </tr>
    </tbody>
  </table>
</div>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Taxslab;
