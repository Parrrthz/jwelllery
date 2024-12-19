import React from 'react'
import data from '../data'
import Item from '../components/item'

const Mangalsutra = () => {
    return (
        <div> <div className="container py-5 my-4 bg-info">
            <div className="text-center fw-bolder py-4">
                <h1>MANGALSUTRA</h1>
            </div>
        </div>
        <div className="row py-5 mb-5 justify-content-center">
                <div className="col-lg-9">
                    <div className="row gy-5">
                    {data.mangalsutrData.map((item, index) => {
                        return (
                            <div className="col-lg-4">
                            <Item img={item.img} name={item.name} price={item.price} item={item} key={index} />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>



            </div>
    )
}

export default Mangalsutra