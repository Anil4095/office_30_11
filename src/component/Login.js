import React from 'react'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login=()=> {


    const uniqueTost=()=>{
        
        toast.success('LogIn Successful',{
            position:"top-center"
        })
    }
    return (
        <>
        <div >
            <h1 className="h3-div">welcome to login page</h1>
            <button className="btn-div" onClick={uniqueTost}>Sign In</button>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Login
