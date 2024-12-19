import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid px-5 pt-5 pb-2 bg-primary text-white">
                <div className="row pb-5">
                    <div className="col-lg-4">
                        <h5>NEWSLETTER</h5>
                        <p>Get Now Free 20% Discount All Products On Your First Order!</p>
                        <form>
                            <input type='text' className='rounded-5 border-0 px-3 py-2' placeholder='Enter Email Address..'/>
                            <button className='btn btn-success fw-bold px-4 rounded-5 py-2 text-white ms-3'>SUBMIT</button>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <h5>QUICK CONTACT</h5>
                        <p className='pb-2'>If You Have Question, Please Use Our 24-Hour Helpline</p>
                        <a href='/' className='text-white border px-5 border-white rounded-5 py-2 text-decoration-none fs-5'><i className="fas fa-phone-alt mx-2"></i>9876543212</a>
                    </div>
                    <div className="col-lg-4">
                        <h5 className='pb-3'>FOLLOW US</h5>
                        <a href='/' className='text-white fs-5 bg-info rounded-circle px-3 me-3 py-2'><i class="fab fa-facebook-f"></i></a>
                        <a href='/' className='text-white fs-5 bg-info rounded-circle px-3 me-3 py-2'><i class="fab fa-instagram"></i></a>
                        <a href='/' className='text-white fs-5 bg-info rounded-circle px-3 me-3 py-2'><i class="fab fa-linkedin-in"></i></a>

                      
                    </div>
                </div>
                <hr/>
                <p className='text-center pt-5'>Copyright ©️ 2023 by SH</p>
            </div>
        </div>
    )
}

export default Footer