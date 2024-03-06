import React from 'react'
import '../Layout/Sidebar.css';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>

    
    
    <div className='col-md-3'>
    <div className='jg-default-sidebar sticky-top'>
    <div className='inner'>
        <div className='content-item-content'>
            <div className='rbt-default-sidebar-wrapper'>
                <div className='section-title mb--20'>
                <h6 className="jg_profile_title">Dashboard</h6>
                </div>
            </div>
           
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                <Link to="/Studentprofile" className="align-items-center rounded ">
                   Profile Details
                  </Link>
                </li>
                <li className="mb-1">
                <Link  to="/Enrollcourses"  className="  align-items-center rounded ">
                  Enrolled Courses
                  </Link>
                </li>

                <li className="mb-1">
                <Link  to="/Studentclassassignment"  className="  align-items-center rounded ">
                  Class Work Assignment
                </Link>
                </li>

                <li className="mb-1">
                <Link  to="/Studetentclsoral"  className="  align-items-center rounded ">
                 Class Work Oral
                </Link>
                </li>

                <li className="mb-1">
                <Link  to="/Studentassignment"  className="  align-items-center rounded ">
                  Student Homework
                </Link>
                </li>

                <li className="mb-1">
                <Link  to="/Studetentoral"  className="  align-items-center rounded ">
                Student Homework Oral
                </Link>
                </li>

               

                <li className="mb-1">
                <Link  to="/Studentorder"  className="  align-items-center rounded ">
                Order History
                </Link>
                </li>

                
               

                {/* <li className="mb-1">
                <Link  to="/Studentnotice"  className="  align-items-center rounded ">
                Notification
                </Link>
                </li>
                
                <li className="mb-1">
                <Link  to="/Studentorder"  className="  align-items-center rounded ">
                Order History
                </Link>
                </li>
               
               
                <li className="mb-1">
                <Link to="/Quizattempts" className="  align-items-center rounded ">
                My Quiz Attempts
                </Link>
                </li>
               
                <li className="mb-1">
                <Link to="/Feesupdate" className="  align-items-center rounded ">
                Fee Update
                </Link>
                </li>

                <li className="mb-1">
                <a className="  align-items-center rounded ">
                Results & Certificates 
                </a>
                </li>


                <li className="mb-1">
                <Link to="/Attendancereport" className="align-items-center rounded ">
                Attendance Report
                </Link>
                </li>

                <li className="mb-1">
                <a className="  align-items-center rounded ">
                 Benefits Club: Structure & Awards
                </a>
                </li>

              <li className="mb-1">
              <a className="align-items-center rounded ">
              Study Material
              </a>
              </li> */}

                </ul>

     </div>
    </div>
    </div>
     </div>
    </>
  )
}

export default Sidebar