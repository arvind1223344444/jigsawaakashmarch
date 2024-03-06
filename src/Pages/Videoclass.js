import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
import ReactPlayer from 'react-player';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {API_FETCH_VIDEO_API,api_path,API_FETCH_ALL_PLAYLIST_VIDEO_API,API_FETCH_ALL_VIDEO_WATCHED_API,API_FETCH_ALL_VIDEO_WATCHED_STATUS_API,imgePATH} from '../Services/api';
import axios from 'axios';


   const Wrapper=styled.section`
   position:relative;
   width:100%;
   height:auto;

   .class_Video_player{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    outline: 0;
    font-family: "YouTube Noto",Roboto,Arial,Helvetica,sans-serif;
    text-align: left;
    direction: ltr;
    font-size: 14px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -ms-high-contrast-adjust: none;
    margin:8px 0px;
}
.description{
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    margin-right: 12px;
    margin-top: 12px;
    padding:5px 10px;
}
.allplaylistsidbar{
    position:relative;
overflow:hidden;
}
.allplaythumbnail{
    cursor:pointer;
    margin:8px 0px;
}
.allplaylistsidbar{
    background: #fff;
    padding: 15px;
    width: auto;
    height: 400px;
    overflow: hidden;
    border: 1px solid #ccc;
    overflow-y:scroll;
}
   `

