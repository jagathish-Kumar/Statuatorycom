import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../App.css';

const Sampcalc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="white" class="btn btn-link" onClick={toggle} style={{ marginBottom: '1rem',color:'#0066ff' }}><i className="fa fa-caret-down"> View Sample Calculation</i></Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody id="samplecalc">
        Lets Assume the PF Wage is ₹20,000. The breakup of contribution will be:
        <br/>
        Employees' Contribution
        <br/>
        EPF = 12% of 1500 = ₹ 1800
        <br/>
        Employer's Contribution
        <br/>
        EPS = 8.33% of PF Wage (Maximum of ₹ 15,000) = 8.33% of 15000 = ₹ 1250
        <br/>
        EPF = 12% of PF Wage - EPS = 1800 (12% of 15000) - ₹ 1250 = ₹ 550

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Sampcalc;
