import React, { ReactNode } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import SignIn from './Routes/SignIn';



const ProtectedRoute = (WrappedComponent:any) => {
    return ()=>{
        const user = localStorage.getItem('user_id');
      
        if (!user) {
          return <SignIn/>
        }
      
        return <WrappedComponent />;
    }

};

export default ProtectedRoute;