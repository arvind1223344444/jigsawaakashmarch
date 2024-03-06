import React, { useEffect, useState } from 'react'
import {API_ASSIGNMENT_QUESTION_URL,API_ASSIGNMENT_QUESTION_ANS_URL,API_NEXT_QUESTION_ANS_URL} from '../../Services/api'
import axios from 'axios';
import Waitingclass from './Waitingclass';
export default function Stuedentclassworks({classworkdata}) {
  

  const { user_id ,assignmentidd} = classworkdata;
  //alert(assignmentidd)

    const [stdquestion,Setstdquestion]=useState([]);
    const [quesIds,setQuesIds]=useState("");

    useEffect(() => {
        const questiondata = async () => {
          let assignmentIdFromStorage = localStorage.getItem('assignmentId');
          
      
          if (!assignmentIdFromStorage && assignmentidd) {
            try {
              assignmentIdFromStorage = assignmentidd;
              localStorage.setItem('assignmentId', assignmentidd);
            } catch (error) {
              console.error(error);
            }
          }
      
          if (assignmentIdFromStorage) {
            try {
              const assignmentquest = await axios.get(`${API_ASSIGNMENT_QUESTION_URL}/${assignmentIdFromStorage}/${user_id}`);
              Setstdquestion(assignmentquest.data.response);
             // console.log(stdquestion);
            
             const quesid=stdquestion.map((stdQuestion) => stdQuestion._id);
             setQuesIds(quesid);
        
            } catch (error) {
              console.error(error);
            }
          }
        };
      
        questiondata(); // Call the async function
      }, [assignmentidd]);






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
        //  console.log(postData)
        // Send the postData to the server using an API request (assuming axios)
            const response = await axios.postForm(`${API_ASSIGNMENT_QUESTION_ANS_URL}/`,postData);
            console.log(response.data.response);

            if(response.data.response){
            //  console.log(quesIds);
           
           const getidstate= await axios.get(`${API_NEXT_QUESTION_ANS_URL}/${assignmentidd}/${questionIds[1]}`);
              //console.log(getidstate.data.reponse);
              if(getidstate.data.reponse){
                document.getElementById(getidstate.data.reponse).focus();
              }
            }

          } catch (error) {
            console.error("API Request Error:", error);
          }
        };
        

  return (
    
    <>
    
<div className="card shadow mb-4" style={{height:"350px",overflow:"auto"}}>
<div className="card-header" style={{position: "sticky",top:"0",backgroundColor:"#ededee"}}>
<h6 className="m-0 p-0 font-weight-bold ">Notebook</h6>
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
    <button type="submit" style={{ visibility: "hidden", border: "none !important" }}>Submit</button>

    </form>
</div>

  </div>
</div>

    
    
    </>
  )
}

