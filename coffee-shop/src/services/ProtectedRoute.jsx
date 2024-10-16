import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const protectedRoute = () => {

    const auth = localStorage.getItem("loggedin");
    return auth ? <Outlet /> : <Navigate to={"/login"} />
}

export default protectedRoute

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, loggeInUser }) => {
//   if (!loggeInUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
