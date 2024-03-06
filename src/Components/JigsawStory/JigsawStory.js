import React from 'react';
import '../JigsawStory/JigsawStory.css';
import jigsaw_storry from '../../Images/jigsaw_storry.png';
import public_relation from '../../Images/public_relation.png';
import contact_us from '../../Images/contact_us.png'
export default function JigsawStory() {
  return (
    <>
    <section className='jigsawStory_inn'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 offset-lg-3'>
                    <div className='kissawStoryinn_content'>
                        <h3 className='fw-bold'> Jigsaw is india's largest online learning Website</h3>
                        <p>Over 10 crore learners trust us for their preparation</p>
                    </div>
               </div>
            </div>
        </div>
    </section>

    <section className='section jigsaw_stor_mis'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className='jigsaw_m_vi_content'>
            <p className='jsmtes'>OUR MISSION & IMPACT</p>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            </div>
        </div>
    </div>
    </section>

    <section className='section2 jigsaw_stor_mis'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <div className='jigsaw_m_vi_content'>
            <p className='jsmtes'>FROM THE HEADQUATERS</p>
            <h4>Our Leaders</h4>
            <div className='jigsaw_storry_img mt-4 align-itms-center text-center'>
            <img src={jigsaw_storry} className='img-fluid'></img>
            </div>
            </div>
            </div>
        </div>
    </div>
    </section>

    <section className='section2 jigsaw_stor_mispubmic_relation'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={public_relation} className='img-fluid'></img>
            <div className='jigsaw_m_vi_content_ubmic_relation'>
            <p className='mt-2'>For media enquiry email us at <a href="mailto:info@jigsawabacus.com" style={{color:"#08bd80"}}>info@jigsawabacus.com</a></p>
            </div>
            </div>

            <div className='col-md-6'>
            <img src={contact_us} className='img-fluid'></img>
            <div className='jigsaw_m_vi_content_ubmic_relation'>
            <p className='mt-2'>Shoot your questions to us at  <a href="mailto:info@jigsawabacus.com" style={{color:"#08bd80"}}>info@jigsawabacus.com</a></p>
            </div>
            </div>
        </div>
    </div>
    </section>

    </>
  )
}
