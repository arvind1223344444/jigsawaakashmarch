import React, { useEffect, useState } from 'react';
import '../Layout/Profileinner.css';
 import user from '../../../../Images/user.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_FETCH_USER_PROFILE_URL} from '../../../../Services/api';
export default function Profileinner() {
   
    const user_id = localStorage.getItem('user_id');


    const data={
      id:user_id
    }
   // alert(user_id);
  const [userdat,setuserdat]=useState("")
  
  const userd =async()=>{
    try{
    // const userdtrlt=await axios.get(`http://localhost/apis/user_fetch_apii.php?id=${user_id}`)
    const userdtrlt=await axios.postForm(`${API_FETCH_USER_PROFILE_URL}`,data)
    setuserdat(userdtrlt.data.response);
   //  console.log(userdtrlt.data.response)
    } catch(error){
      console.error(error);
    }
  }
  
  useEffect(()=>{
    userd();
  },[user_id])
    
  return (
    <>
      <section className='section student_profileinner_section'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='user_profile_img_info_we d-flex  justify-content-between align-items-center'>
                <div className='user_profile_img_info'>
                   <div className='profile_tumbnail_avta size-lg'>
                        <img src={userdat.image} className='img-fluid '></img>
                        
                   </div>
                   <div className='jigsaww-content mt-2'>
                    <h5 className='title text-white text-sm-start'>{userdat.name}</h5>
                    <div className=' mb-2'>
                     
                      <p className='m-0 '> {userdat.state}</p>
                     
                    <p className='m-0 '>5+ Course Enroll 4 Certificate</p>
                  
                    </div>
                   </div>
                </div>

                <div className='rbt-tutor-information-right'>
                    <div className='Join_coursepp'>
                    <div className="subscription_btn ms-auto ">
                        {/* <button className="btn btn-primary Subscription_btn" type="button">Create a New Course</button> */}
                        <Link to="../OurCourses" className='btn btn-primary Subscription_btn'>Enroll New Course</Link>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
    </section>
    </>
  )
}
