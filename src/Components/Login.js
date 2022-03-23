import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
const Login = ({show}) => {
    return (
        <Container>
            <Card className="card1 active">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h3>Hello User,</h3>
                 <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
                 </div>
                    <div className="headerProfile">
                       <div><img src={profile} alt="error"/></div>
                       <div className="logindetail">
                         <Link to="/profile"><button className="Login">Login</button></Link>
                          <p>Don't have an account? </p>
                          <h6>No problem <Link to="/login2">Sign-up</Link> now & earn rewards</h6>
                       </div>
                    </div>
               </div>
               <CardBody >
                  <ul className="supportprofile">
                    <li><Link to="/Tracking">
                      <img src={helpsupport} alt="error"/>
                  </Link>
                            <p>Help & Support</p>
                    </li>
                            <li>
                              <img src={favourites} alt="error"/>
                         <p>Favourites</p>
                            </li>
                            <li>
                           <Link to="/Accountscan"> 
                              <img src={referearn} alt="error"/>
                           </Link>
                              <p>Refer & Earn</p>
                            </li>
                            <li>
                                <img src={contact} alt="error"/>
                               <p>Contact Us</p>
                            </li>
                  </ul>
               </CardBody>
               <footer>
                 <div className="footerlog">
                   <ul className="social_icon">
                      <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                      <li><i class="fab fa-facebook-square"></i></li>
                      <li><i class="fab fa-twitter"></i></li>
                      <li><i class="fab fa-linkedin"></i></li>
                      <li><i class="fab fa-instagram"></i></li>
                   </ul>
                 </div>
                 <div className="tearmcondition">
                    <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                    <Link className="tearm"><p>Privacy Policy</p></Link>
                 </div>
               </footer>
               </div>
            </Card>
        </Container>
    )
}

export default Login


