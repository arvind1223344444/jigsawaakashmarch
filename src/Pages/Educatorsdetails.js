import React from 'react'
import EducatorsAbout from '../Components/EducatorsAbout/EducatorsAbout';

import { useParams } from 'react-router-dom';
import EducatorsCourse from '../Components/EducatorsCourse/EducatorsCourse';

export default function Educatorsdetails() {
    const {id} =useParams();
  return (
    <>
    <EducatorsAbout educatorid={id}/>
    <EducatorsCourse educatorid={id}/>
   
    </>
  )
}
