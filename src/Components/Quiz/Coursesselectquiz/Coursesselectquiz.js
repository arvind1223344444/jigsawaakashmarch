import React, { useEffect, useState } from 'react';
import QuizSidebar from '../QuizSidebar/QuizSidebar';
import {API_MCQ_COURSES_LEVEL_URL} from '../../../Services/api';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



 const Coursesselectquiz = ()=>{

  const {id} =useParams();
  //alert(id)


    const [mcqcoursLevel,setmcqcoursLevel]=useState([]);

    const mcqcoursLevelfun=async()=>{
    const mcqcoursdata=await axios.get(`${API_MCQ_COURSES_LEVEL_URL}/${id}`);
      console.log(mcqcoursdata.data.response);
     setmcqcoursLevel(mcqcoursdata.data.response);
    }

    useEffect(()=>{
      mcqcoursLevelfun();
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
                   
                    </div>

                <div className='row'>
                <div className='quiz_courses_jig_title mb-3'>
              
                </div>
                {mcqcoursLevel.map((mcqcoursLevelitem, index) => {
                 
                  return(
                <div className={`col-6 col-lg-4 my-2 ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                <Link to={`../QuizExam/${mcqcoursLevelitem._id}`}  className='text-dark'>
                
      
                <div className="card text-center quiz_courses_box h-100">
                <div className="card-body quiz_courses_nam mcqquizCard">
                <h5 className="card-title">{mcqcoursLevelitem.title}</h5>
                <p className="card-text">{mcqcoursLevelitem.course.courseName}.</p>
                <p className="card-text">{mcqcoursLevelitem.level.levelName}.</p>


                {/* <button type='button' className='btn fw-bold btn-danger btn-sm'>Exam Start</button> */}
                </div>
                </div>
                </Link>
                </div>
                )})}
                </div>

               
                </div>

            </div>
        </div>
       </section>
        </>
    )
 }
 export default Coursesselectquiz;

