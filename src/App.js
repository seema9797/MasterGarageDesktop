import TopNavbar from './Components/TopNavbar/TopNavbar';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Components/Home'
import HomeMaintain from './Components/Home_Maintain/HomeMaintain';
import HomeMain1 from './Components/Home_Maintain/HomeMain1';
import Periodic from './Components/PeriodicServices/PeriodicService'
import PeriodicADDvechicle from './Components/PeriodicServices/PeriodicADDvechicle';
import PeriodicServiceAdded from './Components/PeriodicServices/PeriodicServicesAdded';
import ServiceEstimates from './Components/PeriodicServices/ServiceEstimates';
import BasicShowmore from './Components/PeriodicServices/BasicShowmore';
import BookGarage from './Components/GarageBook/BookGarage';
import LoginBook from './Components/GarageBook/LoginGarage';
import Aboutus from './Components/AboutUs';
import Address from './Components/GarageBook/Adaddress';
import PayBook from './Components/GarageBook/PaymentGarage';
import PayNow from './Components/GarageBook/Paynow';
import ScheduleBook from './Components/GarageBook/ScheduleBook';
import HomeChallan from './Components/HomeChallan/HomeChallan';
import DueChallan from './Components/HomeChallan/DueChallan';
import DueChallan1 from './Components/HomeChallan/DueChallan1';
import HomeFasTag from './Components/HomeFastag/HomeFastag';
import BuyFastag from './Components/HomeFastag/BuyFastag';
import FastagSucessful from './Components/HomeFastag/FastagOrder';
import RechargeFasTag from './Components/HomeFastag/RechargeFastag';
import RechargeFastag1 from './Components/HomeFastag/RechargeFastag1';
import RechargeSucessful from './Components/HomeFastag/RechargeSucessful';
import ActFastag from './Components/HomeFastag/ActivateFastag';
import ActivateFastag1 from './Components/HomeFastag/ActivateFastag1';
import ActivateFastag2 from './Components/HomeFastag/ActivateFastag2';
import ChaufferHome from './Components/HomeChauffer/ChaufferHome';
import ChaufferBook from './Components/HomeChauffer/ChaufferBook';
import ChaufferBooked from './Components/HomeChauffer/ChaufferBooked';
import ChaufferAwait from './Components/HomeChauffer/ChaufferAwait';
import ChaufferDeclined from './Components/HomeChauffer/ChaufferDeclined';
import Await from './Components/GarageVerification/Await';
import Tacking from './Components/AboutUs';

import Dummypage from './Components/GarageBook/Dummypage';

import ContactUs from './Components/Contact';
import Faq from './Components/Faq';
import JoiinUs from './Components/joinUs';
import Services from './Components/Service';
import Booking1 from './Components/Booking/Booking1';
import ConfirmBooking from './Components/Booking/ConfirmBooking';
import Vehicaldelivery from './Components/Booking/Vehicaldelivery'
import Login from './Components/Login';
import Login2 from './Components/Login2';
import Signup from './Components/Signup';
import Otp from './Components/Otp';
import Resetpass from './Components/Resetpass';
import Profile from './Components/Profile';
import ProfileDashboard from './Components/ProfileDasboard/ProfileDashboard'
import MyGarage from './Components/ProfileDasboard/MyGarage';
import MyOrder from './Components/ProfileDasboard/MyOrder';
import Chats from './Components/ProfileDasboard/Chats';
import Favourites from './Components/Favourites/Favourites';
import MgCoin from './Components/ProfileDasboard/MgCoin';
import HelpsSupport from './Components/ProfileDasboard/HelpsSupport';
import Refer from './Components/ProfileDasboard/Refer';
import modifyreview from './Components/Booking/ModifyReview';
import Payment from './Components/Booking/PaymentDetails';
import Thanking from './Components/Booking/Thanking';
import Chat from './Components/Booking/Chat';
import Notification from './Components/Locaton/Notification';
import Search from './Components/Locaton/Search';
import Addvehical from './Components/Locaton/Addvihical';
import Addinstruction from './Components/Locaton/Addinstruction';
import Bookingid from './Components/QrPages/Bookingid';
//import Sidebar from './Components/dashborad/Sidebar'
import bokking from './Components/GarageVerification/Bokking'

