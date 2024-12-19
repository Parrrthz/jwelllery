import React from 'react'

const B2b = () => {
    return (
        <div>

            <div className="container py-5 my-4 bg-info">
                <div className="text-center fw-bolder py-4">
                    <h1>QUERIES</h1>
                </div>
            </div>

            <h1 className='text-center fw-bolder'>LET'S CONNECT</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label fw-bold">First Name</label>
                                <input type="text" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label fw-bold">Email Address</label>
                                <input type="email" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label fw-bold">Last Name</label>
                                <input type="text" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label fw-bold">Phone Number</label>
                                <input type="email" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label  fw-bold">Query</label>
                            <textarea className="form-control border border-info rounded-5 py-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-primary rounded-5 px-4 py-2 mt-2 mb-5'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B2b