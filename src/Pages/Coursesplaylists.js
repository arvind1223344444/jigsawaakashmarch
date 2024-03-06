import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import  {API_FETCH_COURSES_PLAYLIST_SHOW_LIST_URL,api_path,API_FETCH_COURSES_PLAYLIST_FILTER_LIST_URL}from '../Services/api'
import axios from 'axios';

export default function Coursesplaylists() {
  const {id}=useParams();
  const Navigate=useNavigate();

  //const user_id = localStorage.getItem('user_id');
 
  //  alert(play_id);
  
  const imgePATH=api_path;
  
  const [playchapter , setplaychapter]=useState([]);
  const [usesltcourse , setusesltcourse]=useState([]);
  
  const Chapterclass=async()=>{
  const chatperdata=await axios.get(`${API_FETCH_COURSES_PLAYLIST_SHOW_LIST_URL}/${id}`);
  setplaychapter(chatperdata.data.response.playlist);
  setusesltcourse(chatperdata.data.response);
  console.log(playchapter);
  }
  
  useEffect(() => {
  Chapterclass();
  },[id]);
  
  
  const [activeButton, setActiveButton] = useState('All_Courses');
  const [fillterCourselist, setfillterCourselist] = useState([]);

  const FillterCourseData = async (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === 'All_Courses') {
      Navigate(`../Coursesplaylists/${id}`);
    } else {
      const fillterCourseDataqry = await axios.get(
        `${API_FETCH_COURSES_PLAYLIST_FILTER_LIST_URL}/${id}/${buttonName}`
      );
      setfillterCourselist(fillterCourseDataqry.data.response);
     // console.log(fillterCourselist);
    }
  };

  const buttonStyle = (buttonName) => ({
    margin: '1px 5px',
    padding: '3px 5px',
    color: activeButton === buttonName ? 'white' : 'black',
    backgroundColor: activeButton === buttonName ? '#225f9d' : 'transparent',
  });

  useEffect(() => {
    // Check if fillterCourselist is not empty before calling FillterCourseData
    if (fillterCourselist.length > 0) {
      FillterCourseData(fillterCourselist[0]); // Assuming you want to pass the first item in the list
    }
  }, [fillterCourselist]);

 

 
  return (
    <>
      
                  <section className='section  teacherpro_card_wrapper'>
                  <div className='container'>
                  <div className="coursefdd">
                  <div className="row">
                  <div className='col-md-4 my-2'>
                  <div className='text-center d-flex align-items-center justify-content-center'>
                  <div className='teacherp_image me-2'>
                  <img src={`${imgePATH}${usesltcourse.courseImage}`} className="img-fluid imageddd"  />
                  </div>
                  </div>
                  </div>
    
                  <div className='col-md-8 my-2'>
                  <div className='coursefdd_details mt-2'>
                  <h4 className='fw-bold'>{usesltcourse.courseName}</h4>
                  {/* <p className='text-primary SyllabusTag_clr'> By -  {usesltcourse.teacher && usesltcourse.teacher.length > 0 ? usesltcourse.teacher[0].name : ""}</p> */}
                  <p>{usesltcourse.desc}</p>
                  </div>
                  </div>
    
                  </div>
                  <hr className='divider'></hr>
                  </div>
                  </div>
    
                  </section>
    
        <section className='section section2 courese_home'>
        <div className='container'>
        
        <div className='row'>
        <div className='title '>
           <h4> Jigsaw Abecus Courses Levels </h4> 
        </div>
    
        
        <div className='row'>
      <div className='col-md-12'>
        <button
          type='button'
          style={buttonStyle('All_Courses')}
          onClick={() =>FillterCourseData('All_Courses')}
         
          // onClick={() =>{Navigate(`../Coursesplaylists/${id}`)}}
        >
          All Courses
        </button>
        <button
          type='button'
          style={buttonStyle('live')}
          onClick={() => FillterCourseData('live')}
        >
          Mode Online
        </button>
        <button
          type='button'
          style={buttonStyle('upload')}
          onClick={() => FillterCourseData('upload')}
        >
          Mode Offline
        </button>
      </div>
    </div>

        </div>
        
      {/* {fillterCourselist?.map((item)=>(
        <>
        <h1>{item?._id}dsds</h1>
        </>
      ))} */}

        <div className='row mt-3'> 
       
        {/* {activeButton==='activeButton' ? usesltcourse.map: playchapter.map((playListN,index)=>( */}
       
        {activeButton === 'All_Courses' ?
  playchapter.map((playListN) =>{ 
    // const StartData=playListN.startDate;

    const startDate = new Date(playListN.startDate);
    const sdate = startDate.getDate(); 
    const smonth = startDate.toLocaleString("default", { month: "long" }); 
    const syears = startDate.getFullYear();
    const courseStartDate=`${syears} ${smonth} ${sdate}`;
   

    return (
    <div className='col-sm-12 col-md-6 col-lg-3' key={playListN._id}>
      <Link to={`../CourseDetails/${playListN._id}`}>
        <div className='popular_co'>
          <img src={`${imgePATH}${playListN.thumbnail}`} className="img-fluid imageddd" />
        </div>
      </Link>
      <div className='course_cont'>
        <h5 className='text-uppercase'>
          <span style={{ color: '#225F9D' }}>{playListN.playlist}</span>
          <span className="badge bg-warning text-dark">{playListN.mode_playlist}</span>
          
        </h5>
        <p className='m-0'>Batch  Data :- {courseStartDate}</p>
        {playListN.payments.map((paymentsfees, index) => {
          const payamount = paymentsfees.fee;
          const discountAmount = (paymentsfees.discount / 100) * payamount;
          const currectAmount = payamount - discountAmount;
          return (
            <div key={index}>
              <p>{paymentsfees.startDate}</p>
              <p className="mb-0 mt-2">Price: {currectAmount} Rs. <span className="text-decoration-line-through text-danger">{paymentsfees.fee} Rs.</span> &nbsp; <span className="text-danger">{paymentsfees.discount}% Off</span></p>
            </div>
          );
        })}
        <p className="text-muted">By {playListN.teacher[0].name}</p>
      </div>
    </div>
   );
  }) :
  fillterCourselist.playlist?.map((courseModule) => {

    const startDate = new Date(courseModule.startDate);
    const sdate = startDate.getDate(); 
    const smonth = startDate.toLocaleString("default", { month: "long" }); 
    const syears = startDate.getFullYear();
    const courseStartDate=`${syears} ${smonth} ${sdate}`;
   

    return(
    <div className='col-sm-12 col-md-6 col-lg-3' key={courseModule._id}>
      {/* {courseModule?.id}hjh */}
      <Link to={`../CourseDetails/${courseModule._id}`}>
        <div className='popular_co'>
          <img src={`${imgePATH}${courseModule.thumbnail}`} className="img-fluid imageddd" />
        </div>
      </Link>

      <div className='course_cont'>
        <h5 className='text-uppercase'>
          <span style={{ color: '#225F9D' }}>{courseModule.playlist}</span>
          <span className="badge bg-warning text-dark">{courseModule.mode_playlist}</span>
          
        </h5>
        <p className='m-0'>Batch  Data :- {courseStartDate}</p>

        {courseModule.payments.map((paymentsfees, index) => {
          const payamount = paymentsfees.fee;
          const discountAmount = (paymentsfees.discount / 100) * payamount;
          const currectAmount = payamount - discountAmount;
          return (
            <div key={index}>
              <p>{paymentsfees.startDate}</p>
              <p className="mb-0 mt-2">Price: {currectAmount} Rs. <span className="text-decoration-line-through text-danger">{paymentsfees.fee} Rs.</span> &nbsp; <span className="text-danger">{paymentsfees.discount}% Off</span></p>
            </div>
          );
        })}
        <p className="text-muted">By {courseModule.teacher[0].name}</p>
        
        </div>
    </div>
)})
}



        
      



{/* 
      

        {playchapter.map((playListN,index)=>(
        <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
        
        <Link to={`../CourseDetails/${playListN._id}`}>
        <div className='popular_co'>
        <img src={`${imgePATH}${playListN.thumbnail}`} className="img-fluid imageddd"  />
       </div>
       </Link>

   
        <div className='course_cont'>
        <h5 className='text-uppercase'> <span style={{color:'#225F9D'}}> {playListN.playlist}</span>   <span className="badge bg-warning text-dark">{playListN.mode_playlist}</span> </h5>
     
          {playListN.payments.map((paymentsfees,index)=>{
              const payamount=paymentsfees.fee;
               const discountAmount = (paymentsfees.discount / 100) * payamount;
              const currectAmount = payamount - discountAmount;
              
            return(
        <>
        <p>{paymentsfees.startDate}</p>
        <p className="mb-0 mt-2" key={index}>  Price :    {currectAmount} Rs.  <span className="text-decoration-line-through text-danger"> {paymentsfees.fee} Rs.  </span> &nbsp; <span className="text-danger"> {paymentsfees.discount}% Off</span>   </p>
     
        </>
             )}
         )}
         
         
        
          <p className="text-muted"> By  {playListN.teacher[0].name} </p>
        </div>
       </div>
       ))} */}


          </div>

        </div>
        </section>
      
          
        

            </>
  )
}
