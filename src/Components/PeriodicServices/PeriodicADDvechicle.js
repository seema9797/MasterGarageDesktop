import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import Car from '../../Images/ImagesAll/drawable-xhdpi/Car.png';
import {registerVehicalNo} from '../../redux/action';
import data from '../utill/data.json'
console.log(data);



function PeriodicADDvechicle(){

    
    const SubLast = () => {
        const[registerNo,setRegisterNo]=useState("")
        const[information,setInformation]=useState('')
        const[valid,setValid]=useState("")

        const check=useSelector((state)=>state.check?.registerVehicalNo)
        const usedispatch=useDispatch()
        const history=useHistory()
    
    const handlefilter=()=>{
        let temp=true
        let tempreg=[...check]
        Object.entries(data.cars).map(a=>{
            a[1].map(b=>{
                if(b.Registeration==registerNo){
                  temp=b
                }     
                                     
            } )

        })
        if(temp ==true){
            setValid("error")
        }
        else{
            setValid("success")
             history.push('/ServiceEstimates')
        }
        //setPage((currentPage)=>currentPage + 1);
        //information(temp)
        console.log(temp)
         tempreg.push(temp)
         
         usedispatch(registerVehicalNo(tempreg))
    }
    
        return(
            <div className="periodic_cont">
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
            
           
            <div class="boxlast py-3" >
        <Row style={{justifyContent:'center',textAlign:'center'}}>
        <img src={Car} style={{float:'center',width:'270px',height:'187px',padding:'20px'}} alt="error"></img>
             
             <Row className='m-3 poppins22M'>
                 <h4>Enter Vechicle Registration Number</h4>
             </Row>
             <Row className='py-4'>
             <p  className='poppins15light px-3' style={{}}>So we can show you the best prices for your vechicle service nearby garages</p>
             </Row>
             
             <form className='py-3'> 
             <span>{valid}</span>
             <input
                    className='addvechicleInput'
                    type="text"
                    onChange={(e)=>setRegisterNo(e.target.value)}
                    placeholder="Example - MH 01 AB 1234 "
                    name="add vechicle" 
              />
                 <button className='addvechicle' onClick={()=>handlefilter()}>Submit</button>
             </form>
             <Row>
                 <p>{setInformation}</p>
             <p  className='poppins12light' style={{textAlign:'left'}}>Don't worry your information safe with us we will use your number to fetch your car make & model so we can show accordingly</p> 
             </Row>
            
         
        </Row>
        
            
            </div>
    
            </div>
         )
    }

    return( <>
    <div className='container-fluid px-5'>
        <Row className="">
                <div className='py-3 periodic_top'>
                    <Link to ="/PeriodicService" className="periodicadd"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/PeriodicService" className="periodicadd1">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col lg={2} sm={2} className="periodic_hide"><SideBar></SideBar></Col>
                <Col lg={6} sm={8} className="periodic_hide"><MidBar></MidBar></Col>
                <Col lg={4} sm={3}><SubLast></SubLast></Col>
                
            </Row>

    </div>
            
    </>)
}
export default withRouter(PeriodicADDvechicle);





