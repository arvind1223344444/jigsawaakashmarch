import React, { useEffect, useState } from 'react';
import { loadScript } from './Utils';
import {API_COURSES_PAYMENT_URL} from '../Services/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const user_id=localStorage.getItem('user_id');
//  alert(user_id);
//const [paymentStatus,setpaymentStatus]=useState([]);

const RazorpayIntegration = ({amount,courseID,user_id}) => {

  const Navigate=useNavigate();

  const [Paypayment_id, setPaypayment_id] = useState();
  const payId = Paypayment_id;
 
  const handlePayment = () => {
    loadRazorpay();
  };

  const loadRazorpay = async () => {
    await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    const options = {
      key: 'rzp_test_uyjwTZ4f2Hw97d',
      amount: amount * 100,
      currency: 'INR',
      name: 'Jigsaw',
      description: 'Payment for Purchase',
      handler: (response) => {
      //alert(response.razorpay_payment_id);
      //  console.log(response);
      setPaypayment_id(response.razorpay_payment_id);
     
     // console.log(response.razorpay_payment_id);
     // Handle the payment response here
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
   // Navigate("/Enrollcourses");

  };

  

const paymentdone= async()=>{
  if (!user_id) {
    alert('User ID is not defined.');
    return;
  }
  const paymnetdata= {
    user_id:user_id,
    course_id:courseID,
    transcation_id:payId,
    payment_status:'done'
  };
  const paymentdoneqry=await axios.postForm(`${API_COURSES_PAYMENT_URL}`,paymnetdata);
console.log(paymentdoneqry.data.response);
if(paymentdoneqry.data.response){
  console.log(paymentdoneqry.data.response);
//alert("payment Done");
Navigate("/Enrollcourses");
}else{
  alert("not done");
}

};

useEffect(() => {
  if (Paypayment_id ) {
    paymentdone();
  }
}, [Paypayment_id,user_id]);  
  return (
    <>
        <div type="button" class="btn" className="text-center fw-bold  py-2 my-2 bg-danger text-white  border border-dark" onClick={handlePayment}>
        Proceed to pay
        
        </div>
    </>
  );
};

export default RazorpayIntegration;
