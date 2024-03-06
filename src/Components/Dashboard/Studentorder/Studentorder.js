import React, { useEffect, useState } from 'react'
import Profileinner from '../Student/Layout/Profileinner'
import Sidebar from '../Student/Layout/Sidebar'
import axios from 'axios';
import {API_PROFILE_ORDER_HISTORY_URL,API_STUDENT_COURSE_PAYMENT_DETAILS_URL} from '../../../Services/api';
export default function Studentorder() {


  const user_id = localStorage.getItem('user_id');

  const [userorder,Setuserorder]=useState([]);
  const ellcourse=async()=>{
   const  userorderdataqry=await axios.get(`${API_STUDENT_COURSE_PAYMENT_DETAILS_URL}/${user_id}`);
   Setuserorder(userorderdataqry.data.response);
  console.log(userorderdataqry.data.response);
  console.log(userorder)
  }
  
  useEffect(() => {
   ellcourse();
  },[]);


  // const [userorder,Setuserorder]=useState([]);
  // const ellcourse=async()=>{
  //  const userorderdata={user_id:user_id}
  //  const  userorderdataqry=await axios.postForm(`${API_PROFILE_ORDER_HISTORY_URL}`, userorderdata);
  //  Setuserorder(userorderdataqry.data.response);
  // console.log(userorderdataqry.data.response);
  // console.log(userorder);
  // }
  
  // useEffect(() => {
  //  ellcourse();
  // },[]);


 

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
                <h6 className='jig-title-style'>Order History  </h6>
            </div>
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='stud_oder_his'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">Date</th>
            <th scope="col">Course Amount</th>
            <th scope="col">Apply Coupan</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>

            
         
            {userorder?.map((orderItem,index)=>{
              const dateString = orderItem?.addedOn;
              const date = new Date(dateString);
              const corecetData = date.toDateString();
                return(
            <tr key={index}>
            <td>{orderItem?.transcation_id}</td>
            <td>{orderItem?.playlist_name}</td>
            <td>{corecetData}</td>
            <td>{orderItem?.course_amount} </td>   
            <td>{orderItem?.coupan}</td> 
            <td>{orderItem?.amount}</td> 
            <td>
                <span className="rbt-badge-5 " style={{backgroundColor:'#F6F6F6', color:'#3EB75E', padding:'5px 7px',fontSize:'14px'}}>{orderItem?.payment_status}</span>
              </td>
            </tr>
                )
            }
            )}
           
           
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
