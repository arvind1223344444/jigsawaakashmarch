 import React, { useEffect, useState } from 'react';
import quiz_announce from '../../../Images/quiz_announce.png';
import QuizSidebar from '../QuizSidebar/QuizSidebar';
import {API_MCQ_COURSES_URL} from '../../../Services/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

 
 const CoursesQuiz = ()=>{


    const user_id = localStorage.getItem('user_id');
    //alert(user_id);

    const [mcqcours,setmcqcours]=useState([]);

    const mcqcoursfun = async () => {
        try {
          const mcqcoursdata = await axios.get(`${API_MCQ_COURSES_URL}/${user_id}`);
          console.log(mcqcoursdata.data.response);
          setmcqcours(mcqcoursdata.data.response);
          console.log(mcqcours);
        } catch (error) {
          console.error(error);
        }
      };
      
    useEffect(()=>{
        mcqcoursfun();
    },[])

    return(
        <>
  
    <section className='section2 jigsaw_qui'>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                    <QuizSidebar/>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='jigsaw_qui_heading shadow-sm p-3 mb-5 bg-body rounded'>
                        <h4 className="fw-bold">Jigsaw Quiz</h4>
                   </div>
                   </div> 
                     
                      <div className='row shadow-sm px-3 pb-2 mb-5 bg-body rounded'>
                      <div className='col-sm-12 col-lg-7 order-lg-1 order-sm-2 '>
                        <section className='jigsaw_qui_section'>
                            <div className='jigsaw_qui_section_title'>
                                <h4 style={{fontWeight:"600"}}>Get unlimited practice with jigsaw subscription</h4>
                                <p className='mb-0'>Boost your performance with adaptive practice tests</p>
                                <p className='mb-0'>Practice every concept in the syllabus</p>
                                <p className='mb-0'>Compare your speed and accuracy with your peers</p>
                            </div>
                        </section>
                      </div>

                      <div className='col-sm-12 col-lg-5 order-lg-2 order-sm-1'>
                        <div className='quiz_anc_image'>
                        <img src={quiz_announce} className="img-fluid"></img>
                        </div>
                      </div>
                      </div>
                    </div>

                <div className='row'>
                <div className='quiz_courses_jig_title mb-3'>
                <h4 style={{fontWeight: "600"}}>Jigsaw Courses Quiz</h4>
                </div>
           
                {mcqcours?.map((courseMCQ, index) => (
                <div className={`col-6 col-lg-4 my-2 ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                <Link to={`../Coursesselectquiz/${courseMCQ.course_id._id}`} className='text-dark'>
                <div className="card text-center quiz_courses_box h-100">
                <div className="card-body quiz_courses_nam mcqquizCard">
                <h5 className="card-title"> {courseMCQ.course_id.courseName} </h5>
                {/* <p className="card-text">{courseMCQ.course.courseName}.</p> */}
                </div>
                </div>
                </Link>
                </div>
                ))}
                </div>

               
                </div>

            </div>
        </div>
       </section>

        </>
    )
 }
 export default CoursesQuiz;

