import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
 

function SideBar({filterServicePack}){
    const[Periodic,setPeriodic]=useState([])
    const url="http://mastergarage.in/garageapi/getServiceList.php"

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            console.log(res.data.result)
            setPeriodic(res.data.result)
        })
        .catch(err=>{
            console.log(err)
    
        })
    },[])
  
    return<>
     
          
            {Periodic?.map((per,key)=>(
                   <ul className="sidebar"> 
                            <li  className='btn btn-light sideservice_click'><Link to="" style={{textDecoration:'none',color:'#00155A'}}> {per.name}</Link></li>
                          
                          </ul>
            ))}
          
         
           
                         
          
            {/* <li className='btn1 btn btn-secondary '><Link to="" style={{textDecoration:'none'}} ><p style={{color:'#2650D8',fontSize:'15px',fontWeight:'bold',marginBottom:'8px'}}>Periodic Service</p>
            <p className='poppins12light'>Scheduled Service Packages</p>
            <p className='poppins12light' style={{color:'#999999'}}>Other Service Packages</p></Link></li>
            <li  className='btn btn-light' ><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Running Repairs</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Denting & Painting</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Body Fittings</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >AC Service & Repairs</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Battery Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Wheel Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Inspection Service</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Insurance Repairs</Link></li> */}
       
    </>
   
  
}
 export default SideBar;