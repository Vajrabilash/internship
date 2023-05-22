import logo from './logo.svg';
import mgls from './mgls.svg';
import bok from './bok.svg';
import clck from './clck.svg';
import rzpy from './rzpy.svg';
import lvtv from './lvtv.svg';
import schl from './schl.svg';
import ads from './ads.svg';
import lclck from './lclck.svg';
import backgroun from "./backgroun.svg";
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const[selection,setSelection]=useState();
        switch (selection) {
          case "12 Months":
            document.getElementById('amtbp').innerHTML="179";
            document.getElementById('dsam').innerHTML="18,321";
            break;

          case "6 Months":
            document.getElementById('amtbp').innerHTML="149";
            document.getElementById('dsam').innerHTML="18,351";
            break;
          
          case "3 Months":
            document.getElementById('amtbp').innerHTML="99";
            document.getElementById('dsam').innerHTML="18,401";
            break;

          default:
            break;
        }
  return (
    <div className='container01'>
          <div className="hdr">
              <img src={logo} className='lg' alt="logo" />
              <div className='crpr'>
              <select className='slop'>
                <option>Courses</option>
              </select>
              
              <select className='slop'>
                <option>Programs</option>
              </select>
              </div>
              
              <img src={mgls} className='mgl' alt='searc here'/>
              <p>Login</p>
              <a href='https://www.edyoda.com/register'><button className='jnbt'>JOIN NOW</button></a>
          </div>

          {/* header section ends */}

          {/* main body section starts */}

          <div className='lbdy'>
            <h1>
              Access curated courses worth<br></br>
              &#8377;<strike><span style={{color:"white"}}>18,500</span></strike> at just <span style={{color:"#0096FF"}}>&#8377; 99</span> per year!
            </h1>
            <img src={bok}/> <span className='dtl' style={{fontWeight:"bold",color:"#ffffff"}}><span style={{color:"#0096ff"}}>100+</span> Job relevant courses</span>
            <img src={clck}/> <span className='dtl' style={{fontWeight:"bold",color:"#ffffff"}} id='dt1'><span style={{color:"#0096ff"}}>20,000+</span> Hours of content</span>
            <img src={lvtv}/> <span className='dtl' style={{fontWeight:"bold",color:"#ffffff"}} id='dt2'><span style={{color:"#0096ff"}}>Exclusive</span> webinar access</span>
            <img src={schl}/> <span className='dtl' style={{fontWeight:"bold",color:"#ffffff"}} id='dt3'>Scholarship worth <span style={{color:"#0096ff"}}>&#8377;94,500</span></span>
            <img src={ads}/> <span className='dtl' style={{fontWeight:"bold",color:"#ffffff"}} id='dt4'><span style={{color:"#0096ff"}}>Ad Free</span> learning experience</span>
          </div>
          

          <div className='rbdy'>
            
            <div className='rbdbt'>
                <button>1</button>
                <button>2</button>
                <text>Sign up</text>
                <text>Subscribe</text>
            </div>
            <center><h4>Select your subcription plan</h4></center>
            <div className='plans'>
            <p className='exp'>Offer expired</p>
                <input type='radio' value="12 Months" name="" checked disabled/>12 Months subcription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='rts'>
                <h5>Total &#8377;99</h5>
                <p>&#8377;8  /mo</p> 
                </div>
            </div>
              
            <div className='plans' id='rcmdd'>
            <p className='rcmd'>Recommended</p>
                <input type='radio' value="12 Months" name="plansl"  onChange={e =>setSelection(e.target.value)} />12 Months Subscriotion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='rts'>
                <h5>Total &#8377;179</h5>
                <p>&#8377;15  /mo</p> 
                </div>
            </div>

            <div className='plans'>
                <input type='radio' value="6 Months" name="plansl" onChange={e =>setSelection(e.target.value)} />6 Months Subscription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='rts'>
                <h5>Total &#8377;149</h5>
                <p>&#8377;25  /mo</p> 
                </div>
            </div>

            <div className='plans'>
                <input type='radio' value="3 Months" name="plansl" onChange={e =>setSelection(e.target.value)} />3 Months Subscription&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='rts'>
                <h5>Total &#8377;99</h5>
                <p>&#8377;33  /mo</p> 
                </div>
            </div>
            <hr></hr>
            <p className='sf'>Subscription Fee <span className='amn'>&#8377;<span id='aaa'>18,500</span></span></p>

            <div className='dplans'>
                <p className='lto'>Limited time offer<span className='damn'>-&#8377;<span id='dsam'>18,401</span></span></p>
                <img src={lclck} className='dcl'/>
            </div>
            <span className='ofv'>Offer valid till 25th march 2023</span>
            <p className='fnlam'>Total (incl. of 18% GST)<span className='bmcj'><b>&#8377;</b><b id='amtbp'>149</b></span></p>
            <button className='pybt' id='cncl'>Cancel</button>
            <button className='pybt' id='pymt'>PROCEED TO PAY</button>
            <img src={rzpy} className='rzp'/>
          </div>
          
    </div>
    
  );
}

export default App;
