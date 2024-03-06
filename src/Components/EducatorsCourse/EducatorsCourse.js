import React, { useEffect, useState } from "react";
import {API_FETCH_TEACHER_DETAILS_LIST_URL,api_path} from '../../Services/api';
import axios from "axios";
import { Link } from "react-router-dom";
 const EducatorsCourse=(props)=>{
   
  const  tech_id=(props.educatorid);
  const image_pth=api_path;
  const[techcourses,settechcourses]=useState([]);

    const techcoursessss=async()=>{
    const techcoursesda=await axios.get(`${API_FETCH_TEACHER_DETAILS_LIST_URL}/${tech_id}`);
    //console.log(techcoursesda.data.response.assign_course)
    settechcourses(techcoursesda.data.response.assign_course)
    // console.log(techcourses);
    }

  useEffect(()=>{
    techcoursessss();
  },[])


    return <>
    {/* {techcourses.map((techcour,index)=>(
        <h1 key={index}> {techcour._id} </h1>
    ))} */}
     <section className='section section2 courese_home pt-0'>
    <div className='container'>
        <div className='title'>
           <h4> Explore Teacher Moduls   </h4> 
        </div>

                 <div className='row'>
               
                {techcourses.map((techcour,index)=>(

                
                <div className='col-sm-12 col-md-6 col-lg-3 mb-4'  key={index}>
                <Link to={`../CourseDetails/${techcour._id}`} className="text-dark" >
                <div className='popular_co'>
                <img src={image_pth + techcour.thumbnail} className="img-fluid" alt="Course" />
                </div>
                <div className='course_cont'>
                <h5><span style={{color:'#225F9D'}}> {techcour.playlist} </span> </h5>

                { techcour.payments.map((fee,kd)=>{

                const payamount=fee.fee;
                const discountAmount = (fee.discount / 100) * payamount;
                const currectAmount = payamount - discountAmount;

                return(
                <p className="mb-0 mt-2" key={kd}>
                Price :  {currectAmount} Rs  &nbsp; <span className="text-decoration-line-through text-danger"> {payamount} Rs. </span> 
                <span className="text-danger">{fee.discount}% Off</span>
                
                </p>
                )
                }) }

            </div>
            </Link>
            </div>
          

            ))}

           
        </div>
    </div>
    </section>
   
   
    </>
}
export default EducatorsCourse;