export const Videoclass=()=>{

    const user_id=localStorage.getItem('user_id');
    //alert(user_id); 
    const {id} =useParams();

    const imgePATH=api_path;     

    const playerConfig = {
        file: {
          attributes: {
            controlsList: 'nodownload', // Disable download option
          },
        },
      };
      
const [videoPlayedSeconds, setVideoPlayedSeconds] = useState(0);
const [videoDuration, setVideoDuration] = useState(0);

const [courseplayVideors,setcourseplayVideors]=useState({});
const [video_url,setvideo_url]=useState('');
const playVideors =async()=>{
const playVideorsapi=await axios.get(`${API_FETCH_VIDEO_API}/${id}`);
// console.log(playVideorsapi.data.response.videos);
setvideo_url(playVideorsapi.data.response.videos[0]);
setcourseplayVideors(playVideorsapi.data.response);
//console.log(courseplayVideors)
}


const [Allcoursevideo,setAllcoursevideo]=useState([]);
const AllcoursevideoApi=async()=>{
const coplcourseplayVideorsesApi=await axios.get(`${API_FETCH_ALL_PLAYLIST_VIDEO_API}/${id}`);
setAllcoursevideo(coplcourseplayVideorsesApi.data.response.chapters)
console.log(Allcoursevideo);
}

useEffect(()=>{

    playVideors(video_url);
},[video_url])



// useEffect(()=>{

//     playVideors(video_url);
// },[video_url])

useEffect(()=>{
    AllcoursevideoApi(Allcoursevideo);
},[Allcoursevideo])


const currentDate = new Date();
const todayData = currentDate.toLocaleDateString('en-GB', {  year: 'numeric', month: 'long', day: 'numeric' });



const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  
const [attemptQuiz, setAttemptQuiz] = useState([]);
  const navigate = useNavigate();

  const AttemptQuizSend = async () => {
    const AttemptQuizSenddata = { user_id: user_id, chapter_id: id, status: 1 };
    try {
      const AttemptQuizSendqry = await axios.postForm(API_FETCH_ALL_VIDEO_WATCHED_API, AttemptQuizSenddata);

      setAttemptQuiz(AttemptQuizSendqry.data.data1._id);
      
    } catch (error) {
      console.error("Error while attempting quiz:", error);
      // Handle the error here (show an error message, etc.) if needed.
    }
  };

  useEffect(() => {
    //console.log(attemptQuiz); // This will log the updated value of attemptQuiz.

    if (attemptQuiz.length > 0) {
      // Assuming you want to navigate after attemptQuiz is updated with a non-empty value.
       navigate(`/QuizExam/${attemptQuiz}`);
    }
  }, [attemptQuiz]); // The useEffect will run whenever attemptQuiz changes.

 
  const[uservideoPlayCheck,setuservideoPlayCheck ]=useState([]);
  const videoStatusCheck=async()=>{
    const videoStatusCheckdata={user_id:user_id,chapter_id:id};
    const videoStatusCheckqry=await axios.postForm(API_FETCH_ALL_VIDEO_WATCHED_STATUS_API,videoStatusCheckdata);
    setuservideoPlayCheck(videoStatusCheckqry.data.response);
    console.log(uservideoPlayCheck);
  }

  useEffect(()=>{
    videoStatusCheck();
  },[uservideoPlayCheck]);

return(
    <>

    <Wrapper className='section section2'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                
                <div className="class_Video_player">
                <div className='react_video_play  d-flex justify-content-center  align-items-center'>
                <ReactPlayer 
                url={api_path+video_url.lession_video} 
                className="react-player w-100"
                playing={true}
                loop={false}
                 muted={false}
                controls={true}
                               
                // config={playerConfig}
                
                onDuration={(duration) => setVideoDuration(formatTime(duration))}
                onProgress={(progress) => setVideoPlayedSeconds(formatTime(Math.floor(progress.playedSeconds)))}
              
                />
                </div>
             
                
                <h5 className='my-2 fw-bold'> {courseplayVideors.chapter_name}</h5>
                
                <div className='description'> 
                <p> {courseplayVideors.chapterDscription}</p>
                {/* <p> {courseplayVideors._id}</p> */}
                {/* {videoDuration==videoPlayedSeconds?   <p>Compleated this Quiz <button type="button" className='btn btn-sm btn-warning' onClick={AttemptQuizSend}>Attempt Quiz</button></p>: ''}
               */}
               
                {/* {uservideoPlayCheck==true?
                "already play"
                 :
                 videoDuration==videoPlayedSeconds? 
                 <p>Compleated this Quiz <button type="button" className='btn btn-sm btn-warning' onClick={AttemptQuizSend}>Attempt Quiz</button></p>
                 : ''
                 } */}


                {uservideoPlayCheck ? (
               
                 <p style={{ display: videoDuration === videoPlayedSeconds ? "block" : "none" }}> 
                  Completed this Quiz 
                  <button type="button" className='btn btn-sm btn-warning' onClick={AttemptQuizSend} >
                  Attempt Quiz
                  </button>
                  </p>

                ) : (
                  ""
                )}




                {/* <p>Video Duration: {videoDuration}</p><br/>
                <p>
                Current Playback Time: {videoPlayedSeconds}
                </p> */}
                </div>
                
            </div>
            </div>
            <div className='col-md-4'>
                <div className='allplaylistsidbar'>
                {/* {chpterply.lesstionStartDate} */}
                {Allcoursevideo.map((chpterply,index)=>
                   {
                    const thumbnailUrl = `${imgePATH}${chpterply.lessionThumbnail}`;
                   
                      const startDate = new Date(chpterply.lesstionStartDate);
                   const sdate = startDate.getDate(); 
                   const smonth = startDate.toLocaleString("default", { month: "long" }); 
                   const syears = startDate.getFullYear();
                   const CoursestartDate=`${syears} ${smonth} ${sdate}  `;
              

                    const courseVideoPlay=()=>{
                    const finalUrl = new Date(CoursestartDate) <=new Date(todayData)   ? `/../Videoclass/${chpterply._id}` : `javascript:void(0)`;
                   
                    return finalUrl; 

                  
                  }
                
                  return(
                 <div className='allplaylistsidbar_content' key={index}>
             
                <Link to={courseVideoPlay()} className='text-dark ' >  
                {/* <Link to={  `/../Videoclass/${chpterply._id}`} className='text-dark'>   */}
               
                <div className='row '>
                {/* <img src={thumbnailUrl} /> */}
                {
                chpterply.videos.map((playlist,index)=>(
                    <div className='col-5 mb-2' key={index}>
                     
                    <div className='allplaythumbnail'>
                       {/* <img src={thumbnailUrl} alt="Video Thumbnail" /> */}
                    <ReactPlayer url={api_path+playlist.lession_video} 
                  // thumbnail={thumbnailUrl}
                  //  light={thumbnailUrl}
                    className="react-player w-100 h-100"
                    playing={false}
                    loop={true}
                    muted={false}
                    controls={false}
                    config={playerConfig}
                    />
                    </div>
                    
                    </div>
                ))
               }
            
               
                <div className='col-7'>
                <div className='allplaythumbnail_content'>
                <p className='m-0 p-0 lh-sm fw-bold'> {chpterply.chapter_name}</p>
                
                 <p className='m-0 p-0 lh-sm'> {chpterply.chapterDscription.slice(0, 60)}...</p>
                {CoursestartDate <= todayData  ? null:<p className='text-dark'>Started in {CoursestartDate}</p>}
                
                 </div>
                 </div>

                </div>
                </Link>

                </div>

                )})}
               

                </div>
            </div>
        </div>
    </div>

    </Wrapper>
    
    </>
)
}