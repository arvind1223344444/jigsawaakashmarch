import React, { useEffect, useState } from 'react'
import Profileinner from '../Student/Layout/Profileinner'
import Sidebar from '../Student/Layout/Sidebar'
import Security from '../Security/Security'
import {API_STUDENT_CLASS_ATTENDANCE_URL} from '../../../Services/api';
import axios from 'axios';
export default function Attendancereport() {

  const userid=localStorage.getItem('user_id');

  const [studentcls,setstudentcls]=useState([]);
 
  useEffect(()=>{
  const useratten =async ()=>{
    try{
    const userattendetails=await axios.get(`${API_STUDENT_CLASS_ATTENDANCE_URL}/${userid}`);
    setstudentcls(userattendetails.data);
    }catch(error){
      console.log(error);
    }
  }

  useratten();
},[]);
 

  // useEffect(() => {
  //   useratten();
  // }, []); 
  
  
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
            <th scope="col">S.No</th>
            <th scope="col">Date</th>
            <th scope="col">Student Name</th>
            <th scope="col">Course Playlist</th>
            <th scope="col">Chapter </th>
            <th scope="col"> In time</th>
            <th scope="col">Hours</th>
            <th scope="col">Attendance Status</th>
            </tr>
            </thead>
            <tbody>
            {studentcls?.map((stditme,index)=>{

           // in time date get
            const classdate = new Date(stditme?.in_time);
            const dateOnly = classdate.toISOString().split('T')[0];


             // class in timer
             const imtimes = stditme?.in_time;
             const imtimesobj = new Date(imtimes);

             const sthours = imtimesobj.getHours();
             const stminutes = imtimesobj.getMinutes();
             const stseconds = imtimesobj.getSeconds();

             const intime = `${sthours}:${stminutes}:${stseconds}`;
          


               // class out timer
               const ottimes = stditme?.out_time;
               const outimesobj = new Date(ottimes);

               const outhours = outimesobj.getHours();
               const outminutes = outimesobj.getMinutes();
               const outseconds = outimesobj.getSeconds();

               const outtime = `${outhours}:${outminutes}:${outseconds}`;

              const intimeParts = intime.split(':').map(part => parseInt(part));
              const outtimeParts = outtime.split(':').map(part => parseInt(part));


             const inTotalSeconds = intimeParts[0] * 3600 + intimeParts[1] * 60 + intimeParts[2];
             const outTotalSeconds = outtimeParts[0] * 3600 + outtimeParts[1] * 60 + outtimeParts[2];


             const timeDurationSeconds = outTotalSeconds - inTotalSeconds;

             const hours = Math.floor(timeDurationSeconds / 3600);
             const remainingSeconds = timeDurationSeconds % 3600;
             const minutes = Math.floor(remainingSeconds / 60);
             const seconds = remainingSeconds % 60;

             const timeDuration = `${hours}:${minutes}:${seconds}`;
             
            return(
            <>
              <tr key={index}> 
              <td> {index+1}</td>
              <td> {dateOnly}</td>
            <td>{stditme?.student_name}</td>
              
            <td>{stditme?.playlist_name}</td>
            <td>{stditme?.chapter_name}</td>
            <td>{intime}</td> 
            <td>{timeDuration}</td> 
            <td>
              {stditme?.status? 
              <span className="rbt-badge-5 " style={{backgroundColor:'#F6F6F6', color:'#3EB75E', padding:'5px 7px',fontSize:'14px'}}>Present</span>
              : 
              <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Absent</span>
              }
            </td>
            </tr>

            </>
           )
           })}
          
            
            {/* <tr>
            <td>02/02/2023</td>
            <td>App Development</td>
            <td>January 27, 2023</td>
            <td>$100.99</td>   
            <td>
                  <span className="rbt-badge-5 " style={{backgroundColor:'#ff000310', color:'#ff0003', padding:'5px 7px',fontSize:'14px'}}> Absent</span>
            </td>
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
