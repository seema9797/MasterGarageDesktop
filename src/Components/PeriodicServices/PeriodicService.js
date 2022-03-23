import React from 'react';
import {Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import SideBar from './SideBar';
import MidBar from './MidBar';
import AddVechicle from './AddVechiclebtn';

function Periodic(){
    return <>
    <div className='container-fluid px-5'>
        <Row>
                <div className='py-3 top-0-cal'>
                    <Link to ="/HomeMain1"><i className='fa fa-arrow-left'></i></Link>
                    <Link to="/HomeMain1">Add services & Choose a garage</Link>
                </div>
            </Row>
            <Row>
                <Col lg={2} className="side_hide"><SideBar></SideBar></Col>
                <Col lg={6} className="side_hide"><MidBar></MidBar></Col>
                <Col lg={4} ><AddVechicle></AddVechicle></Col>
            </Row>

    </div>
            
    </>
}
export default Periodic;







