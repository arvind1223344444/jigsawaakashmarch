import React, { useEffect, useState } from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';
import {API_STUDENT_HOMEWORK_URL} from '../../../Services/api';
import {API_STUDENT_WORKDETIALS_URL} from '../../../Services/api';
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import pdf from '../../../Images/pdf.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Studentassignment() {

  const user_id=localStorage.getItem("user_id")
  
  const [studenthomeWk,SetstudenthomeWk]=useState([]);

  const studenthomeWkqry =async()=>{
    try{
    const studenthomeWkqryqryresp= await axios.get(`${API_STUDENT_HOMEWORK_URL}/${user_id}`);
    //console.log(studenthomeWkqryqryresp.data.response);
    SetstudenthomeWk(studenthomeWkqryqryresp.data.response);
   // console.log(studenthomeWk);
  } catch (error){
    console.log(error);
  }
  }

  useEffect(()=>{
    studenthomeWkqry();
  },[])

   


  const [studnetassinView,setstudnetassinView]=useState([]);

          const assignmnetView=async(assid)=>{
           
                try {
                  const response = await axios.get(`${API_STUDENT_WORKDETIALS_URL}/${assid}`);
                  //console.log(response.data.response);
                  setstudnetassinView(response.data.response);
                 // console.log(studnetassinView);
                  // Further logic with the fetched data, if needed
                } catch (error) {
                  console.error("Error fetching data:", error);
                  // Handle errors appropriately
                }
          }


  return (
    <>
    
    <Profileinner/>
    
    <section className='section jgstudent_profi_sidbar'>
    <div className='container'>
    <div className='row'>
    
     <Sidebar/>
  
       {/* assignment view modal start*/}
        <div className="modal fade" id="assinmnetViewmoal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="assinmnetViewmoal1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="assinmnetViewmoal1">{studnetassinView.name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <div className='row'>
        <div className='col-md-12'>
        <div className='userclspaper'>

        <table className="table table-sm  table-responsive-sm border border-dark ">
        <thead className='bg-secondary text-light'>
        <tr>
        <th scope="col">No.</th>
        <th scope="col">Question</th>
        <th scope="col">Response</th>
        <th scope="col">Handle</th>
        <th scope="col"> Marks</th>

        </tr>
        </thead>
        <tbody>
        {studnetassinView?.get_question?.map((question, index) =>{
        var rightCkeck = false;
        var studetnquestion="";


        return(

        <tr key={index}>

        <th scope="row">{index+1}</th>
        <td>{question?.question}</td>
        <td> 
        {question?.get_answer.map((answer, answerIndex) => {
        rightCkeck=question?.answer===answer?.answer;

        studetnquestion =answer.marks;


        return(
        <td key={answerIndex}>{answer?.answer}</td>
        )})}
        </td>

        <td>
        {rightCkeck? 
        <button type='button' className="btn btn-success  btn-circle btn-sm"> 
        <FaCheck />
        </button>
        :
        <button type='button' className="btn btn-danger  btn-circle btn-sm"> 
        <FaTimes />
        </button>
        }

        </td>
        <td>{studetnquestion}</td>
        </tr>

        )})}


        </tbody>
        </table>

        </div>

        </div>

        </div>
        </div>

        </div>
        </div>
        </div>

        {/* assignment view modal close*/}



       <div className='col-md-9'>
        <div className='jigs-dashboard-content' style={{padding:'14px'}}>
        <div className='content'>
            <div className='section-title'>
                <h6 className='jig-title-style'>  Student Homework  </h6>
            </div>
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='stud_oder_his'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">S.No </th>
            <th scope="col"> Assignment </th>
            <th scope="col">Chapter </th>
            <th scope="col">Assign Date</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
            </tr>
            </thead>
            <tbody>
              {studenthomeWk?.map((studentass,index)=>{
                return(
                  <>
             
              {studentass.assignment_id.map((assign,assignIndex)=>{
              const assignDate = new Date(assign.added_on);
              const formattedDate = `${assignDate.getFullYear()}-${String(assignDate.getMonth() + 1).padStart(2, '0')}-${String(assignDate.getDate()).padStart(2, '0')}`;

              return(
                  <tr key={index}> 
                  
                  <td>
                  {assignIndex+1}
                  </td>
                
                  <td>
                 <span key={assignIndex}>
                   {/* <Link to={`../Homework/${assign._id}`}>
                  {assign.name} 
                   </Link> */}

              <Link to={`../Homework/${assign._id}?assignment=${assign.name}`}>
              {assign.name} 
              </Link>
               </span>
               </td>
            
              <td>
                <span key={assignIndex}>
                {assign.chapter_id.chapter_name}
                </span>
              </td>
         
               <td>
               <span key={index}> {formattedDate} </span>
              </td>

          <td>
          
              {assign.get_assignment_status.length === 0 ? (
              <span className="rbt-badge-5" style={{ backgroundColor: '#2f57ef21', color: '#2f57ef', padding: '5px 7px', fontSize: '14px' }}>Not Completed</span>
              ) : (
              assign.get_assignment_status.map((assstatus, index) => {
              const completeStatus = assstatus.status;
              return (
              <React.Fragment key={index}>
              {completeStatus ? (
              <span className="rbt-badge-5" style={{ backgroundColor: '#F6F6F6', color: '#3EB75E', padding: '5px 7px', fontSize: '14px' }}>Success</span>
              ) : (
              <span className="rbt-badge-5" style={{ backgroundColor: '#2f57ef21', color: '#2f57ef', padding: '5px 7px', fontSize: '14px' }}>Not Completed</span>
              )}
              {/* Add other spans as needed */}
              </React.Fragment>
              );
              })
              )}



                 </td>
                 <td>
                  <button type='button' className='btn btn-primary' onClick={()=>assignmnetView(assign._id)}  data-bs-toggle="modal" data-bs-target="#assinmnetViewmoal">View </button>
                 </td>
                   </tr>
              )
            })}
                  </>
                )
              })}

    
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