//MOBLE RESPONSIVE
import Mob_tracking from './Components/MobileView/Mob_tracking';
import Mob_Secedule from './Components/MobileView/Mob_Secedule';
import Mob_Track2 from './Components/MobileView/Mob_Track2';
import Mob_Track3 from './Components/MobileView/Mob_Track3';
import Mob_Track4 from './Components/MobileView/Mob_Track4';


//RESPONSIVE LOGIN
import Login_Mob from './Components/MobileView/Login_Mob';
import Otp_Mob from './Components/MobileView/Otb_Mob';
import SignUp_Mob from './Components/MobileView/SignUp_Mob';
import Login2_Mob from './Components/MobileView/Login2_Mob';
import Home_Mob from './Components/MobileView/Home_Mob';
import Vehical_history from './Components/MobileView/AddVehical_his';
import Vehical_Add from './Components/MobileView/AddVehical'
import Service_Mob from './Components/MobileView/Service_Mob'
import vehicla_mob from './Components/MobileView/Mob_VehicalRecive';
import Service_Add from './Components/MobileView/Service_Add'
import Service_Added from './Components/MobileView/Service_added'


//import JobCar from './Components/JobCard/JobCar';
import Jobcardprogress from './Components/JobCard/Jobcardprogress';
import Nextcarprogress from './Components/JobCard/Nextcarprogress';
import Accountscan from './Components/JobCard/Accountscan';
import Routes1 from './Components/dashborad/Routes';
import Location from './Components/Locaton/Location';
import Location1 from './Components/Locaton/Location1';
import AddChauffer from './Components/Chauffer/AddChauffer';
import Vehicalqr from './Components/QrPages/Vehicalqr';
import Mgcoinredeem from './Components/QrPages/Mgcoinredeem';
import Moreredeem from './Components/QrPages/Moreredeem';
import AwaitConfirm from './Components/GarageVerification/AwaitConfirm';

//tracking car
import CartTrack2 from './Components/Booking/Cartrack2';
import Carttrack3 from './Components/Booking/Carttrack3';
import Carttrack4 from './Components/Booking/Carttract4';
import Carttrack5 from './Components/Booking/Carttrack5';
import TrackFinish from './Components/Booking/TrackFinish'
import Outdelivery from './Components/Booking/Outdelivery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
//import "react-step-progress/dist/index.css";
//


