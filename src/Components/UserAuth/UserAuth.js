import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
//import USER_REGISTER from  '../../Services/api/USER_REGISTER'
import "../Homebanner/Homebanner.css";
import {API_USER_SENDOTP_LOGIN_URL,API_USER_SENDOTP_URL,API_USER_REGISTER_URL} from '../../Services/api';



export default function UserAuth() {

   
    const [usnumber,Setusnumber]=useState("");
    const [usotp,Setusotp]=useState("");
    const [divsho ,setdivshow]=useState(false);
    const [otpverifedstys , setotpverifiedsts]=useState(false);
    const [showModal, setShowModal] = useState('');
  
    const [usname,Setusname]=useState("");
    const [usemail, setusemail]=useState("");
    const [usstate, setusstate]=useState("");
    const [ genderds, setGender] =useState('');
  
   
  
      
  
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
        alert("Please enter a valid Indian mobile number");
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
  
      }
      };
  
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
        //  Navigate('/UserProfile');
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Please fill complete form',
         })
      }
      }
  return (
    <>
    
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
    
      <div className="d-flex align-items-center from_number ">
         {divsho ?
            <form onSubmit={verfiyotp} className="w-75 me-3" style={{display: otpverifedstys == true ? 'none' : 'block'}}>
            <input type="number" value={usotp} onChange={(e)=>{Setusotp(e.target.value)}}  className="form-control" placeholder="Enter Otp"/>
            <p className='mt-1 fw-normal'>Enter Otp</p>
            <div className="d-flex ">
            <button  type="submit" className="btn btn-primary  search_btn w-100">Join for free</button>
           </div>
           </form>
          :
          <form onSubmit={usSubmit} className="w-75 me-3"  >
          <input type="number" value={usnumber} onChange={(e)=>{Setusnumber(e.target.value)}} pattern="[0-9]{10}" min="1000000000" max="9999999999" className="form-control " placeholder="Enter your number"/>
          <p className='mt-1 fw-normal'>Will send an OTP for varification</p>
          <div className="d-flex ">
          <button  type="submit" className="btn btn-primary  search_btn w-100">Join for free</button>
          </div>
          </form>
        }
        </div>
    
    </>
  )
}
