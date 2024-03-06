import React, { useEffect, useRef, useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import '../Navbar/Navbar.css';
import illust from '../../Images/illust.svg';
//import logo from '../../Images/logo.png';
import logo from '../../Images/JSLogo.jpg';

import ManAvtar from '../../Images/ManAvtar.png';
import Swal from 'sweetalert2';
import axios from 'axios';

import {API_USER_REGISTER_OTP_VALIDATE_LOGIN_URL,API_USER_AUTH_LOGIN_URL} from '../../Services/api';


export default function Navbar() {
 
  //https://codepen.io/EigenDerArtige/pen/mOboLR

 const Navigate =useNavigate();

 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [disabled, setDisabled] = useState(false);
 const [mobinptdisabled, setmobinptdisabled] = useState(true);
 const [tpmobile,settpmobile]=useState("");
 const [showModallog, setShowModallog] = useState('');

  const [countdown, setCountdown] = useState(0); // Countdown timer in seconds
  const [CountertimerId, setCountertimerId] = useState(null);

 const [inp1, setinp1]=useState("");
 const [inp2, setinp2]=useState("");
 const [inp3, setinp3]=useState("");
 const [inp4, setinp4]=useState("");
 const [inp5, setinp5]=useState("");

 const set_ses =(txt1, txt2)=>{
  localStorage.setItem('user_id',txt1)
  localStorage.setItem('user_name',txt2)
 }

 const sentOTPN =async(e)=>{
  e.preventDefault();

  const datatpmobile ={mobile:tpmobile}
 
  const resdatatpmobile=await axios.postForm (`${API_USER_AUTH_LOGIN_URL}`,datatpmobile);
 // console.log(resdatatpmobile.data.status);
  if(resdatatpmobile.data.user_status==1){
    Swal.fire({
      icon: 'success',
      title: `${resdatatpmobile.data.response}`,
     })
  
     setmobinptdisabled(false);
    startCountdown();

   }
   else{
    Swal.fire({
      icon: 'error',
      title: `${resdatatpmobile.data.response}`,
     })

   }
  
 }


 const startCountdown = () => {
  setDisabled(true);
  setCountdown(60); // Set the countdown timer to 60 seconds
  const CounterLogin = setInterval(() => {
    setCountdown((prevCountdown) => {
      if (prevCountdown === 1) {
        clearInterval(CounterLogin);
        setDisabled(false); // Enable the "Resend OTP" button after the countdown ends
      }
      return prevCountdown - 1;
    });
  }, 1000);
  setCountertimerId(CounterLogin);
};

useEffect(() => {
  return () => {
    clearInterval(CountertimerId);
  };
}, [CountertimerId]);

 const otpSubmitFm=async(e)=>{

  e.preventDefault();
  //alert('sd');
  
  // setNumber({...number, inp1, inp2, inp3, inp4, inp5})

  let oootp=`${inp1}${inp2}${inp3}${inp4}${inp5}`;
  const fepost={mobile:tpmobile,otp:oootp}
  const verOtp =await axios.postForm(`${API_USER_REGISTER_OTP_VALIDATE_LOGIN_URL}`,fepost)


  if(verOtp.data.success==1){

//  alert(verOtp.data.response);
 Swal.fire({
  icon: 'success',
  title: `${verOtp.data.response}`,
 })
//  Navigate('/');
window.location.href = '/'; 
//  localStorage.setItem('user_id' , verOtp.data.user_id);
set_ses(verOtp.data.user_id, verOtp.data.user_name, verOtp.data.response);
 setIsLoggedIn(true);

 setShowModallog('hide');
 var btn = document.getElementById("clsns_btn");
 btn.click();

 setinp1('');
 setinp2('');
 setinp3('');
 setinp4('');
 setinp5('');
  }else{
    Swal.fire({
      icon: 'warning',
      title: `${verOtp.data.response}`,
     })
    // alert("verOtp.data.response");
    setinp1('');
    setinp2('');
    setinp3('');
    setinp4('');
    setinp5('');
  }

 }


 useEffect(() => {
  setIsLoggedIn(!!localStorage.getItem('user_id'));
}, []);

const usrlogout=(e)=>{
  e.preventDefault();
  localStorage.removeItem('user_name');
  localStorage.removeItem('user_id');
  setIsLoggedIn(false);
  // Navigate('/');
  window.location.href = '/'; 
}

const handleInput = (e) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength);
  }
};

const handleKeyUp = (e) => {
  if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  } else if (e.target.value && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  }
};


// Hide mobile menu after clicking on the menu link 
function closeMobileMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Click the navbar-toggler button to close the menu
    }
  }
}


const loginuserinputRef = useRef();

