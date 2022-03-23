import React from 'react'
import { Container,Row,Col,Card,Button,ButtonGroup,Input, CardBody, CardTitle, CardText,CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import Coins from '../../Images/Images/drawable-ldpi/coins.png';
  import ReactStars from "react-rating-stars-component"
import './dashboard.css';
import {Link} from 'react-router-dom';
import profile from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png'
import visa from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/visa.png';
import googlepay from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/googlepay.png';
import freechare from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/freecharge.png';
import paytm from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/paytm.png';
import phonepay from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/phonepe.png';
import Switch from "react-switch";
import review1 from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/review1.png'
const ProfileDashboard = () => {
     const rating = {
      size: 50,
      count: 10,
      color: "black",
      activeColor: "red",
      value: 7.5,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
      onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
      }
    };
    return (
        <Container className="profile-dashboard">
            <Card>
                <div className="allcontainer">
                    <Row className="p-4">
                        <Col lg={3}>
                           <div className="profileheader">
                                <img src={profile} alt="error" className="mb-4"/>
                                <Button variant="primary" color="primary"><i class="far fa-edit"></i>Update Profile</Button>
                           </div>
                        </Col>
                        <Col lg={8}>
                            <div className="peofileinfos">
                                 <div className="profilename"><h3>Sachin Tiwari</h3> <p><Link className="logoutprofile"><i class="fas fa-arrow-left"></i> Logout</Link></p></div> 
                               <div className="subconatiner">
                                <ul>
                                    <li><i class="far fa-envelope"></i>sachin.vipmail@gmail.com</li>
                                    <li><i class="fas fa-phone"></i>+91 8853299293</li>
                                    <li><i class="fas fa-phone"></i>+91 9082224157</li>
                                    <li><i class="fas fa-map-marker-alt"></i>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station, 
                                    Andheri East, Mumbai- 123 456, Maharashtra</li>
                                </ul>
                                <div className="qrborder"><i class="fas fa-qrcode"></i></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
            <div className="mt-4">
                <div className="profileseconfcont p-3">
                    <div className="experiencref">
                    <div>
                        <p><i class="fas fa-share-alt"></i> Refer a friend</p>
                        <p className="referprofile"> <small>Refer a friend to Master Garage & earn
                            coins once they complete booking</small></p>
                    </div>
                    <div>
                        <p>How has your experience been? Tell us</p>
                            <p className="referprofile1">
                            <ReactStars
                            count={5}
                            onChange={rating}
                            className="rat_star"
                            size={24}
                            activeColor="#ffd700"
                            />
                            <p> ,Write a review</p>
                        </p>
                    </div>
                    <div>
                       <p>Need Help?</p>
                        <button className="btncontact">Contact Us</button>
                    </div>
                        
                      
                       
                    </div>
                </div>
            </div>
            <div className="paymentfullcont mt-3">
                <h4>Payment</h4>
                 <div>
                     <div className="p-2 paymentcontmain">
                         <div>
                                <h5>Saved Cards</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={visa} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8089 - XXXX - XXXX - 0099</p>
                                                <small>Valid Till 08/2024</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={visa} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8089 - XXXX - XXXX - 0099</p>
                                                <small>Valid Till 08/2024</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                             </div>
                         <div>
                                <h5>Saved UPI Addresses</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={phonepay} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8853299293@oksbi</p>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={googlepay} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>8853299293@oksbi</p>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                         </div>
                         <div>
                                <h5>Linked Wallets</h5>
                                <div className="paymentcont">
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={paytm} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>Paytm</p>
                                                <small>Balance- 0</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col lg={4}>
                                    <Card className="rounded">
                                        <div className="paymentscard p-3">
                                            <p><img src={freechare} alt="error"/></p>
                                            <div className="paymentgap">
                                                <p>Freecharge</p>
                                                <small>Balance- 0</small>
                                            </div>
                                            <Link className="deletepaymentcard">Delete</Link>
                                        
                                        </div>
                                    </Card>
                                    </Col>
                                </div>
                         </div>
                     </div>
                 </div>
            </div>
            <div className="mt-4 mb-4">
                <h5>Saved Address</h5>
                <Row>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                          <i class="fas fa-home"></i>
                            <div>
                                <p>Home</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-briefcase"></i>
                            <div>
                                <p>Office</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <p>Aditya</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={6} className="mb-4">
                <div>
                    <div className="profileaddres p-3">
                        <div className="editdelete">
                            <p><Link className="edit1">Edit</Link></p>
                           <p><Link className="delete1">Delete</Link></p> 
                        </div>
                        <div className="homeaddress">
                        <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <p>Parents</p>
                                <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                            Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Link><i class="fas fa-plus"></i> Add more Address</Link>
                </Row>
            </div>
            <div>
                <h5>Notification Setting</h5>
                <div className="profileaddres p-3">
                    <ul>
                        <li className="notificationprofile">
                            <p>Allow garages to send you personalized promotional emails for discounts & special offers </p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Alert me on reminders and upcoming appointment notifications</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Notify me about offers and discounts by Master Garage</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>Notify me via e-mail when a merchant sends me a personalized message</p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                        <li className="notificationprofile">
                            <p>WhatsApp notifications when you book a service through Master Garage </p>
                            <div className="">
                                <i class="far fa-question-circle"></i>
                                <Switch/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="removeprofile mb-4">
                <h5>Remove Account</h5>
                  <p>Want to stop using this account?</p>
                  <button className="btnremove">REMOVE</button>
            </div>

        </Container>
    )
}

export default ProfileDashboard
