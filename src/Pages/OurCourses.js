import React from 'react';
import Freeonlinesubscribe from '../Components/Freeonlinesubscribe/Freeonlinesubscribe';
import Courses from '../Components/JIgsawcourses/Courses';
import Subscriptionbanner from '../Components/Subscriptionbanner/Subscriptionbanner';

const OurCourses=()=>{
  
    return(  
        <>
   
        <Subscriptionbanner></Subscriptionbanner>
        <Freeonlinesubscribe></Freeonlinesubscribe>
        <Courses limit={1000}/>
   
        </>
    );
}
export default OurCourses;