import React, { useEffect, useState } from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_FETCH_USER_PROFILE_URL} from '../../../Services/api';



export default function Studentprofile() {

  const user_id = localStorage.getItem('user_id');


  const data={
    id:user_id
  }
 // alert(user_id);
const [userdat,setuserdat]=useState("")

const userd =async()=>{
  // const userdtrlt=await axios.get(`http://localhost/apis/user_fetch_apii.php?id=${user_id}`)
  const userdtrlt=await axios.postForm(`${API_FETCH_USER_PROFILE_URL}`,data)
  setuserdat(userdtrlt.data.response);
  //console.log(userdtrlt.data.response)
}

useEffect(()=>{
  userd();
},[user_id])

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
            <div className='section-title d-flex justify-content-between' style={{borderBottom:'2px solid #e6e3f14f'}}>
            <h6 className='jig-title-style' style={{border:'none',marginBottom:'8px!important'}}>User Profile</h6>

            <div className='edit_btn'>
                <Link to="/Studentprofileedit" type="button" className="btn btn-sm" style={{backgroundColor:'#225f9d',color:'#fff'}}>Edit Profile</Link>
                </div>
             </div>
           
             
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='desh_st_pro'>
            <table className="table ">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th colSpan="2">Order ID</th>
            </tr>
            </thead>
            <tbody>

            <tr>
            <td>Registration Date</td>
            <td>{userdat.added_on}</td>
            </tr>

            <tr>
            <td> Name</td>
            <td>{userdat.name}</td>
            </tr>

            <tr>
            <td>Email</td>
            <td>{userdat.email}</td>
            </tr>

            <tr>
            <td>Phone Number</td>
            <td>{userdat.mobile}</td>
            </tr>

            <tr>
            <td>Gender</td>
            <td>{userdat.gender}</td>
            </tr>

            <tr>
            <td>State</td>
            <td>{userdat.state}</td>
            </tr>

           
            <tr>
            <td>Father Name</td>
            <td>{userdat.fatherName}</td>
            </tr>

            <tr>
            <td>School  Name</td>
            <td>9th.....</td>
            </tr>

            <tr>
            <td>Class</td>
            <td>9th.....</td>
            </tr>

            <tr>
            <td>Address</td>
            <td>Mahindra Park</td>
            </tr>

            

            {/* <tr>
            <td>Biography</td>
            <td>I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</td>
            </tr> */}

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
