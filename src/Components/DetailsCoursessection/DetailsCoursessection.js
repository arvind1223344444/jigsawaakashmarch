import React, { useEffect, useState } from 'react';
import '../DetailsCoursessection/DetailsCoursessection.css';
import Swal from 'sweetalert2';
import {BsFillFileEarmarkPdfFill} from "react-icons/bs";


import {api_path,API_COURSES_PAYMENT_ORDER_STATUS_URL,API_FETCH_COURSES_PLAYLIST_CHAPTER_LIST_URL} from '../../Services/api';

import axios from 'axios';
import { Link} from 'react-router-dom';
const DetailsCoursessection =(props)=>{

const user_id = localStorage.getItem('user_id');
 const play_id=(props.playlist_id);


const imgePATH=api_path;

const [playchapter , setplaychapter]=useState([]);
const [usesltcourse , setusesltcourse]=useState([]);

const Chapterclass=async()=>{
  const chatperdata=await axios.get(`${API_FETCH_COURSES_PLAYLIST_CHAPTER_LIST_URL}/${play_id}`);
   setplaychapter(chatperdata.data.response);
  setusesltcourse(chatperdata.data.response);
 //console.log(chatperdata.data.response);
}

  useEffect(() => {
    Chapterclass();
   },[play_id]);


   const [userEntroll,setUserEntroll]=useState([]);
   const orderstatus=async()=>{
    const orderstatusData={course_id:play_id,user_id:user_id};
   const orderstatusqry=await axios.postForm(`${API_COURSES_PAYMENT_ORDER_STATUS_URL}`,orderstatusData);
  //  console.log(orderstatusqry.data.response); 
   setUserEntroll(orderstatusqry.data.response);
   // console.log(orderstatusqry.data.response);
  
   }
   
   useEffect(() => {
    orderstatus();
   },[]);


   const showUserLogin= () => {
    Swal.fire({
      icon: 'error',
      title: 'Please User Login',
     })
  }

  const plsEnroll=()=>{
    Swal.fire({
      icon: 'error',
      title: 'Please Enroll Course',
     })

  }

 
   

    return (
        <>

{/* <section className='section course_card_wrapper'>

</section> */}
{/* <button type='buttpn' onClick={orderstatus}>fdfdf</button> */}

          
              <section className='section  teacherpro_card_wrapper'>
              <div className='container'>
              <div className="coursefdd">
              <div className="row">
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-2'>
              <div className='text-center d-flex align-items-center justify-content-center'>
              <div className='teacherp_image me-2'>
              <img src={`${imgePATH}${usesltcourse?.thumbnail}`} className="img-fluid imageddd"style={{width:"100%",height:"200px"}}  />
              </div>
              </div>
              </div>
             

              <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 my-2'>
              <div className='coursefdd_details '>
             
              <h4 className='fw-bold'>{usesltcourse?.playlist}</h4>
              <p className='text-primary SyllabusTag_clr'> By -  {usesltcourse.teacher && usesltcourse.teacher.length > 0 ? usesltcourse.teacher[0].name : ""}</p>
              {playchapter?.payments?.map((coursefees)=>{

              const payamount=coursefees.fee;
              const discountAmount = (coursefees.discount / 100) * payamount;
              const currectAmount = payamount - discountAmount;
              
                  return(
                  <p className="mb-0 fw-bold" key={coursefees._id}>  Price : {currectAmount} Rs. <span className="text-decoration-line-through text-danger"> {coursefees.fee} Rs.  </span> &nbsp; <span className="text-danger"> {coursefees.discount}% Off</span>   </p>
      
              ) }  
              )}
              
              <p style={{textAlign:"justify"}}>{usesltcourse.desc}</p>
             
              {
  userEntroll?.payment_status === "done" ? (
    ''
  ) : (
    (() => {
      if (user_id === null) {
        return (
          <button
            className="btn w-25 btn-sm btn-primary Subscription_btn btn-sm"
            type="button"
            onClick={showUserLogin}
          >
            Enroll Now
          </button>
        );
      } else {
        return (
          <Link
            to={`../Makepayment/${play_id}`}
            className="btn w-25 btn-sm btn-primary Subscription_btn btn-sm"
            type="button"
          >
            Enroll Now
          </Link>
        );
      }
    })()
  )
}


             

              </div>
              </div>

              </div>
              <hr className='divider'></hr>
              </div>
              </div>

              </section>

    <section className='section2 pt-2'>
      <div className='container'>

       <div className='row'>
          <div className='col-md-3'>
            <div className='me-2 mb-2'>
            <h5 className='fw-bold'>About Us</h5>
            <p>Al the learning material you get when you join the betch</p>
            </div>
          </div>

          <div className='col-md-3 offset-md-2'>
           <div className='co_lvid bg-light p-3 mb-2 rounded d-flex align-items-center'>
            <div className='viim me-3'>
              {/* <img src={video} alt={video} className='img-fluid'/> */}
              </div>
            <div className="viim_c">
              <p className='fw-bold m-0'>Total Classes</p>
              <p className='ccount m-0'>{playchapter?.chapters?.length}</p>
            </div>
           </div>
           </div>

          <div className='col-md-3 offset-md-1'>
            <div className='bg-light p-3 mb-2 rounded d-flex d-flex align-items-center'>
            <div className='viim me-3'>
              {/* <img src={voiceMsg} alt={voiceMsg} className='img-fluid'/> */}
              </div>
            <div className='co_ln'>
            <p className='fw-bold m-0'>Language of Course</p>
            <p className="m-0">English, Hindi</p>
            </div>
            </div>
          </div>

        </div>
    
      </div>
    </section>


    <section className='section section2 courese_home'>
    <div className='container'>
        <div className='title'>
           <h4>  {usesltcourse?.playlist}  Classes </h4> 
        </div>

       
      <div className='row'>
      {playchapter?.chapters?.map((chpaters,index)=>{
        // course start date
        const crsstartDate = chpaters.lesstionStartDate;
        const courseStartDate = crsstartDate.split('T')[0];

        // course start time
        const crsstartTime = crsstartDate.split('T')[1].split('.')[0]; 
       

         // course end date
         const crsenddate = chpaters.lessionEndDate;
         const courseEtartDate = crsenddate.split('T')[0];
        
         // course end time
        const crsendTime = crsenddate.split('T')[1].split('.')[0]; 
        
       

        const today = new Date();
        // Extract year, month, and day components
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
        const day = String(today.getDate()).padStart(2, '0');
         const todayDate = `${year}-${month}-${day}`;

          // Current Time
         const options = { timeZone: 'Asia/Kolkata', hour12: false  };
          const currentTime = today.toLocaleTimeString('en-IN', options);
        
      
      
        const coursePlayState=()=>{
         Swal.fire({
            icon: 'error',
            title: `Course Start Date ${courseStartDate}`,
           })
        }

        
       
        return(
        <div className='row my-2' key={index} >
        
      <div className='col-sm-12 col-md-4 col-lg-4 mx-auto text-center align-self-top float-end'>
    {crsendTime}
     <Link 
      to={ user_id===null? null: userEntroll?.payment_status === "done"?  courseStartDate ==  todayDate && currentTime > crsstartTime && currentTime < crsendTime  ?    `../Livetreaming/${chpaters._id}?plid=${play_id}`:null : null   }  className='text-dark'
      onClick={(e) => {
      if (user_id === null) {
        e.preventDefault();
        showUserLogin();
      } else if (userEntroll?.payment_status === "done") {

        if(courseStartDate > todayDate )
        {
          e.preventDefault();
          coursePlayState();
        }
if(todayDate >  courseEtartDate){
alert('class is over');
}


        if (courseStartDate == todayDate  && currentTime < crsstartTime && currentTime < crsendTime) {
          e.preventDefault();
          coursePlayState();
        }
      } else {
        e.preventDefault();
        plsEnroll();
      }
    }}
  >
    

      <div className='image_ur'>
      <img src={`${imgePATH}${chpaters.lessionThumbnail}`} className="img-fluid imageddd"/>
      </div>
      </Link>
      </div>
     
      <div className='col-sm-12 col-md-8 col-lg-8' >
      <div className='course_cont'>
      
      <h5> <span style={{color:'#225F9D'}}> {chpaters.chapter_name}</span></h5>
      <p className="text-muted m-0 text-info">  Mode:- {chpaters.mode} </p>
      <p className="mb-0">Start Date :- {courseStartDate}  </p>
      <p className="mb-0">Start Time :- {crsstartTime}  </p>
      <p style={{textAlign:"justify"}}>{chpaters.chapterDscription}</p>
      
    
      <Link to={`${imgePATH}/${chpaters.notes}`} className='btn btn-sm btn border border-danger bg-light w-25 fw-bold' target="_blank">Notes <BsFillFileEarmarkPdfFill className='text-danger'/></Link> 
      
      </div>
      </div>   
      </div>
    
     ) })}
     </div>
    </div>
    </section>

      
      
        </>
        
        );
} 
export default DetailsCoursessection
