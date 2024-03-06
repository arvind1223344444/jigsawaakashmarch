import React from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';

export default function Studentnotice() {

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
                <h6 className='jig-title-style'>Notice Board</h6>
            </div>
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='desh_st_not'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">Notice Board</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>

            <tr>
            <td>Registration on the Academic Bank of Credits Portal.</td>
            <td>27 march 2023</td>
            <td><span className="badge bg-danger">New Update</span></td>
            </tr>

            <tr>
            <td>Examination Form May / June 2023</td>
            <td>27 march 2023</td>
            <td><span className="badge bg-warning ">1 day</span></td>
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
