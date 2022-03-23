import React, {Component} from 'react';
import {CardBody,Input,Label,CardTitle,Card,Collapse, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import servicesList from './services.json';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import BasicService from '../../Images/BasicService.png';



class ShowMore extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
    render() {
      return (
          



        <div>
                    <Link to ="" style={{paddingTop:'20px'}} onClick={this.toggle}>Show more</Link> 

          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
              <div className='py-2'>
            <Row>
                <Col sm={6}><p className='poppins15blue px-3'>What's Included</p></Col>
                <Col sm={6} ><svg id="Icon_ionic-ios-close-circle-outline" className='mx-3' data-name="Icon ionic-ios-close-circle-outline" xmlns="http://www.w3.org/2000/svg" style={{float:'right'}} width="20" height="20" viewBox="0 0 20 20">
  <path id="Path_27130" data-name="Path 27130" d="M18.938,17.98l-2.229-2.229,2.229-2.229a.676.676,0,1,0-.956-.956l-2.229,2.229-2.229-2.229a.676.676,0,0,0-.956.956L14.8,15.751,12.568,17.98a.654.654,0,0,0,0,.956.671.671,0,0,0,.956,0l2.229-2.229,2.229,2.229a.679.679,0,0,0,.956,0A.671.671,0,0,0,18.938,17.98Z" transform="translate(-5.754 -5.752)" fill="#f45c3b"/>
  <path id="Path_27131" data-name="Path 27131" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" transform="translate(-3.375 -3.375)" fill="#f45c3b"/>
</svg>
</Col>
            </Row>
            
                <ul className='Showmore'>
                    <li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Engine Oil Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Oil Filter Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Air Filter Cleaning</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Coolant Top up </p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Wiper Fluid Replacement</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Battery Water Top up</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Heater/Spark plugs checking</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Car Wash</p>
</li>
<li><p className='poppins15L'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{marginRight:'10px'}} viewBox="0 0 15 15">
  <path id="Path_22613" data-name="Path 22613" d="M91.5,207a7.5,7.5,0,1,0,7.5,7.5A7.509,7.509,0,0,0,91.5,207Zm3.459,6.345-3.938,3.938a.235.235,0,0,1-.323,0l-2.642-2.642a.231.231,0,0,1,0-.324l.338-.337a.23.23,0,0,1,.323,0l2.06,2.059a.116.116,0,0,0,.165,0l3.356-3.356a.235.235,0,0,1,.323,0l.338.338a.229.229,0,0,1,0,.323Z" transform="translate(-84 -207)" fill="#53bd8c"/>
</svg>Interior Vacuuming  (Carpets & Seats)</p>
</li>
                </ul>
                
            </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      );
    }
  }

  export default ShowMore;