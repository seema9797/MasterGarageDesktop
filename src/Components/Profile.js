import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import profileavt from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png';
import profile from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/profile.png';
import mygarage from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/mygarage.png';
import myorder from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/myorder.png';
import chats from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/chats.png';
import bookmark from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/bookmark.png';
import mgcoin from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/mgcoin.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';

const Login = () => {
    return (
        <Container>
            <Card className="card1 d-flex rounded">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h5>Hello Sachin,</h5>
                 <p> <i class="far fa-times"></i></p>
                 </div>
                    <div className="headerProfile">
                       <div><img src={profileavt} alt="error"/></div>
                       <div className="logindetail1">
                          <h3>Sachin Tiwari</h3>
                           <p>+91 8853299293</p>
                           <p>sachin.vipmail@gmail.com</p>
                       </div>
                    </div>
               </div>
               <CardBody >
                  <ul className="supportprofile">
                     <li><Link to="/Routes">
                         <img src={profile} alt="error"/>
                         </Link>
                        <p>Profile</p>
                     </li>
                     <li>
                        <img src={mygarage} alt="error"/>
                      <p>My Garage</p>
                      </li>
                       <li>
                         <img src={myorder} alt="error"/>
                          <p>My Orders</p>
                       </li>
                       <li>
                          <img src={chats} alt="error"/>
                             <p>Chats</p>
                       </li>
                       <li>
                           <img src={bookmark} alt="error"/>
                           <p>Bookmarks</p>
                       </li>
                       <li>
                          <img src={mgcoin} alt="error"/>
                           <p>MG Coins</p>
                       </li>
                       <li>
                          <img src={helpsupport} alt="error"/>
                           <p>Help & Support</p>
                       </li>
                       <li>
                          <img src={referearn} alt="error"/>
                           <p>Refer & Earn</p>
                       </li>
                  </ul>
               </CardBody>
               <footer>
                 <div>
                   <ul className="social_icons">
                      <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                      <li><i class="fab fa-facebook-square"></i></li>
                      <li><i class="fab fa-twitter"></i></li>
                      <li><i class="fab fa-linkedin"></i></li>
                      <li><i class="fab fa-instagram"></i></li>
                   </ul>
                 </div>
               </footer>
               </div>
            </Card>
        </Container>
    )
}

export default Login
