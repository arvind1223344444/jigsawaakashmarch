import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../JIgsawcourses/course.css';
import axios from "axios";
import {API_FETCH_COURSES_URL, api_path} from '../../Services/api';

function Courses(props){
        const [course, setCourse] = useState([]);
        const image_pth=api_path;
        
        const loadcourse=async()=>{
        const result=await axios.get(`${API_FETCH_COURSES_URL}`)
        const edulimit = result.data.response.slice(0,`${props.limit}`)
      
        setCourse(edulimit);
        
        }
        useEffect(() => {
        loadcourse();

        },[]);

    return <>
 
   


    <section className='section section2 courese_home'>
    <div className='container'>
        <div className='title'>
           <h4> Explore our jigsawabacus courses</h4> 
        </div>

        <div className="row">

          
      {course.map((courseData, index) => (
  
  <div className="col-sm-12 col-md-6 col-lg-3 mt-2" key={index} >
    <Link to={`../Coursesplaylists/${courseData._id}`} className="text-dark">
    {/* <Link to={`../CourseDetails/${courseData._id}`} className="text-dark"> */}
    
         <div className="popular_co">
          <img src={image_pth + courseData.courseImage} className="img-fluid" alt="Course" />
        </div>

     
          <div className="course_cont">
          <h5 style={{ color: '#225F9D', textTransform: 'uppercase' }}>{courseData.courseName}</h5>
          {/* { courseData.payment.map((fee,kd)=>{

            const courseFees=fee.fee;
            const courseDiscount=fee.discount;
            const totalFessc=(courseFees / courseDiscount).toFixed(2);
           return(
            <>
          <p className="mb-0 mt-2" key={kd}>
             Price : <span className="text-decoration-line-through text-danger"> {courseFees} Rs </span> 
             &nbsp; {totalFessc} Rs.
          </p>
         </>
          )
          }) 
         } */}

         {courseData.teacher.map((teacherdet,index)=>{
          return(
            <Link to={`../Educatorsdetails/${teacherdet._id}`} className="text-dark">
            <p className="text-muted"key={index}> By  {teacherdet.name}  </p>
            </Link>
          )
         })}
  
        </div>

    
      
      
 

    </Link>
  </div>
))}

    <div className="button2 mt-3">
    <Link to="/OurCourses"> <button type="button"   className="btn button_2">Learn See More </button></Link>
    </div>
</div>

       

    </div>
    </section>
   
    </>
}
export default Courses;