import React from 'react';
import Subscriptionbanner from '../Components/Subscriptionbanner/Subscriptionbanner';
import Freeonlinesubscribe from '../Components/Freeonlinesubscribe/Freeonlinesubscribe';
import EducatorsSection from '../Components/EducatorsSection/EducatorsSection';

export default function Educators() {
  return (
    <>
     <Subscriptionbanner></Subscriptionbanner>
     <EducatorsSection limit={1000}/>
     <Freeonlinesubscribe></Freeonlinesubscribe>
    
    
     
    </>
  )
}
