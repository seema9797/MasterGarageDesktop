import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
const Otp = ({show}) => {
    return (
        <Card className="card1 active">
        <div className="login">
           <div className="">
           <div className="hello">
             <h3>Hello User,</h3>
             <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
             </div>
                <div className="headerProfile1">
                   <div><img src={profile} alt="error"/></div>
                </div>
           </div>
           <CardBody className="login_head">
               <h4>Enter OTP</h4>
               <div className="input_log">
               <div className="inputpass">
                    <input id="txtPassword" type="password" className="textfield password" placeholder="Enter OTP here" />
                    <Link className="hyperlink">Resend</Link>
                </div>
             <Link to="/profile"><button>SUBMIT</button></Link> 
              </div>
              <p className="create_acc">OTP sent to 8897564353 <Link to="/signup"> Change number</Link></p>
           </CardBody>
           <footer>
             <div className="tearmcondition">
                <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                <Link className="tearm"><p>Privacy Policy</p></Link>
             </div>
           </footer>
           </div>
        </Card>
    )
}

export default Otp


