import React, { useEffect, useState } from 'react';
import Profileinner from '../Student/Layout/Profileinner';
import Sidebar from '../Student/Layout/Sidebar';
import axios from 'axios';
import {API_FETCH_USER_PROFILE_URL, API_UPDATE_USER_PROFILE_URL} from '../../../Services/api';
export const Studentprofileedit=()=>{

    const user_id = localStorage.getItem('user_id');
//   const user_name_std =  localStorage.setItem(uuser_name);
//     alert(user_name_std);

    const userid={id:user_id}

    const [uuser_name,setStuuser_name]=useState("");
    const [uuser_email,setuuser_email]=useState("");
    const [uuser_mobile, setuuser_mobile]=useState("");
    const [usser_class,setusser_class]=useState("");
    const [usser_schoolname,setusser_schoolname]=useState("");
    const [usser_gender,setusser_gender]=useState("");
    const [usser_fth_name,setusser_fth_name]=useState("");
    //const [usser_fth_num,setusser_fth_num]=useState("");
    const [usser_address,setusser_address]=useState("");
    const [usser_state,setusser_state]=useState("");

    
    //const [usser_bio,setusser_bio]=useState("");
    

            const fe_user =async () =>{
            //   const  feapi_fe_use =await axios.get(`http://localhost/apis/user_fetch_apii.php?id=${user_id}`);  

            const feapi_fe_use=await axios.postForm(`${API_FETCH_USER_PROFILE_URL}`,userid)
            //   console.log(feapi_fe_use.data.response);
            setStuuser_name(feapi_fe_use.data.response.name);
            setuuser_email(feapi_fe_use.data.response.email);
            setuuser_mobile(feapi_fe_use.data.response.mobile)
            setusser_class(feapi_fe_use.data.response.class);
            setusser_schoolname(feapi_fe_use.data.response.school_name);
            setusser_gender(feapi_fe_use.data.response.gender);

            setusser_fth_name(feapi_fe_use.data.response.father_name);
            // setusser_fth_num(feapi_fe_use.data.response.father_number);
            setusser_address(feapi_fe_use.data.response.address);
            setusser_state(feapi_fe_use.data.response.state);
            // setusser_bio(feapi_fe_use.data.response.stud_biography);
            }

   
    useEffect(()=>{
        fe_user();
    },[])



    
        const stu_pro_update=async(e)=>{
        e.preventDefault();
        const qut_stu_pro_update = {id:user_id,name:uuser_name,email:uuser_email,mobile:uuser_mobile,class1:usser_class,father_name:usser_fth_name,school_name:usser_schoolname,address:usser_address,gender:usser_gender,state:usser_state}
        const res =await axios.postForm(`${API_UPDATE_USER_PROFILE_URL}`,qut_stu_pro_update);
        alert(res.data.response);
        localStorage.setItem('user_name', uuser_name);
        }
    

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
            <div className='section-title d-flex justify-content-between' style={{borderBottom:'2px solid #e6e3f14f'}}>
            <h6 className='jig-title-style' style={{border:'none', marginBottom: '2px'}}>User Profile Update</h6>
             </div>

             <form onSubmit={stu_pro_update}>
            <div className='row'>
            
            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label  className="form-label">Student Name</label>
            <input type="name" className="form-control" onChange={(e)=>setStuuser_name(e.target.value)} value={uuser_name} />
      
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label  className="form-label">Enter Email</label>
            <input type="email" className="form-control"  value={uuser_email} onChange={(e)=>setuuser_email(e.target.value)} />
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">Enter Number</label>
            <input type="number" className="form-control" value={uuser_mobile} onChange={(e)=>setuuser_mobile(e.target.value)}/>
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">Class</label>
            <input type="text" className="form-control" value={usser_class} onChange={(e)=> setusser_class(e.target.value)}/>
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">School Name</label>
            <input type="text" className="form-control" value={usser_schoolname} onChange={(e)=> setusser_schoolname(e.target.value)}/>
            </div>
            </div>

            
            
            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">Gender</label>
            <input type="text" className="form-control" value={usser_gender} onChange={(e)=>setusser_gender(e.target.value)}/>
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">state</label>
            <input type="text" className="form-control" value={usser_state} onChange={(e)=>setusser_state(e.target.value)}/>
            </div>
            </div>

            <div className="col-md-6 mb-2">
            <div className="mb-1">
            <label className="form-label">Father Name</label>
            <input type="text" className="form-control" value={usser_fth_name} onChange={(e)=>setusser_fth_name(e.target.value)}/>
            </div>
            </div>


            <div className="col-md-12 mb-2">
            <div className="mb-1">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" value={usser_address}  onChange={(e)=>setusser_address(e.target.value)}/>
            </div>
            </div>

            {/* <div className="col-md-12 mb-2">
            <div className="mb-1">
            <label className="form-label">Biography</label>
            <textarea className="form-control" rows="2" value={usser_bio} onChange={(e)=>setusser_bio(e.target.value)}></textarea>
            </div>
            </div> */}

            <div className="col-auto">
            <input type="submit" className="btn search_btn w-100 mb-3 text-white" value="Profile Update" /> 
            </div>

           
            </div>
            </form>
            
        </div>
        </div>
     </div>
     
     </div>
    </div>
    </section>
    </>
)
}
