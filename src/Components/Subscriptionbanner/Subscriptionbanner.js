import React from 'react';
import '../Subscriptionbanner/Subscriptionbanner.css';
import ManAvtar from '../../Images/ManAvtar.png';
import Girlavatar from '../../Images/Girlavatar.png';
import syllabus from '../../Images/syllabus.png';
import videomarketing from '../../Images/videomarketing.png';
export default function Subscriptionbanner() {
    
  return (
    <>
     <section className='section Subscriptionbanner'>
      <div className='container mb-3'>
        <div className='row align-items-center border-top-0 border-end-0 border-start-0 border pb-3'>
            <div className='col-md-8 col-lg-9'>
            <div className='Subscriptionb_title'>
                <h2>Master the Art of fastMental Calculation with Abacus</h2>
                <p>Over <span style={{color:'#225F9D'}}> 8,00,00 </span> learners trust us for online and offline coaching</p>
            </div>
            </div>

            <div className='col-md-4 col-lg-3'>
            <div className='subscription_btn ms-auto '>
            <button className="btn btn-primary Subscription_btn" type="button">Subscription Plans</button>
            </div>
            </div>
        </div>

        <div className='row mt-3'>
        <div className="sufeature col-md-4">
        <div className="subfeature_image d-flex">
         <img src={ManAvtar} style={{width:'60px'}} className='img-fluid'/>
         <img src={Girlavatar} style={{width:'60px'}} className='img-fluid'/>
         <img src={ManAvtar} style={{width:'60px'}} className='img-fluid'/>
        
        </div>
        <h4 className='mt-3'>India's top educators</h4>
        <p>Learn with the best educators for online IIT-JAM  preparation</p>
        </div>

        <div className="sufeature col-md-4">
        <div className="subfeature_image d-flex">
         <img src={syllabus} style={{width:'60px'}} className='img-fluid'/>
        </div>
        <h4 className='mt-3'>India's top educators</h4>
        <p>Learn with the best educators for online IIT-JAM  preparation</p>
        </div>

        <div className="sufeature col-md-4">
        <div className="subfeature_image d-flex">
         <img src={videomarketing} style={{width:'60px'}} className='img-fluid'/>
        </div>
        <h4 className='mt-3'>India's top educators</h4>
        <p>Learn with the best educators for online IIT-JAM  preparation</p>
        </div>
        </div>

      <div className='button2'>
        <button type='button' className='btn button_2'>Learn See More </button>
      </div>

      </div>
      </section>
    </>
  )
}
