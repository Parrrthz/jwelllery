import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credential");
        }else{
            window.alert("Login Successfull");
            navigate("/");
        }

    }

    return (
        <div>
            <div className="container py-5 my-4 bg-info">
                <div className="text-center fw-bolder py-4">
                    <h1>LOGIN</h1>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form mathod="POST" id='reg'></form>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name='email' id='email' placeholder="Enter email" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password' id='password' placeholder="Enter password" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3 d-flex">
                        <input onClick={loginUser} type='submit' name='signin' id='signin' value='LOGIN' className='btn btn-primary rounded-5 px-4 py-2 mt-2 mb-5' />
                        <NavLink to="/signup" className='ps-3 pt-3'>Create An Account</NavLink>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Login