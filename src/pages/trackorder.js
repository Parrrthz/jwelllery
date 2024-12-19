import React from 'react'

const TrackOrd = () => {
  return (
    <div>
      <div className="container py-5 my-4 bg-info">
        <div className="text-center fw-bolder py-4">
          <h1>TRACK YOUR ORDER</h1>
          <p className='text-primary'>Home | Track Your Order</p>
        </div>
      </div>
      <p className='text-center text-secondary fw-bold'>To track your order please enter your Order ID in the box below and press the "Track" button.</p>
      <div className="row py-4 justify-content-center">
        <div className="col-lg-4">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label fw-bold">Order No</label>
            <input type="number" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" placeholder="Enter your order no.."/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label fw-bold">Billing Email</label>
            <input type="email" className="form-control border border-info rounded-5 py-2" id="exampleFormControlInput1" placeholder="Enter your billing email..."/>          
          </div>
          <button className='btn btn-primary rounded-5 px-4 py-2 mt-2 mb-5'>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default TrackOrd