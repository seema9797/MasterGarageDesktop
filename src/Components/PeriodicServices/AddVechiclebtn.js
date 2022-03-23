import React from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import './addvechiclebtn.css';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/qr.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import {useSelector,useDispatch} from 'react-redux';
import {selectVehical} from '../../redux/action';
import {withRouter } from "react-router-dom";

function AddVechicle(){
    return<div className="add_vehical">
     <div className="progressbar">
                <div className="prog">   
                </div>
                <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                <div className="pagesize">
                     <li>E</li>
                     <li>Vehical</li>
                     <li>Service</li>
                     <li>Garage</li>
                     <li>Basic</li>
                     <li>F</li>
                </div> 
            </div>
        <div class="addvechiclebox py-3 px-2">
        <form>
            <input className='vechicleInput' type="text" placeholder="Example - MH 01 AB 1234" name="add vechicle" />
            <Link to ="/PeriodicADDvechicle"><button className='vechiclebtn'>Add Vechicle</button></Link>
        </form>
    
         
        <Row className='px-4'>
            Select vechicle you need to service
        </Row>
        <Row className='vechiclesList mx-3 my-3'>
        <Col sm={6}><div><img src={qr} style={{height:'45px',width:'45px;',marginBottom:'20px'}}></img>
        <h5 className='fontsize20'>Alcazar</h5>
        <h6 style={{color:'grey',fontSize:'12px  '}}>MH 01 AB 3827</h6></div></Col>
        <Col sm={6}><div><img src={Venue} style={{height:'99px',float:'right',width:'140px'}}></img>
        <h6 style={{color:'red',fontSize:'12px  '}} className='bottomright'><i class="far fa-edit"></i>edit</h6></div></Col>    
        </Row>
        <Row className='vechiclesList mx-3 my-3'>
        <Col sm={6}><div><img src={qr} style={{height:'45px',width:'45px;',marginBottom:'20px'}}></img>
        <h5 className='fontsize20'>Baleno</h5>
        <h6 style={{color:'grey',fontSize:'12px  '}}>MH 01 AB 3827</h6></div></Col>
        <Col sm={6}><div><img src={Baleno} style={{height:'99px',float:'right',width:'140px'}}></img>
        <h6 style={{color:'red',fontSize:'12px  '}} className='bottomright'><i class="far fa-edit"></i>edit</h6></div></Col>    
        </Row>
        <Row className='vechiclesList mx-3 my-3'>
        <Col sm={6}><div><img src={qr} style={{height:'45px',width:'45px;',marginBottom:'20px'}}></img>
        <h5 className='fontsize20'>i10</h5>
        <h6 style={{color:'grey',fontSize:'12px  '}}>MH 01 AB 3827</h6></div></Col>
        <Col sm={6}><div><img src={Elitei20} style={{height:'99px',float:'right',width:'140px'}}></img>
        <h6 style={{color:'red',fontSize:'12px  '}} className='bottomright'><i class="far fa-edit"></i>edit</h6></div></Col>    
        </Row>
        </div>
    </div>
}
export default withRouter(AddVechicle);
