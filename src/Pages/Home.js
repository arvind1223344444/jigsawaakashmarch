import React from 'react';
import Homebanner from '../Components/Homebanner/Homebanner';
import Subscriptionbanner from '../Components/Subscriptionbanner/Subscriptionbanner';
import Courses from '../Components/JIgsawcourses/Courses';
import Othercourse from '../Components/Othercourses/Othercourse';
import Freeonlinesubscribe from '../Components/Freeonlinesubscribe/Freeonlinesubscribe';
import EducatorsSection from '../Components/EducatorsSection/EducatorsSection';

export default function Home() {
  return (
    <>
    
    <Homebanner></Homebanner>
    {/* <Subscriptionbanner></Subscriptionbanner> */}
    {/* <Freeonlinesubscribe></Freeonlinesubscribe>  */}
    <Courses limit={4}/>
    <Othercourse/>
    
    <EducatorsSection limit={4}/>
    <Freeonlinesubscribe></Freeonlinesubscribe>
   
    </>
  )
}
