import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });

    let name, value;
    const handleTnputs = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration successfull");
            console.log("Registration successfull");

            navigate("/login");
        }
    }

    return (
        <div>
            <div className="container py-5 my-4 bg-info">
                <div className="text-center fw-bolder py-4">
                    <h1>SIGNUP</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                <form method='POST' id='register'>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Name</label>
                        <input value={user.name} onChange={handleTnputs} type="text" name='name' id='name'  placeholder="Your Name" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input value={user.email} onChange={handleTnputs} type="text" name='email' id='email'  placeholder="Your Email" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Mobile Number</label>
                        <input value={user.phone} onChange={handleTnputs} type="number" name='phone' id='phone' placeholder="Your Mobile Number" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Profession</label>
                        <input value={user.work} onChange={handleTnputs} type="text" name='work' id='work'  placeholder="Your Proffesion" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input value={user.password} onChange={handleTnputs} type="password" name='password' id='password'  placeholder="Your Password" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Confirm Password</label>
                        <input value={user.cpassword} onChange={handleTnputs} type="password" name='cpassword' id='cpassword' placeholder="Your Confirm Password" className="form-control border border-info rounded-5 py-2" />
                    </div>
                    <div className="mb-3">
                        <input onClick={PostData} type='submit' name='signup' id='signup' value='REGISTER' className='btn btn-primary rounded-5 px-4 py-2 mt-2 mb-5' />
                    </div>
                </form>
                </div>


            </div>
        </div>
    )
}

export default Signup