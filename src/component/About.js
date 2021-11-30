import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const  About=() =>{
    const location=useLocation()
    const navigate=useNavigate()
    console.log(navigate)

    const click=()=>{
        navigate("/home")
    }
    return (
        <div>
            <h1 className="h-div">This is {location.pathname.replace("/",'')} page</h1>
           <button onClick={click}>Go Back</button>
        </div>
    )
}

export default About;
