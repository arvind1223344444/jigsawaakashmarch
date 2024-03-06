import React from 'react';
import Profileinner from '../Components/Dashboard/Student/Layout/Profileinner';
//import UserDashboard from '../Components/UserDashboard/UserDashboard';
import Sidebar from '../Components/Dashboard/Student/Layout/Sidebar';
import Profile from '../Components/Dashboard/Student/Profile';
import Security from '../Components/Dashboard/Security/Security';
export default function UserProfile() {
  return (
    <>
   
    <Security/>
    <Profileinner/>
    <section className='section jgstudent_profi_sidbar'>
    <div className='container'>
    <div className='row'>
    
    <Sidebar/>
    <Profile/>
     
     </div>
    </div>
    </section>
    </>
  )
}
