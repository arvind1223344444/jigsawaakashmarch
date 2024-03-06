import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Security() {

    const   Navigate=useNavigate();
        const sessionSet = localStorage.getItem('user_name');

      useEffect(()=>{
            if(!localStorage.getItem('user_name')){
                Navigate("/");
            }
            else{
                
            }
        },[Navigate])
      

  return ;
}
