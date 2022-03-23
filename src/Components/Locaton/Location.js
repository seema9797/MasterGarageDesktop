import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css'


const Location = ({showSidebar}) => {
   
  return ( 
      <Container className="locationcont mt-3">
          <Card className="p-4">
              <div className="mb-3">
                  <div className="local">
                  <p><i class="fas fa-map-marker-alt"></i>Location</p>
                  <i onClick={showSidebar} class="fas fa-times"></i>
                  </div>
                      <div>
                     <p className="form-control-feedback1"> <i className="fa fa-search"></i></p>
                       <input type="text" className="inputlocation form-control1" placeholder="Search"/>
                      </div>
              </div>
              <Card className="mb-3">
              <Link to="/location1" className="gpslocation p-3">
                  <i class="fas fa-crosshairs"></i>
                  <div className="getgps">
                      <p>Get Current Location</p>
                      <small>Using GPS</small>
                  </div>
            </Link>
              </Card>
              <Card className="">
                  <div className="locationaddress p-4">
                      <p>Save Addresses</p>
                  <div className="gpslocation1 mb-4">
                    <i class="fas fa-home"></i>
                    <div className="getgps1">
                        <p>Home</p>
                        <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                        Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                    </div>
                  </div>
                  <div className="gpslocation1 mb-4">
                  <i class="fas fa-suitcase"></i>
                    <div className="getgps1">
                        <p>Office</p>
                        <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                        Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                    </div>
                  </div>
                  <div className="gpslocation1 mb-4">
                  <i class="fas fa-crosshairs"></i>
                    <div className="getgps1">
                        <p>Other</p>
                        <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                        Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                    </div>
                  </div>
                  <h5><Link className="viewmorelocation">VIEW MORE</Link></h5>
                  </div>
                  
              </Card>
          </Card>
      </Container>
  )
};

export default Location;
