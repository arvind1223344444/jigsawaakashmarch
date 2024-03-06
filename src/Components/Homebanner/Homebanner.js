import React, { useEffect, useRef, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
//import USER_REGISTER from  '../../Services/api/USER_REGISTER'
import "../Homebanner/Homebanner.css";
import heroimage from "../../Images/heroimage.png";
import {API_USER_SENDOTP_LOGIN_URL,API_USER_SENDOTP_URL,API_USER_REGISTER_URL} from '../../Services/api';


  export default function Homebanner() {

  // const user_Id = localStorage.getItem('user_id');
  const Navigate=useNavigate();
 
  const [checkStorLogin, setcheckStorLogin] = useState(null);
  const [usnumber,Setusnumber]=useState("");
  const [usotp,Setusotp]=useState("");
  const [divsho ,setdivshow]=useState(false);
  const [otpverifedstys , setotpverifiedsts]=useState(false);
  const [showModal, setShowModal] = useState('');

  const [usname,Setusname]=useState("");
  const [usemail, setusemail]=useState("");
  const [usstate, setusstate]=useState("");
  const [ genderds, setGender] =useState('');

  const [countdown, setCountdown] = useState(60); // Initial countdown time in seconds
  const [timerId, setTimerId] = useState(null);

  const checkSotrageLogin =()=>{
    const storedUserId = localStorage.getItem('user_id');
    setcheckStorLogin(storedUserId);
  }
  useEffect(() => {
    checkSotrageLogin();
  }, [checkSotrageLogin]);

    
    const set_ses =(txt1, txt2)=>{
      localStorage.setItem('user_id',txt1)
      localStorage.setItem('user_name',txt2)
     }

    
    //user register form//
   const usSubmit= async(e)=>{
    e.preventDefault();

    if (!usnumber) {
      // Check if usnumber is empty
      // alert("Please enter a mobile number");
      Swal.fire({
        icon: 'error',
        title: 'Please enter a mobile number',
       })
      return;
    }
    if (!/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/i.test(usnumber)) {
      // Check if usnumber is a valid Indian phone number
      // alert("Please enter a valid Indian mobile number");
      Swal.fire({
        icon: 'error',
        title: 'Please enter a valid Indian mobile number',
       })
      return;
    }

    

    //alert("fds");
   const  usfdata={mobile:usnumber};
    //console.log(usfdata);
    const res= await axios.postForm(`${API_USER_SENDOTP_LOGIN_URL}`,usfdata)
    //console.log(res.data);
    if(res.data.user_status==0){
     // alert(res.data.response);
      Swal.fire({
        icon: 'error',
        title: res.data.response,
       })
      return;
    }
    if(res.data.status==true)
    {
    // alert('Otp sent successfully');
    Swal.fire({
      icon: 'info',
      title: 'Otp sent successfully',
     })
    setdivshow(true);   
    startCountdown();
    }
    };

    // API call to resend OTP
    const resendOTP = async () => {
      alert(usnumber);
      try {
        const res = await axios.postForm(`${API_USER_SENDOTP_LOGIN_URL}`, {mobile: usnumber}); 
        if (res.data.status === true) {
          Swal.fire({
            icon: 'info',
            title: 'Otp Resent successfully',
           })
           clearInterval(timerId);
           startCountdown();
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Otp Not Send ',
           })
        }
      } catch (error) {
        console.log(error);
      }
    };

    // countDown start time 

    const startCountdown = () => {
      setCountdown(60); // Reset the countdown to 60 seconds
      const countotp = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(countotp);
          }
          return prevCountdown - 1;
        });
      }, 1000);
      setTimerId(countotp);
    };

    // number 10 digit validation
    const numberKeyupRef = useRef();

    const numberKeyup = () => {
      let inputValue = numberKeyupRef.current.value;
      
      // Trim the input to 10 characters if it's longer
      if (inputValue.length > 10) {
        inputValue = inputValue.slice(0, 10);
        numberKeyupRef.current.value = inputValue; // Update the input field value
       
        Swal.fire({
          icon: 'info',
          title: 'Only 10 digits are allowed',
         })
      }
    }


       // number 10 digit validation
       const otpKeyupRef = useRef();

       const otpnumberKeyup = () => {
         let inputValue = otpKeyupRef.current.value;
         console.log(inputValue);
         // Trim the input to 10 characters if it's longer
         if (inputValue.length > 5) {
           inputValue = inputValue.slice(0, 5);
           otpKeyupRef.current.value = inputValue; // Update the input field value
           Swal.fire({
            icon: 'info',
            title: 'Only 5  digits otp  allowed',
           })
         }
       }

    

    useEffect(() => {
      return () => {
        clearInterval(timerId);
      };
    }, [timerId]);

    // otp verfication form//
    const verfiyotp =async(e)=>{
      e.preventDefault();
     const psost={mobile:usnumber,otp:usotp}
     //console.log(useOtp);
     const resp=await axios.postForm(`${API_USER_SENDOTP_URL}`,psost);
    
     if(resp.data.success==1){
    //  alert('Otp Verified successfully');
    Swal.fire({
      icon: 'success',
      title: 'Otp Verified successfully',
     })
     setotpverifiedsts(true);
     setShowModal('show');
     }else{
      // alert('Wrong otp');
      Swal.fire({
        icon: 'error',
        title: 'Please fill corect OTP',
       })
     }
    }

    const useRegister= async(e)=>{
      e.preventDefault();
      if (!usname,!usemail,!usstate,!genderds) {
        // Check if usnumber is empty
        Swal.fire({
          icon: 'error',
          title: 'Please fill complete Details',
         })
        return;
      }
      const usrgt={name:usname,email:usemail,state:usstate,gender:genderds,mobile:usnumber}
      //console.log(usrgt);
      const uresp=await axios.postForm(`${API_USER_REGISTER_URL}`,usrgt);
      
      if(uresp.data.status==true){
       // alert('User Register successfully');
       Swal.fire({
        icon: 'Success',
        title: 'User Register successfully',
      })
      
      set_ses(uresp.data.user_id, uresp.data.user_name, uresp.data.response);
      
        setShowModal('hide');
        Navigate('/');
    
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Please fill complete form',
       })
    }
    }

   
    const disabledButton={
      background:"#dadada",
      cursor:"not-allowed",
      padding:"2px 10px"
    }

    

  return (
    <>
    
    <section className="section  banner_section banner_background section-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="hero-content-left">
        <h5 className="display-6 fw-bold mb-3">Crack Your goal with india's <br></br>  top educators </h5>
        <p className='mt-3  fw-bold lerner'>Over 10 crore Learners trust us for their preparation</p>
        
       <div className='home_input_p'>

        {checkStorLogin===null?(

         <div className="d-flex align-items-center from_number ">
         {divsho ?
            <form onSubmit={verfiyotp} className="w-75 me-3" style={{display: otpverifedstys == true ? 'none' : 'block'}}>
             <p className='time text-end fw-bold my-0 mb-2'>Time:- {countdown}</p>
            <input type="number" value={usotp} onChange={(e)=>{Setusotp(e.target.value)}}   className="form-control" placeholder="Enter Otp" ref={otpKeyupRef}  onKeyUp={otpnumberKeyup}/>
            <div className='d-flex justify-content-between'>
            <p className='mt-1 fw-normal'>Enter Otp</p>
            {/* Resend button */}
            
            
            <p
            className={`mt-1 fw-normal text-primary fw-bold ${countdown > 0 ? 'disabled-button' : ''}`}
            onClick={countdown === 0 ? resendOTP : undefined}
            role='button'
            style={countdown > 0 ? disabledButton : {}}
            >
            Resend OTP
            </p>

            </div>
           
            <div className="d-flex">
            <button  type="submit" className="btn btn-primary  search_btn w-100">Submit Otp</button>
           </div>
           </form>
          :
          <form onSubmit={usSubmit} className="w-75 me-3">
          <input type="number" value={usnumber} onChange={(e)=>{Setusnumber(e.target.value)}} pattern="[0-9]{10}" min="1" max="9999999999" className="form-control " placeholder="Enter your number" ref={numberKeyupRef}  onKeyUp={numberKeyup}/>
          <p className='mt-1 fw-normal'>Will send an OTP for varification</p>
          <div className="d-flex">
          <button  type="submit" className="btn btn-primary  search_btn w-100"> Register</button>
          </div>
          </form>
        }
        </div>
        ):(

        <div className="align-items-center from_number ">
          <p>Over 10 crore Learners trust us for their preparation Over 10 crore Learners trust us for their preparation
          Over 10 crore Learners trust us for their preparation Over 10 crore Learners trust us for their preparation
          Over 10 crore Learners trust us for their preparation Over 10 crore Learners trust us for their preparation.
          </p>
        <Link to='/OurCourses' className="btn btn-primary  search_btn "style={{width:"200px"}} >Our Courses</Link>
       </div>
         )
      
        }
       
       </div>
        </div>
        </div>

      
      <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
        <div className="position-relative rounded  bg-jig-alt">
          <div className=" text-center mb-4">
            <img src={heroimage} className='img-fluid' alt={heroimage}></img>
          </div>
        </div>
      </div>

      </div>
    </div>
  </section>


      <section className='user_register_modal'>
      
      <div className={`offcanvas offcanvas-start  ${showModal}`} data-bs-backdrop="false" id="user_reg_modal" >
      <div className="offcanvas-header">
      <h5 className="offcanvas-title" >Enter Your Details</h5>
      {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
      </div>
      <div className="offcanvas-body">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          
          <form  onSubmit={useRegister}>

          <div className="mb-2">
          <label  className="form-label text-dark fw-bold">Enter Name</label>
          <input type="text" className="form-control" value={usname} onChange={(e)=>{Setusname(e.target.value)}}  placeholder="Enter Name"/>
          </div>
          
          <div className="mb-2">
          <label  className="form-label text-dark fw-bold">Enter Email</label>
          <input type="email" className="form-control" value={usemail} onChange={(e)=>{setusemail(e.target.value)}} placeholder="name@example.com"/>
          </div>
          
          <div className="mb-2">
          <label  className="form-label text-dark fw-bold">Enter State</label>
          <input type="text" className="form-control" value={usstate}  onChange={(e)=>{setusstate(e.target.value)}} placeholder="Enter your state"/>
          </div>

          <div className="mb-4">
          <label  className="form-label text-dark fw-bold">Select Gender</label>
          <select className="form-select  mb-3" onChange={(e)=>{setGender(e.target.value)}}>
          <option value="">--Choose One--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          </select>
           </div>
          
          <div className=" ms-auto ">
            <button className="btn btn-primary search_btn w-100" type="submit"> User Register </button>
          </div>
        
          </form>
         </div>
        </div>
      </div>
      
      </div>
      </div>

      </section>


    </>
  )
}
