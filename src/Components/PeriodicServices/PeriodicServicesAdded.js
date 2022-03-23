import React,{useState,useEffect} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/qr.png';
import Fastaglogo from '../../Images/Fastaglogo.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';

function PeriodicServiceAdded(){
    return <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3'>
                    <Link to ="/PeriodicADDvechicle"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicADDvechicle">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col sm={2} ><SideBar></SideBar></Col>
                <Col sm={6} ><MidBar></MidBar></Col>
                <Col sm={4} ><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>
}
export default PeriodicServiceAdded;


const SubLast = () => {
    
    return(
    <>
        
        <div class="boxlast py-3 px-3" style={{textAlign:'Left'}}>
    <Row className='m-3'>
        <Col sm={8}>
        <p className='poppins18B'>Maruti Suzuki XL5</p>
        <p className='poppins15R'>MH 01 AB 3827</p>
        <p className='poppins12light'>Petrol, VDI, 1299cc</p>

        </Col>
        <Col sm={4}><img src={Venue} style={{height:'80px',float:'right',width:'120px'}} alt="error"></img></Col>
        <p className='poppins12R'>
        Insurance valid till Feb 2018
        </p>    
        </Row>
        <Row style={{textAlign:'center'}}>
            <form >
            <input
    className='changeInput'
        type="text"
        value="MH 01 AB 1234 "
        name="add vechicle" 
    /><Link to="/ServiceEstimates"><button className='addvechicle'>Change</button></Link>
            </form>
        </Row>
         
        <Row className='m-3'>
        <Col sm={4}><img src={Fastaglogo} style={{width:'120px'}} alt="error"></img></Col>
         <Col sm={8} style={{textAlign:'center',padding:'20px'}}><h6>Your Fastag balance is 456</h6></Col>   
        </Row>
        <Row className=''>
        <div className='noservice' style={{textAlign:'center'}}>
        <p style={{fontSize:'20px',color:'blue'}}><i class="fas fa-shopping-cart"></i>No services yet!</p><br></br>
            Start adding service to your cart to see prices</div>
        
        </Row>
        </div>


    </>
    )
    };


