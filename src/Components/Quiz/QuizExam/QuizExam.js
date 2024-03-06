import React, { useEffect, useState } from 'react';
import QuizSidebar from '../QuizSidebar/QuizSidebar';
import '../QuizExam/QuizExam.css';
import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs";
import Freeonlinesubscribe from '../../Freeonlinesubscribe/Freeonlinesubscribe';
import { useParams } from 'react-router-dom';
import {API_MCQ_QUESTION_URL} from '../../../Services/api';
import axios from 'axios';
import {API_MCQ_QUESTION_SUBMIT_URL,API_MCQ_PREVIOS_SUBMIT_URL,API_MCQ_SUBMIT_RESULT_URL} from '../../../Services/api';


const QuizExam=()=>{
const {id}=useParams();
//alert(id);

const user_id = localStorage.getItem('user_id');

const [mcqquestions, setmcqquestions] = useState([]);
const [selectedOption, setSelectedOption] = useState('');
const [currentQuestion, setCurrentQuestion] = useState(0);
const [current_ans, set_current_ans] = useState('');
const [disabled, setDisabled] = useState(false);
const [mcqresult,setmcqresult]=useState([]);
const [resulttable,setresulttable]=useState(false);


  const mcqquestion = async () => {
  const mcqquestionqry = await axios.get(`${API_MCQ_QUESTION_URL}/${id}`);
  setmcqquestions(mcqquestionqry.data.response);
  //console.log(mcqquestionqry.data.response);

};

useEffect(() => {
  mcqquestion();
}, [id]);

const submit_otp = async (e, value,levl) => {

  e.preventDefault();

  const ansdata = {answer: selectedOption, student_id: user_id, question_id: value};
  const submitQstdata = await axios.postForm(`${API_MCQ_QUESTION_SUBMIT_URL}`,ansdata);

  if (submitQstdata.data.response) {
    //console.log(submitQstdata.data.response);
    //console.log(ansdata);

    if (currentQuestion === mcqquestions.length-1) {
        alert("MCQ Test Succesfully done so please wait  for result under 1 hour");
        setDisabled(true);


     // after completing the quiz, hit this api
      try {
       const mcqquestionqry = await axios.get(`${API_MCQ_SUBMIT_RESULT_URL}/${user_id}/${id}/${levl}`);
       setmcqresult(mcqquestionqry.data?.response.your_result);
       console.log(mcqquestionqry.data?.response);
    
     
     } catch (error) {
       console.error("Error while fetching quiz result:", error);
       // Handle error, e.g., show an error message to the user
     }
     setresulttable(true);

      return;
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }

    document.getElementById("opriotnktr").reset();
  }
};

const nextQuestionHeightlight = async () => {
  const prvdata = {student_id: user_id, question_id: mcqquestions[currentQuestion]._id,};
  const submitprvdata = await axios.postForm(`${API_MCQ_PREVIOS_SUBMIT_URL}`, prvdata);
  set_current_ans(submitprvdata.data.response.answer);
  console.log(submitprvdata.data.response.answer);
};

useEffect(() => {
  nextQuestionHeightlight();
}, [currentQuestion]);

const handlePrevQuestion = async (id) => {
  if (currentQuestion === 0) {
    setCurrentQuestion(0);
    alert("please");
    return;
  } else {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);

    const prvdata = {student_id: user_id,question_id: id,};
    const submitprvdata = await axios.postForm(`${API_MCQ_PREVIOS_SUBMIT_URL}`, prvdata);
    set_current_ans(submitprvdata.data.response.answer);
    console.log(submitprvdata.data.response.answer);
  }
};

const submitData = (value) => {
  set_current_ans(value);
};

