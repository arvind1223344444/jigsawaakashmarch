import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {API_LIVECLASS_ORA_QUESTIONL_URL,API_LIVECLASS_ORA_QUESTIONL_ANS_SUBMIT_URL} from '../../Services/api';
export default function Liveoral({Classoraldata}) {

  const { user_id ,oralds} = Classoraldata;

  // alert(user_id);

  const [oralqt,setoralqt]=useState([]);


  useEffect(() => {
    fetchData();
  }, [oralds, user_id]); // Include countinc in the dependency array if needed
  

  
  const fetchData = async () => {
    try {
      const oralqtndataqry = await axios.get(`${API_LIVECLASS_ORA_QUESTIONL_URL}/${oralds}/${user_id}`);
      setoralqt(oralqtndataqry.data.response);
      // console.log(oralqt[0].get_answer[0].answer);
    } catch (error) {
      console.error(error);
    }
  };

  



  // const [totquestion , settotquestion]=useState([]);
  // const qustionall=async()=>{
  // const   qustionallfetch= await axios.get(`${oralqst}`);
  //   console.log(qustionallfetch); 
  // }

  // useEffect(()=>{
  //   qustionall();
  // },[]);
  

  const [countinc,setcountinc]=useState(0);
  const quslength = oralqt.length;

  const nextbutton=()=>{
    countinc < quslength - 1 ? setcountinc( countinc + 1 ) : alert("You are at the last question") ; 
  
 
  }

  const prevbutton=()=>{
    countinc < 1? alert("You are in first question") : setcountinc( countinc - 1);
    fetchData();
  }

  //const [oralans, setOralans] = useState("");
  const [editedOralans, setEditedOralans] = useState('');
//  console.log(editedOralans);

useEffect(() => {
   
    if (oralqt[countinc]?.get_answer[0]?.answer) {
      // setEditedOralans(oralqt[countinc]?.get_answer[0]?.answer);
    //  setEditedOralans("");
    const qstans=oralqt[countinc]?.get_answer[0]?.answer;
    let stringWithoutSpaces = qstans.replace(/\s/g, "");
    setEditedOralans(stringWithoutSpaces);
    } else {
      setEditedOralans('');
    }
  }, [oralqt, countinc]);
  

  const oralanssubmit= async(e,qid)=>{
    e.preventDefault();
        
    const data = {
    /*  answer: editedOralans  ? editedOralans : oralans, */
      answer: editedOralans ? editedOralans :" " ,
      question_id: qid,
      student_id: user_id
    };
   
  try{
   const oralanssapi=await axios.postForm(`${ API_LIVECLASS_ORA_QUESTIONL_ANS_SUBMIT_URL}/`,data);
    console.log(oralanssapi.data.response);
    console.log(`${ API_LIVECLASS_ORA_QUESTIONL_ANS_SUBMIT_URL}`);
    console.log(data);
   // const rslt=oralanssapi.data.response;
    
    // setOralans("");
    countinc < quslength - 1 ? setcountinc(countinc + 1) : alert("You are at the last question") ;
    setEditedOralans("");
    nextbutton();
  
  } catch (error) {
    console.error("Error submitting oral answer:", error);
  }
  }

  
  return (
    <>
    
    <div className="card shadow mb-4" style={{height:"350px",overflow:"auto"}}>
<div className="card-header" style={{position: "sticky",top:"0",backgroundColor:"#ededee"}}>
<h6 className="m-0 p-0 font-weight-bold ">Liveoral</h6>
</div>


<div className="card-body p-0" style={{background:"#aae1fa"}}>
<div className='iaformborder stickbg_color'>
<div className='row m-0'>
<div className='d-flex justify-content-between text-white' style={{background:'#1b5898'}}>
      <p className='px-1 p-1 mb-0'>Assignment:- Live Oral</p>
      <p className='px-1 p-1 mb-0'> Total Question : <span className='fw-bold'> {oralqt.length} </span></p>
      </div>
    
     
      <div className='col-md-8 mx-auto  bg-light mt-1'>
      <form onSubmit={(e) => oralanssubmit(e,oralqt[countinc]?._id)}>
     <div className="question_number my-2 mx-auto">

     {oralqt.length > 0 && (
      <>
       <p className='mb-2 text-center fw-bold'> Question No: {/*{oralqt[countinc]?._id}*/}   {countinc + 1}</p>
      
        {oralqt[countinc]?.question && (
          <>

    <div className="orla_questions w-100 justify-content-center">
      <table className="w-100">
        <tbody>
          
        {oralqt[countinc]?.question.split(', ').map((quesvalue, index) => {
         
          return(
          <tr key={index}>
            <td className="text-center">
              <button
                type="button"
                className="btn fw-bold w-75 py-1 mb-1 border-0"
                disabled
                style={{ background: 'rgb(170, 225, 250)' }}
              >
                {quesvalue}
              </button>
            </td>
          </tr>
          )})}

        <tr>
        <td className="text-center d-flex justify-content-center">
        <input type="text" 
        // value={oralans} 
       // value={oralqt[countinc]?.get_answer[0]?.answer} 
      //  value={editedOralans !== "" ? editedOralans : oralqt[countinc]?.get_answer[0]?.answer}
      // value={editedOralans ? editedOralans : oralqt[countinc]?.get_answer[0]?.answer}
    
      value={(() => {
        if (editedOralans) {
          return editedOralans;
        } else {
          // return oralqt[countinc]?.get_answer[0]?.answer;
          return editedOralans;
        }
      })()}
      

    // value={editedOralans} 

        // onChange={(e)=>{setEditedOralans(e.target.value)}}  
        // onChange={(e) => {
        //   const inputValue = e.target.value;
        //   setEditedOralans(inputValue ==""? oralqt[countinc]?.get_answer[0]?.answer : inputValue );
        // }}
        // onChange={(e) => {
        //   const inputValue = e.target.value;
        //   if(inputValue===""){
        //     setEditedOralans(oralqt[countinc]?.get_answer[0]?.answer);
        //   }else{
        //     setEditedOralans(inputValue);
        //   }
          
        // }}
        onChange={(e)=>{setEditedOralans(e.target.value)}}  
        
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            oralanssubmit(e, oralqt[countinc]?._id);
          }
        }}
         className='form-control  mt-1 w-75 text-center'/>
        </td>

        </tr>
       
        </tbody>
      </table>
    </div>
      
          </>
        )}
      </>
    )}
       
     
      </div>
  
        {oralds ?
          <div className='button_inc d-flex justify-content-between my-2'>
          <div>
          <button type="button" className='btn border-0' style={{background:"#e9a59d"}} onClick={prevbutton} disabled={countinc < 1}>Prev</button>
          </div>
          <div>
          <button type="submit" value="submit" className='btn border-0'style={{background:"#e9a59d"}}   disabled={countinc >= quslength - 1}>Next</button>
          </div>
          </div>
        :
        <div class="w-100 h-100 ">
          <h5 className='text-center'> Please select  oral assignment</h5>
        </div>
        }
       
        
   

  
  </form>

    </div>


</div>


</div>
</div>
</div>
    </>
  )
}
