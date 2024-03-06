// import React, { useEffect, useState } from 'react';
// import '../DetailsCoursessection/DetailsCoursessection.css';
// import play from '../../Images/play.png';
// import lock from '../../Images/lock.png';
// import { BsCameraVideo,BsBook,BsCcSquare,BsFilterSquare} from "react-icons/bs";
// import {API_FETCH_COURSES_PLAYLIST_CHAPTER_LIST_URL} from '../../Services/api';
// import axios from 'axios';
// const DetailsCoursessection =(props)=>{

   
// const play_id=(props.playlist_id);
// // alert(play_id);

// const image_pth='http://192.168.1.10:3000/';
// const [playchapter , setplaychapter]=useState([]);
// const Chapterclass=async()=>{
//   const chatperdata=await axios.get(`${API_FETCH_COURSES_PLAYLIST_CHAPTER_LIST_URL}/${play_id}`);
//   setplaychapter(chatperdata.data.response);
//   console.log(chatperdata.data.response);
//  // console.log(chatperdata.data.response[0].playlist_id);
// }

//   useEffect(() => {
//     Chapterclass();

//     },[]);

//     return (
//         <>
//         {play_id}

//         {playchapter.map((chapterd,index)=>(
//             <div key={index}>
//                 <h1>{chapterd._id}</h1>
//             </div>
//         ))}
//         <section className='section course_page-content course-sec'>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-sm-12 col-md-9 order-sm-1'>
//                     <div className='course-details-content'>
//                     <div className='course-content rbt-shadow-box coursecontent-wrapper mt--30'>
//                     <div className='rbt-course-feature-inner'>
//                         <div className='section_title'>
//                             <h5 className='rbt-title-style-3'> Course Content </h5>
//                         </div>

//                         <div className='rbt-accordion-style rbt-accordion-02 accordion'>
                       
//                     <div className="accordion" id="accordionExample">
                    
//                     <div className="accordion-item jg_aco">
//                     <h2 className="accordion-header jg_aco_header" id="headingOne">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                    <div className="coursttt d-flex">
//                     Intro to Course and Histudy
//                     <span className="badge bg-light text-dark ms-2" style={{textAlign:'left'}}>1hr 30min</span>
//                     </div>
//                     </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                     <div className="accordion-body jg_aco_body">
                    
//                     <ul className="rbt-course-main-content liststyle">
//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Course Intro</span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Watch Before Start </span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>


//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Read Before You Start </span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'> <img src={lock} className='img-fluid'/></span>
//                                 {/* <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span> */}
//                             </div>
//                         </a>
//                     </li>

//                     </ul>

//                     </div>
//                     </div>
//                     </div>

                    				
// 				    <div className="accordion-item jg_aco">
//                     <h2 className="accordion-header jg_aco_header" id="headingTwo">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
//                    <div className="coursttt d-flex">
//                     Course Fundamentals
//                     <span className="badge bg-light text-dark ms-2" style={{textAlign:'left'}}>1hr 30min</span>
//                     </div>
//                     </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                     <div className="accordion-body jg_aco_body">
                    
//                     <ul className="rbt-course-main-content liststyle">
//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Course Intro</span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Watch Before Start </span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>



//                     </ul>

//                     </div>
//                     </div>
//                     </div>



                    				
// 				<div className="accordion-item jg_aco">
//                     <h2 className="accordion-header jg_aco_header" id="headingThree">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
//                    <div className="coursttt d-flex">
//                     Intro to Course and Histudy
//                     <span className="badge bg-light text-dark ms-2" style={{textAlign:'left'}}>1hr 30min</span>
//                     </div>
//                     </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                     <div className="accordion-body jg_aco_body">
                    
//                     <ul className="rbt-course-main-content liststyle">
//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Course Intro</span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#">
//                             <div className='course-content-left'>
//                                 <span className="c_icon me-2">
//                                     <img src={play} className="img-fluid"/>
//                                 </span>
//                                 <span className="test"> Watch Before Start </span>
//                             </div>

//                             <div className='course-content-right'>
//                                 <span className='min-lable'>30 min</span>
//                                 <span className='rbt-badge variation-03 bg-primary-opacity'>
//                                 Preview
//                                 </span>
//                             </div>
//                         </a>
//                     </li>

//                     </ul>

//                     </div>
//                     </div>
//                     </div>


//                      </div>


//                      </div>

//                     </div>
//                     </div>
//                     </div>
//                 </div>
                    
//                      {/* sidbar start */}
//                      <div className='col-sm-12 col-md-3 order-sm-1 '>
//                     <div className='clasSchedule css-1skwus0-WeekInfoWrapper e1gu67tl3'>
//                     <h4  className="css-1cx04ej-H4 e1nt2v9v0">{/*Schedule */} Continue learning</h4>
                    
//                     <p className="p2_variant aquilla-typography typography  css-mdulup"> Watch free classes by the educators of this batch</p>
//                     <h6 className='mt-2 mb-2'>What you will get:</h6>

                    
//                     <ul className='p-0'> 
//                         <li className='mr-4 d-flex align-items-center'>
//                         <span style={{width:"35px", height:"35px", position:"relative"}}> <BsCameraVideo/>  </span> 
//                         <span className='p2_variant aquilla-typography'>5 hours+ on-demand video content</span>
//                         </li>

//                         <li className='mr-4 d-flex align-items-center'>
//                         <span style={{width:"35px", height:"35px", position:"relative"}}> <BsBook/>  </span> 
//                         <span className='p2_variant aquilla-typography'>38 hands-on-keyboard exercises</span>
//                         </li>

//                         <li className='mr-4 d-flex align-items-center'>
//                         <span style={{width:"35px", height:"35px", position:"relative"}}> <BsCcSquare/>  </span> 
//                         <span className='p2_variant aquilla-typography'>This + all other courses access (Pro)</span>
//                         </li>

//                         <li className='mr-4 d-flex align-items-center'>
//                         <span style={{width:"29px", height:"29px", position:"relative"}}> <BsFilterSquare/>  </span> 
//                         <span className='p2_variant aquilla-typography'>Certificate of completion</span>
//                         </li>
//                     </ul>

                    
//                     <div className="css-13ceg5v-RightWrapper euycuoa3">
//                         <div className="subscription_btn">
//                             <button className="btn btn-primary Subscription_btn ss" type="button">Resume your course</button>
//                          </div>
//                     </div>
                   
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </section>
//         </>
        
//         );
// } 
// export default DetailsCoursessection
