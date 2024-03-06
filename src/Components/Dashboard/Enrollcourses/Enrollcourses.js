import React, { useEffect, useState } from 'react'
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';
import '../Enrollcourses/Enrollcourses.css';
import {API_PROFILE_ENROLL_COURSES_URL,api_path} from '../../../Services/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Enrollcourses() {


const user_id = localStorage.getItem('user_id');


   const [EnrollUserCourse,SetEnrollUserCourse]=useState([]);
   const ellcourse=async()=>{
    const ellcoursedata={user_id:user_id}
   
    const  ellcourseqry=await axios.postForm(`${API_PROFILE_ENROLL_COURSES_URL}`, ellcoursedata);
    SetEnrollUserCourse(ellcourseqry.data.response);
  //  console.log(ellcourseqry.data.response);
  // console.log(ellcourseqry.data.response[0].playlist_id.playlist);
   //console.log(EnrollUserCourse);
   }
   
   useEffect(() => {
    ellcourse();
   },[]);


  return (
    <>
    <Profileinner/>
    <section className='section jgstudent_profi_sidbar'>
    <div className='container'>
    <div className='row'>
    
    <Sidebar/>
  

       <div className='col-md-9'>
        <div className='jigs-dashboard-content'>
        <div className='content'>
            <div className='section-title'>
                <h6 className='jig-title-style'>Enrolled Courses </h6>
            </div>
            
            <div className='row'>
      
            {EnrollUserCourse?.map((coursesDe,index)=>(
             
             <div className="col-xxl-3 col-md-4 mb-5" key={index}>
          
          <Link to={`/CourseDetails/${coursesDe?.playlist_id?._id}`}>
            <div className='stude_enroll_co'>
             <img src={api_path + coursesDe.playlist_id.thumbnail} className='img-fluid' />
            </div>
             <div className='stude_en_content'>
             <h5><span style={{color: 'rgb(34, 95, 157)'}}>   {coursesDe.playlist_id.playlist}</span> </h5>
             <p className='text-dark ' style={{textAlign:"justify"}}>{coursesDe.playlist_id.desc.substr(0,84)}... </p>
            
             </div>
             </Link>
 
             </div>
             ))}

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
