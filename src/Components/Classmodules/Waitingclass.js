import React from 'react'

export default function Waitingclass() {
    const textStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: 'inline-block',
        position: 'relative',
        textDecoration: 'underline',
        textDecorationColor: 'transparent',
        textDecorationStyle: 'wavy',
        textDecorationLine: 'underline',
        textDecorationSkipInk: 'none',

        
      };
      
  return (
    <>
      <div className="card shadow mb-4" style={{height:"330px",overflow:"auto"}}>

<div className="card-body"style={{background:"#faf3ed"}} >
<div className='iaformborder stickbg_color d-flex align-items-center justify-content-center align-content-center  h-100'style={{background:"rgb(150 192 144)", border:"5px solid #e38c44"}}>
    <h1 className='fst-italic fw-bold h-5' style={textStyle}>Live  Class Cooming soon</h1>
    
</div>

</div>
</div>
    </>
  )
}
