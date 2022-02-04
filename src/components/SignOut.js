import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

export default function SignOut() {

    const navigate = useNavigate();
    localStorage.removeItem('token');

    useEffect(()=>{
      navigate('/');
       axiosWithAuth()
        .post('https://secret-family-recipe-bw.herokuapp.com/api/auth/logout ')
        .then(()=>{
            localStorage.removeItem('token');
            
        })
        .catch(err=>{
            console.error(err);
        })
    }, [])
  
  return( <div></div>);
}


// const navigate = useNavigate();

//   useEffect(()=>{
//     axiosWithAuth().post('https://secret-family-recipe-bw.herokuapp.com/api/auth/logout')
//     .then(res=>{
//       localStorage.removeItem('token');
//       navigate('/');
//     })
//     .catch(err=>{
//       console.log(err);
//     })
//   },[])
