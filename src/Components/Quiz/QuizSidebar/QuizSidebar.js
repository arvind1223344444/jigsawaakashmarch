import React from 'react';
import abecusquiz from '../../../Images/abecusquiz.gif';
const QuizSidebar=()=>{
    return(
        <>
              
                <div className='sidebar_jigsaw_qui mt-4 mb-3'>
                <div className="card">
                <div className="card-header pb-1 pt-1">
                <h6 className="fw-bold" style={{fontSize:'18px'}}> SELF STUDY </h6>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item cursor-pointer">Student Quiz</li>
                <li className="list-group-item">Student Practice</li>
                </ul>
                </div>
                </div>

                <div className="image_abecus">
                    <img src={abecusquiz} className='img-fluid'></img>
                </div>

        </>
    )
}
export default QuizSidebar