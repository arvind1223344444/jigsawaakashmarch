import React from 'react'
import '../Freeonlinesubscribe/Freeonlinesubscribe.css';
import tick from '../../Images/tick.svg'
export default function Freeonlinesubscribe() {
  return (
    <>
    <section className='section  subscribe_ad' style={{backgroundColor:'#F4F5FB'}}>
        <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-8 col-lg-9'>
                <div className='subs_heading'>
                    <h3>Watch free online classes</h3>
                </div>
                <div className='css-cohelc-Point'>
                    <div className='css-1dr1cmx-Point eakqydp4'>
                    <img src={tick} alt="" className='img-fluid'></img>
                    <p className='p2_variant'>Chat live with educators</p>
                    </div>
                   
                    <div className='css-1dr1cmx-Point eakqydp4'>
                    <img src={tick} alt={{tick}} className='img-fluid'></img>
                    <p className='p2_variant'>Attempt interactive polls</p>
                    </div>
                </div>
                 </div>

                <div className='col-md-4 col-lg-3'>
                <div className='subs_heading'>
                <div className="subscription_btn ms-auto">
                <button className="btn btn-primary Subscription_btn" type="button">Subscription Plans</button>
                </div>
                </div>
                </div>
            
            </div>
        </div>
    </section>

    </>
  )
}
