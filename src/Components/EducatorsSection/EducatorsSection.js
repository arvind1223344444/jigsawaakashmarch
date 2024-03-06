import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../EducatorsSection/EducatorsSection.css';
import axios from 'axios';
import {API_FETCH_TEACHER_PLAYLIST_SHOW_LIST_URL,api_path} from '../../Services/api';
export default function EducatorsSection(props) {
  
          const [eduprofile, seteduprofile]=useState([]);
         

          const image_pth=api_path;
          const educatorsprof = async()=>{
          const educatorsdata=await axios.get(`${API_FETCH_TEACHER_PLAYLIST_SHOW_LIST_URL}`)
         const edulimit = educatorsdata.data.response.slice(0,`${props.limit}`)
        // console.log(edulimit);
         seteduprofile(edulimit);
       //  console.log(eduprofile);
   
          }

          useEffect(()=>{
          educatorsprof();
          },[])

    return (
      <>
        <section className='EducatorsSection section2'>
        <div className='container'>
        <div className="title">
        <h4> India's top educators to learn from </h4>
        </div>

        <div className='row'>
        {eduprofile.map((educator,index) => (
        <div key={index} className='col-md-6 mt-2'>
        <Link to={`/Educatorsdetails/${educator._id}`} className='text-dark'>
        <div className='teacherlist flex-fill'>
        <div className='teacher_img'>
        <img src={image_pth+educator.image}  className='img-fluid'/>
        </div>
        <div className='teacher_content pb-0'>
        <h5>{educator.name}</h5>

        <p>{educator.bio.substring(0, 220)}... </p>
        <div className='d-flex'>
        <div className='css-1rlk6g4'>
        <div className="css-u2fusp">
        <div className="h6_variant">{educator.exprience}</div>
        <div className="css-18pj45v">Experience</div>
        </div>
        </div>

        <div className='css-1rlk6g4'>
        <div className="css-u2fusp">
        <div className="h6_variant">53M</div>
        <div className="css-18pj45v">Watch Mins</div>
        </div>
        </div>
        </div>

        </div>
        </div>
        </Link>
        </div>


        ))}

        <div className="button2">
        <Link to="/Educators">
        <button type="button" 
        className="btn button_2">Learn See More </button>
        </Link>
        </div>

        </div>
        </div>
        </section>
      </>
   )
  }
