import React, { useEffect, useState } from 'react';
import {API_FETCH_TEACHER_DETAILS_LIST_URL,api_path} from '../../Services/api';
import axios from 'axios';
const EducatorsAbout=(props)=>{

  const  educatorid=(props.educatorid);
  const image_pth=api_path;


    const [getData, setData]=useState([]);
    const educatorAbo = async()=>{
    const eduprodatatex = await axios.get(`${API_FETCH_TEACHER_DETAILS_LIST_URL}/${educatorid}`)
    setData(eduprodatatex.data.response)
    console.log(getData);
    }
    useEffect(() => {
         educatorAbo();
      },[]);

    return(
    
    <>


<section className='section  teacherpro_card_wrapper'>
<div className='container'>
<div className="coursefdd">
<div className="row">
<div className='col-md-4 my-2'>
<div className='text-center d-flex align-items-center justify-content-center'>
<div className='teacherp_image me-2'>
<img src={image_pth +getData.image} className="img-fluid imageddd" style={{width:"150px"}} />
</div>
</div>
</div>
<div className='col-md-8 my-2'>
  {/* <p className='text-primary SyllabusTag_clr'>course</p> */}
  <div className='coursefdd_details mt-2'>
      <h4 className='fw-bold'>{getData.name}</h4>
      <p className='m-1'> Experience {getData.exprience} </p>
      <p>{getData.bio}</p>
  </div>
</div>

</div>
<hr className='divider'></hr>
</div>
</div>

</section>

</>
)
}
export default EducatorsAbout;