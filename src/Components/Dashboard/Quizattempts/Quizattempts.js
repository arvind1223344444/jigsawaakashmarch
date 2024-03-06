import React, { useEffect, useState } from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';
import {API_FETCH_MCQ_ALL_RESULT_URL} from '../../../Services/api';
import axios from 'axios';
export default function Quizattempts() {

    const user_id=localStorage.getItem("user_id");
    
    const [quizdataget,setquizdataget]=useState([]);

    const QuizUserAttmepts=async()=>{
        const  QuizUserAttmeptsqry=await axios.get(`${API_FETCH_MCQ_ALL_RESULT_URL}/${user_id}`);
        setquizdataget(QuizUserAttmeptsqry.data.response);
      //  console.log(quizdataget);
    }

    useEffect(()=>{
        QuizUserAttmepts();
    },[]);

  return (
    <>
    
    <Profileinner/>
    <section className='section jgstudent_profi_sidbar'>
    <div className='container'>
    <div className='row'>
    
    <Sidebar/>
   
    
    <div className='col-md-9'>
        <div className='jigs-dashboard-content' style={{padding:'14px'}}>
        <div className='content'>
            <div className='section-title'>
                <h6 className='jig-title-style'>  My Quiz Attempts  </h6>
            </div>

            {/* <div className='row'>
            <div className='col-md-12'>
            <div className='quiz_searchbar_course' style={{marginBottom:'20px'}}>
            <label htmlFor="quiz_cousedata" className="form-label fw-bold">Search Course Quiz</label>
            <input 
            className="form-control"
            list="datalistOptions"
            id="quiz_cousedata" 
            placeholder="Type to search..."/>

            <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
            </datalist>
            </div>
            </div>
            </div> */}
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='stud_oder_his'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">Quiz</th>
            <th scope="col">Question</th>
            <th scope="col">Total Question</th>
            <th scope="col">Corect Ans</th>
            <th scope="col">Result</th>
            </tr>
            </thead>
            <tbody>

            
            {quizdataget?.data_send_playlist?.map((quiz, index) => {
                const TotalQues= (quizdataget?.your_result[quiz._id]?.T_question);
                const TotalCorrect=(quizdataget?.your_result[quiz._id]?.R_answer);
                const userRslt=(TotalCorrect /  TotalQues) * 100;
                //console.log(userRslt);
                
                return(
              <tr key={index}>
              <td>{quiz.title}</td>
              <td>{quiz.course?.courseName}</td>
              <td>{TotalQues}</td>
              <td>{TotalCorrect} </td>
             
              <td>{userRslt >= 70? <span className="rbt-badge-5 " style={{backgroundColor:'#2f57ef21', color:'#2f57ef', padding:'5px 7px',fontSize:'14px'}}>excellent</span> :  <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Poor</span>} 
          </td>
            </tr>
                )
})}
     {/* <span className="rbt-badge-5 " style={{backgroundColor:'#F6F6F6', color:'#3EB75E', padding:'5px 7px',fontSize:'14px'}}>Good</span>
     <span className="rbt-badge-5 " style={{backgroundColor:'#2f57ef21', color:'#2f57ef', padding:'5px 7px',fontSize:'14px'}}>excellent</span>
     <span className="rbt-badge-5 " style={{backgroundColor:'#f6f6f6', color:'#ff8f3c', padding:'5px 7px',fontSize:'14px'}}>Average</span>
     <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Poor</span>
                    */}


          

           
            </tbody>
            </table>
            </div>

            
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
