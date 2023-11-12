import React, { Component, useRef } from 'react';
import Header from './Header';

function Login() {

    const email = useRef();
    const password = useRef();


    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        console.log("email =", email.current.value);
        console.log("password =", password.current.value);
    }



    return (
    <>
 
    
    <form onSubmit={handleSubmit} className='w-full h-full flex justify-normal items-center flex-col gap-5'>

        <div className='w-full flex justify-center items-center'>

            <label htmlFor="email">Email: </label>
            <input ref={email} type="email" className='form-control border-[1px] rounded-xl border-[#666666]' id="email" />

        </div>
        <div className='w-full flex justify-center items-center'>
            <label htmlFor="password">Password: </label>
            <input ref={password} type="text" className='form-control border-[1px] rounded-xl border-[#666666]' id='password' />

        </div>

        <button className='w-20 bg-blue-600 rounded-xl text-white '  >Login</button>


    </form>
    </>
    );
}

export default Login;