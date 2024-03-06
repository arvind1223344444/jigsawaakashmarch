import React, { useState } from "react";
import user from "../Images/user.jpg";
import { useParams } from "react-router-dom";
import {API_FETCH_COURSES_PLAYLIST_PAYMENT_LIST_URL,api_path,API_DISCOUNT_COUPON_URL} from "../Services/api";
import { useEffect } from "react";
import axios from "axios";
import RazorpayIntegration from "../Razorpay/RazorpayIntegration";
import styled from "styled-components";

const Wrapper = styled.section`
.Makepayment_section {
  position: relative;
}
 .course_card_pu {
  border-radius: 8px;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 12px;
  box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
}
.user_profile{
    border-radius: 8px;
    border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
}
.course_profile_cart{
    border-radius: 8px;
    border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 16px 32px 0px rgba(233, 238, 242, 0.4);
  transition:0.6s;
  cursor:pointer;

  &:hover{
    margin-top: -5px;
  }

}

@media only screen and (max-width:768px){
    .image_phone{
        display:none;
    }
}

`;

export const Makepayment = () => {
 

  const user_id = localStorage.getItem('user_id');
  //alert(user_id);

  const {id} =useParams();
  //alert(id);

  const imgPath=api_path;
  // image path
  

  const [usercourseget,setusercourseget]=useState([]);
  const [courseTotalAmount,setcourseTotalAmount]=useState();

const userbuycourse=async()=>{
  const coursedata={user_id:user_id,playlist_id:id};
  const fetchuserbuycourse=await axios.postForm(`${API_FETCH_COURSES_PLAYLIST_PAYMENT_LIST_URL}`,coursedata);
console.log(fetchuserbuycourse.data.response);
setusercourseget(fetchuserbuycourse.data.response);
};

useEffect(()=>{
  userbuycourse();
},[]);


//course frees calculation

const coursefees = usercourseget?.course_details?.payments[0]?.fee;
const coursefeesdiscount = usercourseget?.course_details?.payments[0]?.discount;
const TotalFees = (1 - coursefeesdiscount / 100) * coursefees;



const startDateString  = usercourseget?.course_details?.startDate;
const endDateString  = usercourseget?.course_details?.endDate;
const startDate = new Date(startDateString);
const endDate = new Date(endDateString);

const yearDiff = endDate.getFullYear() - startDate.getFullYear();
const monthDiff = endDate.getMonth() - startDate.getMonth();
const dayDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

let result;

if (yearDiff === 0 && monthDiff === 0) {
    result = `${dayDiff} days`;
} else {
    const totalMonths = yearDiff * 12 + monthDiff;
    result = `${totalMonths} months`;
}



const [couponCode, setCouponCode] = useState('');
const [couponResult, setCouponResult] = useState('');
const [cuponInput,setcuponInput]=useState(false); 
const [InvalidCoupancd,setInvalidCoupancd]=useState(false);
const [CourseAmountWCupon,setCourseAmountWCupon]=useState(null);


const handleCouponCodeSubmit = async (e) => {
  e.preventDefault();

  // Check if the coupon code is empty
  if (!couponCode) {
    setcuponInput(true);
   // alert('Please enter a coupon code');
    return;
  }
  setcuponInput(false);
  setInvalidCoupancd(false);

  const couponCodeQueryData = { user_id: user_id, coupon: couponCode };

  try {
    const couponCodeQuery = await axios.postForm(API_DISCOUNT_COUPON_URL, couponCodeQueryData);
    const responseData = couponCodeQuery.data.response;
    
    if (!responseData) {
      alert('Invalid Coupon');
      InvalidCoupancd(true);
      return;
    }

    setCouponResult(responseData);

   
    if (responseData.coupon === couponCode) {
      if (responseData.type === 'Amount') {
        const totalUserAmount = TotalFees - responseData.discount;
        setCourseAmountWCupon(totalUserAmount);
        
      } else if (responseData.type === 'Percent') {
        const totalUserAmount = (1 - responseData.discount / 100) * TotalFees;
        setCourseAmountWCupon(totalUserAmount);
      }
    } else {
      setInvalidCoupancd(true);
      alert('Invalid Coupon');
    }
  } catch (error) {
    console.error('Error fetching coupon data:', error);
  }
};
// useEffect(() => {


// }, [couponResult]);

const [CheckboxDiscount, setCheckboxDiscount] = useState(false);

const handleCheckboxDiscount = (event) => {
  setCheckboxDiscount(event.target.checked);
};

  return (
    
    <>
      <Wrapper className="section">
        <div className="Makepayment_section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
            
              <div className="user_profile"> 
              
              {usercourseget.user_details && (
                 <div className="row align-items-center">
                    <div className="col-lg-10 col-md-12">
                        <h5 className="text-capitalize">{usercourseget.user_details.name}</h5>
                        <p className="m-0"><span className="me-2">Phone Number:- {usercourseget.user_details.mobile} </span> - <span className="me-2"> Email id:- {usercourseget.user_details.email} </span></p>
                        <p className="m-0">State:- {usercourseget.user_details.state}</p> 
                    </div>
                    <div className=" col-md-12 col-lg-2  image_phone">
                       <img src={user}  className="img-fluid " />
                     </div>
                    </div>
                )}
                 </div>
                 

                <div className="course_profile_cart position-relative"> 
                  {usercourseget.course_details &&(
                 <div className="row">
                 <div className=" col-3 col-md-3  d-lg-block  d-md-none d-flex align-items-center">
                       <img src={`${imgPath}${usercourseget.course_details.thumbnail}`}  className="img-fluid"/>
                     </div>
                    <div className="col-8 col-md-9">
                        <p className="m-0 mb-1 fw-bold"> {usercourseget.course_details.playlist}</p>
                        <p className="m-0 mb-1 "> {usercourseget.course_details.desc}</p>
                        {/* <p className="m-0 mb-1">Total Playlist:- {usercourseget.course_details.playlist.length}</p> */}
                       
                      
                        <p> <span className="fw-bold text-muted"> 

                        <p className="mb-0 mt-2">Price : <span className="text-decoration-line-through text-danger"> Rs {usercourseget?.course_details?.payments[0]?.fee}  </span>
                        &nbsp; {TotalFees}
                        </p>
                        </span> 
                         <span className="fw-bold text-muted">  Durations - </span> {result} </p>
                        
                    </div>
                  
                    </div>
                )}
                </div>

              </div>

              <div className="col-md-4">
                
                <div className="Payment_sectionform">

                    <div className="row">
                    <div className="course_card_pu my-2">
                    <h5 className="text-start ">
                    <b> JigsawAbacus Payment</b>
                    </h5>
                    <p className="text-start text-muted">sdsdsd</p>
                    </div>

                    <div className="course_card_pu">
                    <div className=" d-flex  justify-content-between my-2">
                    <p className="text-start m-0">
                     Course Name
                    </p>
                    <p className="text-start m-0"> {usercourseget?.course_details?.playlist}</p>
                    </div>

                    <div className=" d-flex  justify-content-between my-2">
                    <p className="text-start m-0">
                     Course Duration
                    </p>
                    <p className="text-start m-0">{result} </p>
                    </div>

                    <div className=" d-flex  justify-content-between my-2">
                    <p className="text-start m-0">
                     Course Fees
                    </p>
                    <p className="text-start m-0">Rs {usercourseget?.course_details?.payments[0]?.fee} </p>
                    </div>

                    <div className=" d-flex  justify-content-between my-2">
                    <p className="text-start m-0">
                     Course Discount
                    </p>
                    <p className="text-start m-0"> {coursefeesdiscount}%</p>
                    
                    </div>

                  <div className="my-2">
                  
                  <div className="DoYouCupon">
                  <div className="form-check">
                  <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleCheckboxDiscount}
                  >
                  </input>
                  <label className="form-check-label fw-bold" htmlFor="flexCheckDefault">
                   Do you have a Coupon Code ?
                  </label>
                  </div>
                  </div>

                    {CheckboxDiscount && (
                    <>  

                    <form onSubmit={handleCouponCodeSubmit} className="mt-2">
                    {cuponInput && !couponCode && <p className="text-danger mb-1">Please enter a coupon code</p>}

                    {/* {couponResult.coupon === couponCode ? <p className="text-success mb-1">Coupon Code Applied Successful </p> : (couponResult.coupon ? "Coupon Applied But Not Successful" : "")} */}

                    {  couponResult.coupon === couponCode ? <p className="text-success mb-1">Coupon Code Applied Successful </p> : (couponResult.coupon === couponCode ? "Coupon Applied But Not Successful" : "")}

                      
                    <div className="input-group">
                    <input
                    type="text"
                    className="form-control"
                    value={couponCode}
                    onChange={(e) =>{setCouponCode(e.target.value)}}
                    placeholder="Enter Coupon Code"
                    />
                    <button type="submit" className="input-group-text">
                    Apply Coupon
                    </button>
                    </div> 
                    </form>

                    </>
                    )}
                  </div>


                      </div>
                    </div>

                    <div className=" d-flex  justify-content-between my-2 bg-light py-3 px-2 border border-dark">
                    <p className="text-start m-0 fw-bold">
                     Total Amount
                    </p>
                    <p className="text-start m-0"> 
                  {CourseAmountWCupon===null ?  TotalFees : CourseAmountWCupon}
                  
                     Rs</p>
                    </div>

                    {/* <div type="button" class="btn" className="text-center fw-bold  py-2 my-2 bg-danger text-white  border border-dark">
                    Proceed to pay
                    </div> */}

                  <div>
                 
                  <RazorpayIntegration amount= {CourseAmountWCupon===null ?  TotalFees : CourseAmountWCupon} courseID={id}  user_id={user_id}/>
                  {/* <RazorpayIntegration amount= {TotalFees} courseID={id}/> */}
                  </div>

                    
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
