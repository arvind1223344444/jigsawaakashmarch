import DetailsCoursessection from '../Components/DetailsCoursessection/DetailsCoursessection';
import Othercourse from '../Components/Othercourses/Othercourse';
import { useParams } from 'react-router-dom';
export default function CourseDetails() {

  const {id} =useParams();


  // alert(id);

 
  return (
    <>
    <DetailsCoursessection playlist_id={id}></DetailsCoursessection>
    <Othercourse></Othercourse>
    </>
    
  )
}
