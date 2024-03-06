import React from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';

const Feesupdate=()=>{

    return(
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
                <h6 className='jig-title-style'> Student Fees Details  </h6>
            </div>

            <div className='row'>
            <div className='col-md-12'>
            <div className='quiz_searchbar_course' style={{marginBottom:'20px'}}>
            <label htmlFor="quiz_cousedata" className="form-label fw-bold">Search Month</label>
            <input 
            className="form-control"
            list="datalistOptions"
            id="quiz_cousedata" 
            placeholder="Type to search..."/>

            <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
            </datalist>
            </div>
            </div>
            </div>
            
            <div className='row'>
            <div className="col-xxl-12 col-md-12 mb-3">
            <div className='stud_oder_his'>
            <table className="table">
            <thead style={{backgroundColor:'rgb(171 195 218 / 51%)',fontWeight:'400'}}>
            <tr>
            <th scope="col">S.no</th>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Due Date</th>
            <th scope="col">Fees Amount </th>
            <th scope="col">Pay Mode </th>
            <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>

            <tr>
            <td> 1. </td>
            <td>Aakash</td>
            <td>Vedic Math</td>  
            <td>05/05/2023</td> 
            <td>2000</td> 
            <td>Cash</td> 
            <td>
            <span className="rbt-badge-5 " style={{backgroundColor:'#F6F6F6', color:'#3EB75E', padding:'5px 7px',fontSize:'14px'}}>Done</span>
            </td>
          </tr>

          
            <tr>
            <td> 2. </td>
            <td>Aakash</td>
            <td>Vedic Math</td>  
            <td>05/05/2023</td> 
            <td>2000</td> 
            <td>Cash</td>   
            <td>
                  <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Panding</span>
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

export default  Feesupdate;