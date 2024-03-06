import { useEffect, useState } from 'react';
import '../Othercourses/othercourse.css';
import axios from "axios";
import {API_FETCH_RELATED_COURSES_URL,api_path} from '../../Services/api';
import { Link} from 'react-router-dom';

function Othercourse(){
    
    
  

    const [rltCourse,setrltCourse]=useState([]);
    const image_pth=api_path;


    const relatedCourse=async()=>{
        const relatedCourseqry=await axios.get(`${API_FETCH_RELATED_COURSES_URL}`);
      //  console.log(relatedCourseqry.data.response);
        setrltCourse(relatedCourseqry.data.response);
    //  console.log(rltCourse);
    }
    useEffect(()=>{
        relatedCourse();
    },[])

    return <>
     <section className='section section2 courese_home'>
    <div className='container'>
        <div className='title'>
           <h4> Vedic Maths, English  and  more other Courses </h4> 
        </div>

        <div className='row'>
            



            {rltCourse.map((courseItem,index)=>{
              return(
           
            <div className='col-sm-12 col-md-6 col-lg-3 mb-2'key={index}>
            <Link to={`../Coursesplaylists/${courseItem._id}`} className="text-dark">
            <div className='popular_co'>
            <img src={image_pth + courseItem.courseImage} className='img-fluid'/>
            </div>
            </Link>
            <div className='course_cont'>
            <h5> <span style={{color:'#225F9D'}}> {courseItem.courseName} </span> </h5>
                {/* { courseItem.payment.map((fee,innerIndex)=>{

                const courseFees=fee.fee;
                const courseDiscount=fee.discount;
                const totalFessc=(courseFees / courseDiscount).toFixed(2);
                return(
                <>
                <p className="mb-0 mt-2" key={innerIndex}>
                Price : <span className="text-decoration-line-through text-danger"> {courseFees} Rs </span> 
                &nbsp; {totalFessc} Rs.
                </p>
                </>
                )
                }) 
                } */}

                {courseItem.teacher.map((teacherdet,innerIndex)=>{
                return(
                <Link to={`../Educatorsdetails/${teacherdet._id}`} className="text-dark" key={innerIndex} >
                <p className="text-muted"> By  {teacherdet.name}  </p>
                </Link>
                )
                })}
               
            </div>
            </div>

)
})}
        </div>
        
        
    </div>
    </section>

 
   
   
    </>
}
export default Othercourse;