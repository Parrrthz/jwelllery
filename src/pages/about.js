import React from "react";

const About = () =>{
    return (
        <div>
            <div className="container py-5 my-4 bg-info">
                <div className="text-center fw-bolder py-4">
                    <h1>ABOUT US</h1>
                    <p className='text-primary'>Home | About Us</p>
                </div>
            </div>

            <div className="row py-5 justify-content-center">
                <div className="col-lg-3">
                    <h6 className='text-primary'>OUR COMPANY</h6>
                    <h1 className='fw-bolder'>WHY DID WE <br />CHOOSE TO<br /> BE KNOWN AS<br /> AURAMENT</h1>
                    <p className='f'>Turpis duis nisl iaculis tincidunt fames feugiat consequat, sed blandit. Donec tempor ut suspendisse amet. Vulputate consequat pharetra sollicitudin pellentesque tristique. Nisi, viverra volutpat tellus nisi, mauris magna quis tristique lobortis. Pharetra porta cursus facilisis non dui sed sit. Rutrum dolor varius adipiscing quam nisl etiam. Tempus tempor egestas vitae molestie pulvinar integer posuere id lobortis.</p>
                </div>
                <div className="col-lg-3">
                    <img src='../image/c2.webp' className='img-fluid aboutr'/>
                </div>
                <div className="col-lg-2 pt-5">
                    <img src='../image/e3.jpg' className='img-fluid bor'/>
                </div>
            </div>


            {/* <div className="container p-4  my-5 bg-primary text-white">
                <div className="row py-5 my-5 justify-content-center">
                    <div className="col-lg-6">
                        <h1>Brand Thought</h1>
                        <p className='f py-4'>Jewellery Is One Of The Things A Woman Admires And The Most When It Is Of Her Choice. Initially Only Women Used To Wear Jewellery To Enhance Their Beauty Or To Show Their Status,To Attract, To Show Power, For The Attention, To Present Their Community, Etc. From Sea Shells, Feathers, Bones, To Pebbles, Stones, Gems, Metals And Now Silver, Gold, Diamonds; The Evolution Of Jewellery Has Been Drastic. Looking Back At The History, Only Men Used To Work And Earn And Women Used To Wear Jewellery. The Roles Have Revolutionised And A Good Change Is Evident. Both Men And Women Consider Working And Wearing Jewellery Today. Not Only Men And Women, But There Are More Genders In Our Society. They Prefer Wearing Jewellery As Well, Who Choose What They Want And Choose Jewellery Likewise Your Choice Makes You Who You Are! Humans And Their Choices Have Evolved. All The Genders Now Prefer Wearing Jewellery And Present Their Real Selves. A Good Choice Is What Gives You Satisfaction. Let Aurament Satisfy Your Heart And Mind!</p>
                        <button className='btn btn-info text-primary fw-bold px-4 rounded-5 py-3'>Shop Now</button>
                    </div>
                    <div className="col-lg-4">
                        <img src='Images/about3.jpg' className='img-fluid bor'/>
                    </div>
                </div>
            </div> */}

            {/* <div className="row py-5 mb-5 justify-content-center">
                <div className="col-lg-2 py-4">
                    <img src='Images/about4.webp' className='img-fluid rou'/>
                </div>
                <div className="col-lg-2 pt-5 mt-1">
                    <img src='Images/about5.jpg' className='img-fluid bor'/>
                </div>
                <div className="col-lg-4">
                    <h6 className='text-primary'>OUR BRAND</h6>
                    <h1 className='fw-bolder py-3'>DO YOU KNOW <br/>WHAT PEOPLE<br/> FEEL ABOUT<br/> JEWELLERY?</h1>
                    <p>According To A Survey Done, Most Of The People Consider Jewellery As A Part Of Themselves And Hence They Choose Jewellery According To Their Personality. Nowadays Youth Like Wearing Light Weight Jewellery For Their Daily Wear Use.</p>
                </div>
            </div> */}
        </div>
    )
}
export default About