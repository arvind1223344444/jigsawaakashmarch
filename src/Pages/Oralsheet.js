import React, { useRef } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import {API_ASSIGNMENT_QUESTION_ANS_URL,API_ASSIGNMENT_QUESTION_URL,API_STUDENT_HOMEWORK_LIVECLASS_STATUS_URL,API_NEXT_QUESTION_ANS_URL} from '../Services/api';
import { useState,useEffect } from 'react';

export default function Oralsheet() {
    
  const { id } = useParams();
  const assignmentName = new URLSearchParams(window.location.search).get('assignment');

    // alert(id);
    const user_id=localStorage.getItem('user_id');
     const [stdquestion,Setstdquestion]=useState([]);
    
    useEffect(() => {
        const questiondata = async () => {
   
          if (id) {
            try {
              const assignmentquest = await axios.get(`${API_ASSIGNMENT_QUESTION_URL}/${id}/${user_id}`);
              Setstdquestion(assignmentquest.data.response);
             //console.log(stdquestion);
             
            } catch (error) {
              console.error(error);
            }
          }
        };
      
        questiondata(); // Call the async function
      }, [id]);


   // Initialize an index variable to keep track of the current position in the array
let currentIndex = 0;

const questionByChunk = chunkArray(stdquestion, 5);

function chunkArray(array, chunkSize) {
  const chunkedData = [];
  for (let i = currentIndex; i < array.length; i += chunkSize) {
    chunkedData.push(array.slice(i, i + chunkSize));
  }
  currentIndex += chunkSize; // Update the currentIndex for the next chunk
  return chunkedData;
}


        const [formData, setFormData] = useState({});
        const[inputvl,setinputvl]=useState({});

        const handleChange = (questionId, value) => {
          setFormData((prevData) => ({
           prevData,
            [questionId]: value,
          }));
          setinputvl((prevData) => ({
           ...prevData,
             [questionId]: value,
           }));

        };

       
        const submitStatus = async () => {
            try {
              const response = await axios.get(`${API_STUDENT_HOMEWORK_LIVECLASS_STATUS_URL}/${id}/${user_id}`);
            //  console.log(response.data.response);
            } catch (error) {
              console.error("API Request Error:", error);
            }
          };

        const handleFormSubmit = async (e) => {
          e.preventDefault(); // Prevent the default form submission
      
          const questionIds = Object.keys(formData);
          const answers = Object.values(formData);

          try {
          const postData = {
          student_id: user_id,
          question_id: questionIds[1],
          answer: answers[1],
          };
         console.log(postData)
        // Send the postData to the server using an API request (assuming axios)
            const response = await axios.postForm(`${API_ASSIGNMENT_QUESTION_ANS_URL}/`,postData);
           // console.log(response.data.response);
            submitStatus();
            if(response.data.response){
            //  alert(`${API_NEXT_QUESTION_ANS_URL}/${id}/${questionIds[1]}`);
              const getidstate= await axios.get(`${API_NEXT_QUESTION_ANS_URL}/${id}/${questionIds[1]}`)
          //   console.log(getidstate.data.reponse);
             if(getidstate.data.reponse){
              document.getElementById(getidstate.data.reponse).focus();

              const questionText = getidstate.data.reponse; // Replace with the actual property name
              speakText(questionText);
              
             }

            }
          } catch (error) {
            console.error("API Request Error:", error);
          }
        };
        
        const speakText=(questionidds)=>{
          if(questionidds){
            let matchingItem  =stdquestion.find(item=>item.id==questionidds);
          let questionnumber=matchingItem.question;
         // let question = matchingItem ? matchingItem.question : '';
             
             function speakText(text) {
             const utterance = new SpeechSynthesisUtterance(text);
             window.speechSynthesis.speak(utterance);
           }
           speakText(questionnumber);
          }else{
            let questionnumberdirect=stdquestion[0]._id;
            let matchingItem  =stdquestion.find(item=>item.id==questionnumberdirect);
            let questionnumber=matchingItem.question;
            function speakText(text) {
              const utterance = new SpeechSynthesisUtterance(text);
              window.speechSynthesis.speak(utterance);
            }
            speakText(questionnumber);
          }
          
        }

     
        // coundown timer start

        const [timer, setTimer] = useState(0);
        const [isTimerRunning, setIsTimerRunning] = useState(false);
        const [isButtonDisabled, setIsButtonDisabled] = useState(false);
        const [isInputEnabled, setIsInputEnabled] = useState(false);
        const inputRef = useRef(null);
      
        useEffect(() => {
          let intervalId;
      
          if (isTimerRunning && timer > 0) {
            intervalId = setInterval(() => {
              setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
      
            setIsInputEnabled(true);
          }
      
          return () => clearInterval(intervalId);
        }, [isTimerRunning, timer]);
      
        const handleStartTimerClick = () => {
          // Set the timer to 1 hour (3600 seconds)
          setTimer(3600);
          setIsTimerRunning(true);
          setIsButtonDisabled(true);
          speakText();
        };
      
        const formatTime = (seconds) => {
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const remainingSeconds = seconds % 60;
      
          return `${hours}h ${minutes}m ${remainingSeconds}s`;
        };
        // coundwontoimer close

  
  return (
    <>
 <Wrapper className='section section2'>
        <div className='container'>
            <div className='row'>   
<div className="card shadow mb-4">
<div className="card-header w-100" style={{position: "sticky",top:"0",backgroundColor:"#ededee"}}>
<h6 className="m-0 p-0 font-weight-bold text-left d-inline">{assignmentName}</h6> 
<h6 className="m-0 p-0 font-weight-bold  d-inline d-flex align-items-center" style={{float:"right"}}> 
<p className='me-3'>Time left: {formatTime(timer)}</p>
      <button onClick={handleStartTimerClick} className='btn btn-sm bg-success text-white' disabled={isButtonDisabled}>Start Timer</button>
</h6> 
</div>


<div className="card-body" >

 <div className='iaformborder stickbg_color'>
 <form onSubmit={handleFormSubmit}>
    <div className='row'>
   <div className='col-md-12'>
    <p>Set one lower slider
as +1 in all the columns by using right hand thumb, Add 1 again in all.  </p>

{questionByChunk.map((ques, index) => {
var allOneQuestion = [];
var Sno = 0;
//2nd inner map
ques.map((q) => {
var question1 = q.question.split(', ');
allOneQuestion.push(question1);
//  console.log("aaaaaaaa"+allOneQuestion);
// console.log('sssssssssss'+ allOneQuestion[0])
});
//2nd end inner map

return(
<>
<div key={index}>
<table className="iaformtable1">
<tbody>
<tr>
<td>NO</td>

{ques.map((one,innerIndex)=>(
<td>{index * 5 + innerIndex + 1}</td>
))}


</tr>
</tbody>
</table>


<table className="iaformtable2">
<tbody>

{allOneQuestion[Sno].map((item, i) => {

Sno++;

return(
<tr>
<td>{i+1}</td>
{allOneQuestion.map((one_)=>(
<td>{one_[i]}</td>
))}

</tr>
)})}
</tbody>

</table>
</div>


<table className="iaformtable3" style={{marginRight:"0px"}}>

<tbody>
<tr>


<td>
        <b>ANS.</b>
    </td>
     

    {ques.map((questap) =>{
     // console.log(questap.get_answer[0]);
      return (
    <td key={questap._id}>
     
    <input
    type="text"
    name={questap._id}
    id={questap._id}
    className="canswer textboxblur"
    value={inputvl[questap._id] || questap.get_answer[0]?.answer}
    onChange={(e) => handleChange(questap._id, e.target.value)}
    ref={inputRef}
    disabled={!isInputEnabled}

    // value={inputvl[questap._id] || questap.get_answer[0]?.answer}
    // onChange={(e) => handleChange(questap._id, e.target.value)}
   
    />
    </td>
    )})}


    </tr>
  </tbody>
  </table>
  </>
)})}
   </div>
   
    </div>
    <button type="submit" className="btn btn-primary  search_btn " style={{width: "200px"}}>Submit</button>
    <button type="submit" style={{ visibility: "hidden", border: "none !important" }}>Submit</button>
    
   
    </form>
</div>

  </div>
</div>

    


</div>
        </div>
    </Wrapper>


    
    </>
  )
}


const Wrapper=styled.section`
position:relative;
width:100%;
height:auto;


.iaformtable1 {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    border: 1px solid #d0d2d4;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
     
    tr{
        background-color: #aae1fa;
  font-weight: bold;
    }
    td{
        text-align: center;
  width: 50px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: #aae1fa;
  font-weight: bold;
    }
  }

  .iaformtable2 {
    width: 100%;
    margin-top: 7px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;

    tr{
        background-color: #ededee;
    }
     td {
        text-align: center;
        padding-top: 7px;
        padding-bottom: 7px;
        width: 50px;
        border: 2px solid #fff !important;
      }
  }

  
    .iaformtable3 {
        width: 100%;
        margin-top: 7px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        height: 50px;

       tr td{
            text-align: center;
      width: 50px;
      padding: 0px;
      
      .canswer.textboxblur {
        width: 55px;
        height: 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        border: 1px solid #cccccc;
      }
         }
          
      }
    
  

.fw-small {
  font-weight: 600;

}

.studentsteamingtask{
    position:relative;
    width:100%;
    height:auto;
    overflow:hidden;
    background:#e8e8e8;
    padding:10px 10px;
    border-radius:5px;
}
.iaformtable2 {
    width: 100%;
    margin-top: 7px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
  }
.studentestemingoral{
    position:relative;
    background-color:#fff;
    padding: 5px;
p{
    font-weight:600;
}
}

`