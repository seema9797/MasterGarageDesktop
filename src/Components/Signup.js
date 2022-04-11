import React,{useState} from 'react';
import './Login.css';
import { Link,withRouter } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import {useSelector,useDispatch} from 'react-redux';
import {logingarage} from '../redux/action';
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { useForm, Controller } from "react-hook-form";
import PhoneInput,{isValidPhoneNumber} from "react-phone-input-2";
//import 'react-phone-input-2/lib/style.css'
import countries from "i18n-iso-countries";
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
const Signup = ({show}) => {
   
   const [selectedCountry, setSelectedCountry] = useState("");
   const [phone, setPhone] = useState();
   const setSelectCountry = (value) => setSelectedCountry(value);
    
   // Have to register the languages you want to use
   countries.registerLocale(enLocale);
   countries.registerLocale(itLocale);
 
   // Returns an object not a list
   const countryObj = countries.getNames("en", { select: "official" });
 
   const countryArr = Object.entries(countryObj).map(([key, value]) => {
     return {
       label: value,
       value: key,
     };
   });
   
   const check1=useSelector((state)=>state.check?.logingarage);
   const dispatch=useDispatch()
 
   const handleclick=()=>{
       var prev;
       if(check1.length){
         prev=[...check1];
       }else{
         prev=[]
       }
       const body=[
         ...prev,
         {phone}
       ]
       console.log(body)
       dispatch(logingarage(body));
   }
     

    return (
        <Container>
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
               <h4>Sign up</h4>
               <div className="input_log1">
               <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={()=>setPhone()}
                  className="width_Input"
               />
                <Link to="/otp"><button className="contine_btn">CONTINUE</button></Link>
              </div>
              <p className="create_acc">By Clicking, I accept the Terms & Conditions & Privacy Policy</p>
           </CardBody>
           <footer>
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

export default Signup