import Routes from './Components/dashborad/Routes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
         <BrowserRouter>
         <TopNavbar></TopNavbar>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Dummypage' component={Dummypage}/>
      {/* <Route path='/' exact component={Login_Mob}/> */}
      <Route path='/HomeMaintain' component={HomeMaintain}/>
      <Route path='/HomeMain1' component={HomeMain1}/>
      <Route path= "/Confirmbook" component={Aboutus}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/booking1' component={Booking1}/>
      <Route path='/confirmbooking' component={ConfirmBooking}/>
      <Route path='/modifyreview' component={modifyreview}/> 
       <Route path="/Vehicaldelivery" component={Vehicaldelivery}/>
       <Route path="/login" component={Login}/>
       <Route path="/login2" component={Login2}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/otp" component={Otp}/>
       <Route path="/Resetpass" component={Resetpass}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/profileDashboard" component={ProfileDashboard}/>
        <Route path="/MyGarage" component={MyGarage}/>
         <Route path="/MyOrder" component={MyOrder}/>
          <Route path="/Chats" component={Chats}/>
           <Route path="/Favourites" component={Favourites}/>
            <Route path="/MgCoin" component={MgCoin}/>
             <Route path="/HelpsSupport" component={HelpsSupport}/>
             <Route path="/Refer" component={Refer}/>
             <Route path="/payment" component={Payment}/>
             <Route path="/thanking" component={Thanking}/>
              <Route path="/Chat" component={Chat}/>
              {/* <Route path="/Sidebar" component={Sidebar}/> */}
              <Route path="/jobprogress" component={Jobcardprogress}/>
              <Route path="/Nextcarprogress" component={Nextcarprogress}/>
              <Route path="/Accountscan" component={Accountscan}/>
              <Route path="/Routes" component={Routes1}/>
              <Route path="/location" component={Location}/>
              <Route path="/notification" component={Notification}/>
              <Route path="/location1" component={Location1}/>
              <Route path="/search" component={Search}/>
              <Route path="/addvehical" component={Addvehical}/>
              <Route path="/addinstruction" component={Addinstruction}/>
              <Route path="/addchauffer" component={AddChauffer}/>
              <Route path="/PeriodicService" component={Periodic}/>
              <Route path="/PeriodicADDvechicle" component={PeriodicADDvechicle}/>
              <Route path="/PeriodicServiceAdded" component={PeriodicServiceAdded}/>
              <Route path ="/BasicShowmore" component={BasicShowmore}/>
              <Route path="/ServiceEstimates" component={ServiceEstimates}/>
              <Route path="/BookGarage" component={BookGarage}/>
              <Route path="/LoginGarage" component={LoginBook}/>
              <Route path="/vehicalqr" component={Vehicalqr}/>
              <Route path="/Bookingid" component={Bookingid}/>
              <Route path="/Mgcoinredeem" component={Mgcoinredeem}/>
              <Route path="/Moreredeem" component={Moreredeem}/>
              <Route path="/Adaddress" component={Address}/>
              <Route path="/PaymentGarage" component={PayBook}/>
              <Route path="/Paynow" component={PayNow}/>
              <Route path="/ScheduleBook" component={ScheduleBook}/>
              <Route path="/HomeChallan" component={HomeChallan}/>
              <Route path="/DueChallan" component={DueChallan}/>
              <Route path="/DueChallan1" component={DueChallan1}/>
              <Route path="/HomeFasTag" component={HomeFasTag}/>
              <Route path="/BuyFastag" component={BuyFastag}/>
              <Route path="/FastagOrder" component={FastagSucessful}/>
              <Route path="/RechargeFastag" component={RechargeFasTag}/>
              <Route path="/RechargeFastag1" component={RechargeFastag1}/>
              <Route path="/RechargeSucessful" component={RechargeSucessful}/>
              <Route path="/ActivateFastag" component={ActFastag}/>
              <Route path="/ActivateFastag1" component={ActivateFastag1}/>
              <Route path="/ActivateFastag2" component={ActivateFastag2}/>
              <Route path="/ChaufferBook" component={ChaufferBook}/>
              <Route path="/ChaufferBooked" component={ChaufferBooked}/>
              <Route path="/ChaufferAwait" component={ChaufferAwait}/>
              <Route path="/Await" component={Await}/>
              <Route path="/AwaitConfirm" component={AwaitConfirm}/>
              <Route path="/ChaufferDeclined" component={ChaufferDeclined}/>
              <Route path="/ChaufferHome" component={ChaufferHome}/>
               <Route path="/bokking" component={bokking}/>
               <Route path="/Outdelivery" component={Outdelivery}/>
            {/* tracking  car*/}
            <Route path="/CartTrack2" component={CartTrack2}/>
            <Route path="/Carttrack3" component={Carttrack3}/>
            <Route path="/Carttrack4" component={Carttrack4}/>
            <Route path="/Carttrack5" component={Carttrack5}/>
            <Route path="/TrackFinish" component={TrackFinish}/>

            {/*MOBILE RESPONSIVE*/}
            <Route path="/Login2_Mob" component={Login2_Mob}/>
            <Route path="/SignUp_Mob" component={SignUp_Mob}/>
            <Route path="/Otp_Mob" component={Otp_Mob}/>
            <Route path="/Home_Mob" component={Home_Mob}/>
            <Route path="/Mob_tracking" component={Mob_tracking}/>
            <Route path="/Mob_Secedule" component={Mob_Secedule}/>
            <Route path="/Mob_Track2" component={Mob_Track2}/>
            <Route path="/Mob_Track3" component={Mob_Track3}/>
            <Route path="/Mob_Track4" component={Mob_Track4}/>
            <Route path="/Vehical_history" component={Vehical_history}/>
            <Route path="/Vehical_Add" component={Vehical_Add}/>
            <Route path="/Service_Mob" component={Service_Mob}/>
            <Route path="/vehicla_mob" component={vehicla_mob}/>
            <Route path="/Service_Add" component={Service_Add}/>
            <Route path="/Service_Added" component={Service_Added}/>
            
           
    </Switch>
  </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
