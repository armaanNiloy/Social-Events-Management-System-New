import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log('pathname', location.pathname);
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;