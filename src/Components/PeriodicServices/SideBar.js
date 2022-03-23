import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';

function SideBar(){
    return<>
        <ul className='sidebar'>
            <li className='btn1 btn btn-secondary '><Link to="" style={{textDecoration:'none'}} ><p style={{color:'#2650D8',fontSize:'15px',fontWeight:'bold',marginBottom:'8px'}}>Periodic Service</p>
            <p className='poppins12light'>Scheduled Service Packages</p>
            <p className='poppins12light' style={{color:'#999999'}}>Other Service Packages</p></Link></li>
            <li  className='btn btn-light' ><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Running Repairs</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Denting & Painting</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Body Fittings</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >AC Service & Repairs</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Battery Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Wheel Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Inspection Service</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Insurance Repairs</Link></li>
        </ul>    
    </>
   
  
}
 export default SideBar;