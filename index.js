import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Basic/App';
import Epf from './EPF/Epf';
import Esi from './ESI/Esi';
import Pt from './PT/Pt';
import Viewdet from './PT/Viewdet';
import Last from './End/Last';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ReactTooltip from "react-tooltip";
import Ptdisfu from './PT/Ptdisfu';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Epf />
    <Esi />
    <Pt/>
    <Ptdisfu/>
    <div style={{marginLeft:'430px'}}>
    <Viewdet/>
    </div>
    <br/>
    <Last/>
    <ReactTooltip id="toolTip1"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
