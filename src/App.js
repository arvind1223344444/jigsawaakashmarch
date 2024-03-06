import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Educators from './Pages/Educators';
import Quiz from './Pages/Quiz'
import Contact from './Pages/Contact';
import Successstory from './Pages/Successstory';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CourseDetails from './Pages/CourseDetails';
import OurCourses from './Pages/OurCourses';
import UserProfile from './Pages/UserProfile';
import Dashboard from './Components/Dashboard/Student/Dashboard';
import Enrollcourses from './Components/Dashboard/Enrollcourses/Enrollcourses';
import Studentnotice from './Components/Dashboard/Studentnotice/Studentnotice';
import Studentprofile from './Components/Dashboard/Studentprofile/Studentprofile';
import Studentorder from './Components/Dashboard/Studentorder/Studentorder';
import Studentassignment from './Components/Dashboard/Studentassignment/Studentassignment';
import Studentclassassignment from './Components/Dashboard/Studentclassassignment/Studentclassassignment'
import Quizattempts from './Components/Dashboard/Quizattempts/Quizattempts';
import Feesupdate from './Components/Dashboard/Feesupdate/Feesupdate';
import Attendancereport from './Components/Dashboard/Attendancereport/Attendancereport';
import { Studentprofileedit } from './Components/Dashboard/Studentprofileedit/Studentprofileedit';
import { ScrollToTop } from './Helpers/ScrollToTop';
import Educatorsdetails from './Pages/Educatorsdetails';
import QuizExam from './Components/Quiz/QuizExam/QuizExam';
import Coursesplaylists from './Pages/Coursesplaylists';
import { Makepayment } from './Pages/Makepayment';
import { Videoclass } from './Pages/Videoclass';
import Coursesselectquiz from './Components/Quiz/Coursesselectquiz/Coursesselectquiz';
import RazorpayIntegration from './Razorpay/RazorpayIntegration';
import Livetreaming from './Pages/Livetreaming';
import Homework from './Pages/Homework';
import Studetentoral from './Components/Dashboard/Studetentoral/Studetentoral';
import Oralsheet from './Pages/Oralsheet';
import Studetentclsoral from './Components/Dashboard/Studetentclsoral/Studetentclsoral';



function App() {

  return (
    <>
  
    <ScrollToTop/>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/Educators' element={<Educators/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Successstory' element={<Successstory/>}/>
      <Route path='/CourseDetails/:id' element={<CourseDetails/>}/>
      <Route path='/OurCourses' element={<OurCourses/>}/>
      <Route path='/UserProfile' element={<UserProfile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/Enrollcourses' element={<Enrollcourses/>}/>
      <Route path='/Studentnotice' element={<Studentnotice/>}/>
      <Route path='/Studentprofile' element={<Studentprofile/>}/>
      <Route path='/Studentorder' element={<Studentorder/>}/>
      <Route path='/Studentassignment' element={<Studentassignment/>}/>
      <Route path='/Quizattempts' element={<Quizattempts/>}/>
      <Route path='/Feesupdate' element={<Feesupdate/>}/>
      <Route path='/Attendancereport' element={<Attendancereport/>}/>
      <Route path='/Studentprofileedit' element={<Studentprofileedit/>}/>
      <Route path='/Educatorsdetails/:id' element={<Educatorsdetails/>}/>
      <Route path='/Quiz' element={<Quiz/>}/>
      <Route path='/QuizExam/:id' element={<QuizExam/>}/>
      <Route path='/Coursesplaylists/:id' element={<Coursesplaylists/>}/>
      <Route path='/Makepayment/:id' element={<Makepayment/>}/>
      <Route path='/Videoclass/:id' element={<Videoclass/>}/>
      <Route path='/Coursesselectquiz/:id' element={<Coursesselectquiz/>}/>
      <Route path='/RazorpayIntegration' element={<RazorpayIntegration/>}/>
      <Route path='/Livetreaming/:id' element={<Livetreaming/>}/>
      <Route path='/Homework/:id' element={<Homework/>}/>
      <Route path='/Studentclassassignment' element={<Studentclassassignment/>}/>
      <Route path='/Studetentoral' element={<Studetentoral/>}/>
      <Route path='/Studetentclsoral' element={<Studetentclsoral/>}/>
      
      <Route path='/Oralsheet/:id' element={<Oralsheet/>}/>
      
    </Routes>
    <Footer/>
    
  
    </>
  );
}

export default App;
