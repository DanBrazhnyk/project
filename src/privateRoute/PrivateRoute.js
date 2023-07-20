import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PrivateRoute =()=>{
    const auth = useSelector((state)=>state.login.isLogined)
    return auth ? <Outlet/> : <Navigate to="/login"  replace/>
}
export default PrivateRoute