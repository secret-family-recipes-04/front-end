import React from "react";
import { Navigate } from "react-router";


function PrivateRoute({ children }) {
 const token = localStorage.getItem('token');
 return token ? children : <Navigate to='/login' />
}

export default PrivateRoute;


// import React from 'react';
// import { Route } from 'react-router-dom';
// import { Navigate } from 'react-router';

// const PrivateRoute = ({component:Component, ...rest})=>{
//     return <Route {...rest} render={(props)=>{
//         if(localStorage.getItem('token')){
//             return(<Component {...props}/>);
//         } else {
//             return <Navigate to='/login'/>
//         }
//     }}/>
// }

// export default PrivateRoute;