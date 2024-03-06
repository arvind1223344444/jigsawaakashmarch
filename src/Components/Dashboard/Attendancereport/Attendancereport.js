import React from 'react'
import Profileinner from '../Student/Layout/Profileinner'
import Sidebar from '../Student/Layout/Sidebar'
import Security from '../Security/Security'
export default function Attendancereport() {
  return (
    <>
    
    <Security/>
    <Profileinner/>
    
    <section className='section jgstudent_profi_sidbar'>
    <div className='container'>
    <div className='row'>
    
    <Sidebar/>    
    <div className='col-md-9'>
        <div className='jigs-attendace-report' style={{padding:'14px'}}>
        <div className='content'>
            <div className='section-title'>
                <h6 className='jig-title-style'> Attendance Report  </h6>
            </div>
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='stud_oder_his'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">Date</th>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Student time</th>
            <th scope="col">Attendance Status</th>
            </tr>
            </thead>
            <tbody>

            <tr>
            <td>03/02/2023</td>
            <td>App Development</td>
            <td>January 27, 2023</td>
            <td>$100.99</td>   
            <td>
                <span className="rbt-badge-5 " style={{backgroundColor:'#F6F6F6', color:'#3EB75E', padding:'5px 7px',fontSize:'14px'}}>Present</span>
              </td>
            </tr>

            
            <tr>
            <td>02/02/2023</td>
            <td>App Development</td>
            <td>January 27, 2023</td>
            <td>$100.99</td>   
            <td>
                  <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Absent</span>
            </td>
            </tr>

           
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