const loginusarkeyup=()=>{
  let inputValue = loginuserinputRef.current.value;
    
  // Trim the input to 10 characters if it's longer
  if (inputValue.length > 10) {
    inputValue = inputValue.slice(0, 10);
    loginuserinputRef.current.value = inputValue; // Update the input field value
   
    Swal.fire({
      icon: 'warning',
      title: `Only 10 digits are allowed.`,
     })
  }
}

  return (
    <>
{/* modal form Start */}

<div className={`modal fade  ${showModallog}`} id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" id="clsns_btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="Us_log_form">
         <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <img src={illust} alt={illust} className='img-fluid p-4'/>
            {/* <p className=' fw-bold'> Over 10 crore learners trust us for their preparation</p> */}
            </div>
            <div className='col-md-6'>
              <div className='us_log_form_right'>
                <h3 className='fw-bold text-Secondary mb-3'>Log in</h3>
                
              <form onSubmit={otpSubmitFm}>
               
              <div className="mb-3"> 

              <p style={{ display: mobinptdisabled || countdown < 1 ? 'none' : 'block' }}> Resend OTP in {countdown} seconds</p>
              
              <div className="input-group ">
              <input type="number" className="form-control" onChange={(e)=>settpmobile(e.target.value)} placeholder="Enter Number" ref={loginuserinputRef} onKeyUp={loginusarkeyup}/>
              
              <button className="btn btn-info  border-1 " type="button" onClick={sentOTPN} style={{background:"#6ba7ff"}} disabled={disabled}>
              <span className=" text-dark"> {mobinptdisabled? 'Send OTP':'Resend OTP'}</span>
            
             </button>

              </div>
              <div className="form-text">We’ll send an OTP for verification</div>
              </div>

              <div className="mb-3">
             
              <label className="form-label">Enter OTP</label>
              <div className='d-flex' style={{columnGap: "10px"}}>

              <input
              type="number"
              onInput={handleInput}
              onKeyUp={handleKeyUp}
              value={inp1}
              className="form-control text-center fw-bold"
              maxLength="1"
              disabled={mobinptdisabled}
              onChange={(e)=>setinp1(e.target.value)}/>
              <input
              type="number"
              onInput={handleInput}
              onKeyUp={handleKeyUp}
              value={inp2}
              className="form-control text-center fw-bold"
              maxLength="1"
              disabled={mobinptdisabled}
              onChange={(e)=>setinp2(e.target.value)}
              />
              <input
              type="number"
              onInput={handleInput}
              onKeyUp={handleKeyUp}
              value={inp3}
              className="form-control text-center fw-bold"
              maxLength="1"
              disabled={mobinptdisabled}
              onChange={(e)=>setinp3(e.target.value)}
              />
              <input
              type="number"
              onInput={handleInput}
              onKeyUp={handleKeyUp}
              value={inp4}
              className="form-control text-center fw-bold"
              maxLength="1"
              disabled={mobinptdisabled}
              onChange={(e)=>setinp4(e.target.value)}
              />
              <input
              type="number"
              onInput={handleInput}
              onKeyUp={handleKeyUp}
              value={inp5}
              className="form-control text-center fw-bold"
              maxLength="1"
              disabled={mobinptdisabled}
              onChange={(e)=>setinp5(e.target.value)}
              />
              </div>
              {/* <a className="btn btn-sm px-0 text-dark fw-bolder border-0">Resend OTP</a> */}
              </div>
              {/* <Link  to="/" className="form-text my-2  fw-bold d-inline-block " style={{cursor:"pointer",textAlign:"right"}}>User Register</Link> */}
              <div className="d-flex ">
                <button type="submit" className="btn btn-primary  search_btn w-100">Submit OTP</button>
              </div>

              </form>
              </div>
              </div>
          </div>
         </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

{/* modal form close */}






    <div className='navbar_wrapper'>
    <nav className='navbar  navbar-expand-lg navbar-light bg-white  mt-0'>
  <div className='container'>
  
  <div className=' d-sm-block d-md-none d-xxl-none'>
  {!localStorage.getItem('user_id')?(
    <div className='flex'>
    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
    </div>
    ):
   <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
    <div className="dropdown text-end">
        <a href="javascript void(0)" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={ManAvtar} alt="mdo" width="32" height="32" className="rounded-circle"/>
        </a>
        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{position:'absolute',inset: '0px auto auto 0px',margin: '0px',transform: 'translate(-110px, 34px)'}}>
        <li><Link to="UserProfile" className="dropdown-item" href="#">Student Admin</Link></li>
          <li><Link className="dropdown-item" onClick={usrlogout} style={{cursor:'pointer'}}>Sign out</Link></li>
        </ul>
      </div>
     </div>
    }
    </div>

   <div className="logo" style={{width:"90px"}}><img src={logo} className="img-fluid"/></div>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
      </button>

        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
        <ul className='navbar-nav mx-lg-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
        <NavLink className="nav-link" to="/"  onClick={closeMobileMenu}>Get started</NavLink>
        </li>
         <li className='nav-item'>
         <NavLink className="nav-link" to="/Educators" onClick={closeMobileMenu}>Educators</NavLink>
        </li>
        <li className='nav-item'>
         <NavLink className="nav-link" to="/OurCourses" onClick={closeMobileMenu}>Our Courses</NavLink>
        </li>
        
        <li className='nav-item'>
        <NavLink className="nav-link" to="/Successstory" onClick={closeMobileMenu}>Success story</NavLink>
        </li>
       </ul>
      
    <div className='d-block d-sm-none d-md-block d-xxl-block'>
    {!localStorage.getItem('user_id')?(
    <div className='flex'>
    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
    </div>
    ):
   <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
    <div className="dropdown text-end">
        <a href="javascript void(0)" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={ManAvtar} alt="mdo" width="32" height="32" className="rounded-circle"/>
        </a>
        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{position:'absolute',inset: '0px auto auto 0px',margin: '0px',transform: 'translate(-110px, 34px)'}}>
        <li><Link to="UserProfile" className="dropdown-item" href="#">Student Admin</Link></li>
          <li><Link className="dropdown-item" onClick={usrlogout} style={{cursor:'pointer'}}>Sign out</Link></li>
        </ul>
      </div>
     </div>
    }
     </div>
        
          
    </div>
  </div>
</nav>
    </div>





    </>
  )
}