// Additional code logic can be added here


    return(
        <>

         <section className='section2 jigsaw_qui'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <QuizSidebar/>
                </div>

                <div className='col-md-9'>
                <div className='row'>
                   <div className='jigsaw_qui_heading shadow-sm p-3 mb-5 bg-body rounded'>
                        <h3 className="fw-bold">Sequences & Series- Real Nos.</h3>
                    </div>
                </div>
               
                {/* {mcqquestions[0]?.mcq_playlist?.level} */}
                    <form id="opriotnktr" onSubmit={(e)=>{submit_otp(e,mcqquestions[currentQuestion]._id,mcqquestions[0]?.mcq_playlist?.level)}} style={{display: resulttable? "none":"block"}}>
                   {/* {mcqquestions[currentQuestion]._id} */}
                           
                    <div className='row'>
                        <div className='quiz_question_section'>
                        <div className='quiz_question_section_title mb-4'>
                        <h5> Ganit Gyan Quiz </h5>
                       
                        </div>
                        </div>

                        {mcqquestions.length > 0 && (
                        <div className='col-md-12'>
                        {/* {mcqquestions[currentQuestion]._id} */}
                        <div className="card questions_jigs_quiz">
                        <div className="card-header border-0" style={{backgroundColor:"#fff"}}>
                        <p className='mb-1'>Question 1 of {mcqquestions.length}</p>
                        <h6>{currentQuestion+1}  {mcqquestions[currentQuestion].question} ?</h6>
                        
                         </div>

                        <div className="card-body">

                        <div className='row'>
                        <div className='col-md-6'>
                        <div className='questions_list my-2'>
                        <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id={`option1-${currentQuestion}`}
                        value={mcqquestions[currentQuestion].option_a}
                        checked={current_ans === 'a' ? 'checked' : ''}
                        onChange={(e) => setSelectedOption('a')}
                        onClick={()=>{submitData('a')}}
                        />
                        <label className="btn quiz_btn" 
                        htmlFor={`option1-${currentQuestion}`}>a 
                        <span>{mcqquestions[currentQuestion].option_a} </span> 
                         </label>
                        </div>
                        </div>

                        <div className='col-md-6'>
                        <div className='questions_list my-2'>
                        <input type="radio" 
                        className="btn-check" name="options" 
                        id={`option2-${currentQuestion}`} 
                        value={mcqquestions[currentQuestion].option_b} 
                        checked={current_ans === 'b' ? 'checked' : ''}
                        onChange={(e)=>setSelectedOption('b')}
                        onClick={()=>{submitData('b')}}
                        />
                        <label className="btn quiz_btn"
                        htmlFor={`option2-${currentQuestion}`}>b 
                        <span >{mcqquestions[currentQuestion].option_b} </span></label>
                        </div>
                        </div>

                        <div className='col-md-6'>
                        <div className='questions_list my-2'>
                            <input
                            type="radio"
                            className="btn-check"
                            name="options"
                            id={`option3-${currentQuestion}`}
                            value={mcqquestions[currentQuestion].option_c}
                            checked={current_ans === 'c' ? 'checked' : ''}
                            onChange={(e) => setSelectedOption('c')}
                            onClick={()=>{submitData('c')}}
                            />
                            <label className="btn quiz_btn" htmlFor={`option3-${currentQuestion}`}>
                            c
                            <span> {mcqquestions[currentQuestion].option_c} </span>
                            </label>
                        </div>
                        </div>

                          

                        <div className='col-md-6'>
                        <div className='questions_list my-2'>
                        <input type="radio" 
                        className="btn-check" name="options" 
                        id={`option4-${currentQuestion}`} 
                        value={mcqquestions[currentQuestion].option_d} 
                        checked={current_ans === 'd' ? 'checked' : ''}
                        onChange={(e)=>setSelectedOption('d')}
                        onClick={()=>{submitData('d')}}
                        />
                        <label className="btn quiz_btn" htmlFor={`option4-${currentQuestion}`}>d 
                        <span > {mcqquestions[currentQuestion].option_d} </span>
                        </label>
                        </div>
                        </div>

                       

                        <div className='col-md-12 d-flex justify-content-end'>
                        <div className='questions_list my-2 '> 
                        {/* <button type='button' className='btn btn-dark' onClick={()=>{handlePrevQuestion(mcqquestions[currentQuestion-1]._id)}}>Prev <span style={{fontSize:"17px"}}><BsArrowRightShort/></span></button> */}
                        {currentQuestion !== 0 && (
                        <button type='button' className='btn btn-dark mr-2 d-none' disabled={disabled} onClick={()=>{handlePrevQuestion(mcqquestions[currentQuestion-1]._id)}}>
                        Prev <span style={{fontSize:"17px"}}><BsArrowLeftShort/></span>
                        </button>
                        )}

                        <button type='submit' className='btn btn-dark ms-2 d-inline-block' disabled={disabled}>Next <span style={{fontSize:"17px"}}><BsArrowRightShort/></span></button>
                     
                        </div>
                        </div>

                        </div>
                        
                        </div>
                        
                       
                       
                        <div > 
                    
                        
                     
                        </div>

                     </div>

                  </div>

)}
                        </div>         
                        </form>     
                        
                <div className='row' style={{ display: resulttable ? "block" : "none" }}>
                <div className='col-md-12'>
                <table className="table">
                <thead style={{background:"rgba(171, 195, 218, 0.51)"}}>
                <tr>
             
                <th scope="col">Total Question</th>
                <th scope="col">Total Attempt</th>
                <th scope="col">Right Answer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                
                <td>{mcqresult?.T_question}</td>
                <td>{mcqresult?.T_answer}</td>
                <td>{mcqresult?.R_answer}</td>
                </tr>

                </tbody>
                </table>
                </div>
                </div>    
                     </div>

                     
                        
            </div>
       
        </div>
       </section>

       <Freeonlinesubscribe/>

        </>
    )
}
export default QuizExam;