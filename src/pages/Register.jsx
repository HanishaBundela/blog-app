import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = () =>{
    const [inputs,setInputs]= useState({
        username:"",
        email:"",
        password:"",
    });
    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit =async e =>{
        e.preventDefault();
        try{

            const res = await axios.post("/auth/register",inputs);
            console.log(res);

        }catch(err){
            console.log(err);
        }

    }
    console.log(inputs);
    return(
        <div className = 'auth'>
            <h1>Register</h1>
            <form>
                <input required type= 'text'name = 'username' placeholder='UserName' onChange={handleChange}></input>
                <input required type= 'email'name = 'email' placeholder='email' onChange={handleChange}></input>
                <input required type= 'password'name = 'password' placeholder='Password' onChange={handleChange}></input>
                <button onClick={handleSubmit}>Register</button>
                <span>Have an account?<Link to = "/login">Login</Link>
                </span>
            </form>


        </div>
    );
}
export default Register;