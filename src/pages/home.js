import React from "react";
import '../css/style.css';

const Home = () =>{
    return(
      <>
        <div>
      <div id="carouselExampleCaptions" className="carousel slide">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../image/c6.webp" className="carousel-control-width" width="100%" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Shine bright like a <br /> diamond</h5> */}
        {/* <p>Its even better when you wear it!!</p> */}
        <button className='btn fw-bold px-4 rounded-5 py-3'>Shop Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../image/c7.webp" className="carousel-control-width" width="100%" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>the jewels that <br /> defines you</h5>
        <p>Its even better when you wear it!!</p>
        <button className='btn fw-bold px-4 rounded-5 py-3'>Shop Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../image/about1.jpg" className="carousel-control-width" width="100%" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Diamonds:<br /> the epitome of style</h5>
        <p>Its even better when you wear it!!</p>
        <button className='btn fw-bold px-4 rounded-5 py-3'>Shop Now</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

  
      <div className="container-fluid">
        <div className="row pt-5 my-5 justify-content-center">
          <div className="col-lg-4 my-5 pe-4">
            <h1 className='fw-italic'>WE KNOW<br/> YOU WILL<br/> CHOOSE<br/> AURAMENT</h1>
            <p className='fs-6 pt-3'>We Focus On Choosing Your Aura And Sell Real<br/> Diamond Gold Jewellery With Exclusive, 
            Attractive <br/>Designs Which Are Liked By The New Generation<br/> The Most. We Believe In Customer Satisfaction And <br/>Strive To Provide The Best Quality Products And<br/> Services.
            If You're Looking For Something Special,<br/> Aurament Is The Place For You. With Our Unique<br/> Designs And Superlative Quality, 
            We Guarantee<br/> That You Will Find Something That You Will <br/>Treasure Forever</p>
          </div>
          <div className="col-lg-3 my-4 p-0">
          <img src="../image/img1.jpg" className="rounded-start-2 img-fluid w-50" alt="..."/>
         </div>
          <div className="col-lg-2 my-5 p-0">
          <img src="../image/cars2.webp" className="rounded-end img-fluid w-70 " alt="..."/>
          </div>
        </div>
      </div>

      <div className="container py-5 bg-info">
        <div className="text-center py-4">
          <p>WITH AURAMENT</p>
          <h1 className='fw-bold'>TUNE YOUR AURA</h1>
          <div className="row py-5 justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3">
                  <div className="card bg-info border-0">
                    <img src="../image/carousel2.webp" className="card-img-top" alt="carousle1"/>
                    <div className="card-body text-start">
                      <h5 className="card-title">Abstracr Earrings</h5>
                      <p className="card-text">₹28,954.50-₹32,835.00</p>
                      <div className="d-flex">
                        <a className="nav-link" href="/"><i class="far fa-heart"></i></a>
                        <a className="nav-link px-3" href="/"><i class="fas fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3">
                  <div className="card bg-info border-0">
                    <img src="../image/nec5.webp" className="card-img-top" alt="carousle2" />
                    <div className="card-body text-start">
                      <h5 className="card-title">Abstracr Earrings</h5>
                      <p className="card-text">₹28,954.50-₹32,835.00</p>
                      <div className="d-flex">
                        <a className="nav-link" href="/"><i class="far fa-heart"></i></a>
                        <a className="nav-link px-3" href="/"><i class="fas fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3">
                  <div className="card bg-info border-0">
                    <img src="../image/carousel1.webp" className="card-img-top" alt="carousle3"/>
                    <div className="card-body text-start">
                      <h5 className="card-title">Abstracr Earrings</h5>
                      <p className="card-text">₹28,954.50-₹32,835.00</p>
                      <div className="d-flex">
                        <a className="nav-link" href="/"><i class="far fa-heart"></i></a>
                        <a className="nav-link px-3" href="/"><i class="fas fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3">
                  <div className="card bg-info border-0">
                    <img src="../image/nec3.webp" className="card-img-top" alt="nec"/>
                    <div className="card-body text-start">
                      <h5 className="card-title">Abstracr Earrings</h5>
                      <p className="card-text">₹28,954.50-₹32,835.00</p>
                      <div className="d-flex">
                        <a className="nav-link" href="/"><i class="far fa-heart"></i></a>
                        <a className="nav-link px-3" href="/"><i class="fas fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            



          </div>
          <button className='btn btn-primary fw-bold px-4 mb-2   rounded-5 py-3'>Shop Now</button>

        </div>
        
      </div>

      <div className="container-fluid my-4 py-5">
                <h1 className='fw-bold text-center'>BENEFITS JUST FOR YOU</h1>
                <div className="row justify-content-center py-5">
                    <div className="col-lg-3">
                        <div className="card p-3 bor-card">
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-award text-primary fs-1"></i></h5>
                                <h5 className="card-subtitle py-4">Certificate Of Quality</h5>
                                <p className="card-text f">Knowing That The Diamond You Are <br />Purchasing Is Genuine And Authentic <br />Is Essential When Buying It. For All Of <br />Their Real Diamond Gold Jewellery,<br /> Aurament Offers Certificates Like<br /> SGL, IGI, And BIS HUID Hallmark. The<br /> Consumer Can Be Assured By A <br />Certificate That The Diamond Has <br />Been Independently Verified As<br /> Having All The Properties Listed In<br /> That Report.</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3">
                        <div className="card p-3 bor-card">
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-shield-alt text-primary fs-1"></i></h5>
                                <h5 className="card-subtitle py-4">Buy Back Guarantee</h5>
                                <p className="card-text f">Knowing That The Diamond You Are <br />Purchasing Is Genuine And Authentic <br />Is Essential When Buying It. For All Of <br />Their Real Diamond Gold Jewellery,<br /> Aurament Offers Certificates Like<br /> SGL, IGI, And BIS HUID Hallmark. The<br /> Consumer Can Be Assured By A <br />Certificate That The Diamond Has <br />Been Independently Verified As<br /> Having All The Properties Listed In<br /> That Report.</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3">
                        <div className="card p-3 bor-card">
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-rupee-sign text-primary fs-1"></i></h5>
                                <h5 className="card-subtitle py-4">Affordable Prices</h5>
                                <p className="card-text f">Knowing That The Diamond You Are <br />Purchasing Is Genuine And Authentic <br />Is Essential When Buying It. For All Of <br />Their Real Diamond Gold Jewellery,<br /> Aurament Offers Certificates Like<br /> SGL, IGI, And BIS HUID Hallmark. The<br /> Consumer Can Be Assured By A <br />Certificate That The Diamond Has <br />Been Independently Verified As<br /> Having All The Properties Listed In<br /> That Report.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container bg-primary py-5">
                <div className="row my-4 justify-content-center">
                    <div className="col-lg-3">
                        <img src='../image/about4.webp' className='img-fluid rou' alt="about" />
                    </div>
                    <div className="col-lg-3 my-5 py-5">
                        <img src='../image/c3.webp' className='img-fluid bor mt-5' alt="about2"/>
                    </div>
                    <div className="col-lg-3 ms-3 text-white">
                        <h6 className='text-info'>NEW COLLECTION</h6>
                        <h1 className='fw-bold py-2'>ME AND<br/> MYSELF<br/> WITH<br/> AURAMENT</h1>
                        <p>Your jewellery defines your taste. Your taste defines your uniqueness and personality. It altogether defines you and showcases your aura. Aurament lets you choose your aura by your favourable designs also with customization available. Hence, Aurament - Choose your aura!</p>
                        <button className='btn btn-info text-primary fw-bold px-4 mt-5 rounded-5 py-3'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 my-5">
        <div className="text-center">
          <h6 className='text-primary'>OUR PRODUCTS</h6>
          <h1 className='fw-bold'>PRODUCTS</h1>
        </div>

        <div className="row my-5 justify-content-center">
          <div className="col-lg-7">



            <ul className="nav nav-pills mt-2" id="pills-tab" role="tablist">
              <li className="nav-item px-3" role="presentation">
                <button className="nav-link active" id="pills-ear-tab" data-bs-toggle="pill" data-bs-target="#pills-ear" type="button" role="tab" aria-controls="pills-home" aria-selected="true">EarRings</button>
              </li>
              <li className="nav-item px-3" role="presentation">
                <button className="nav-link" id="pills-man-tab" data-bs-toggle="pill" data-bs-target="#pills-man" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mangal Sutra</button>
              </li>
              <li className="nav-item px-3" role="presentation">
                <button className="nav-link" id="pills-neck-tab" data-bs-toggle="pill" data-bs-target="#pills-neck" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Necklace</button>
              </li>
              <li className="nav-item px-3" role="presentation">
                <button className="nav-link" id="pills-ring-tab" data-bs-toggle="pill" data-bs-target="#pills-ring" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Rings</button>
              </li>
              <li className="nav-item px-3" role="presentation">
                <button className="nav-link" id="pills-ban-tab" data-bs-toggle="pill" data-bs-target="#pills-ban" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Bangles</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-ear" role="tabpanel" aria-labelledby="pills-ear-tab" tabindex="0">
            <div className="row pt-3 justify-content-center">
              <div className="col-lg-9">
                <div className="row gy-5">
                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/e1.webp" className="card-img-top p-3" alt="earing1" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ear2.jpg" className="card-img-top p-3" alt="earing2"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ear3.jpg" className="card-img-top p-3" alt="earing3" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/e5.webp" className="card-img-top p-3" alt="earing4"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/e6.jpg " className="card-img-top p-3"alt="earing5" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ear1.jpg" className="card-img-top p-3" alt="earing6"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Earrings</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>

          </div>
          <div className="tab-pane fade" id="pills-man" role="tabpanel" aria-labelledby="pills-man-tab" tabindex="0">
            <div className="row pt-3 justify-content-center">
              <div className="col-lg-9">
                <div className="row gy-5">
                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/mang1.jpg" className="card-img-top p-3" alt="mang1" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/mang2.jpg" className="card-img-top p-3" alt="mang2"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/mang3.jpg" className="card-img-top p-3" alt="mang3"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/mang4.jpg" className="card-img-top p-3" alt="mang4"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/m3.jpg" className="card-img-top p-3" alt="mang5"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/m1.jpg" className="card-img-top p-3" alt="mang6"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Mangalsutra</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>
          <div className="tab-pane fade" id="pills-neck" role="tabpanel" aria-labelledby="pills-neck-tab" tabindex="0">
            <div className="row pt-3 justify-content-center">
              <div className="col-lg-9">
                <div className="row gy-5">
                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec1.webp" className="card-img-top hi p-3" alt="nec1"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec2.jpg" className="card-img-top hi p-3" alt="nec2"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec3.jpg" className="card-img-top hi p-3"alt="nec3" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec4.jpg" className="card-img-top hi p-3" alt="nec4"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec5.jpg" className="card-img-top hi p-3" alt="nec5"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/nec6.jpg" className="card-img-top hi p-3"alt="nec6" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Necklace</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>
          <div className="tab-pane fade" id="pills-ring" role="tabpanel" aria-labelledby="pills-ring-tab" tabindex="0">
          <div className="row pt-3 justify-content-center">
              <div className="col-lg-9">
                <div className="row gy-5">
                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring1.webp " className="card-img-top hi p-3" alt="ring1"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring2.jpg" className="card-img-top hi p-3" alt="ring2"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring3.jpg" className="card-img-top hi p-3" alt="ring3"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring4.jpg" className="card-img-top hi p-3" alt="ring4"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring5.jpg" className="card-img-top hi p-3" alt="ring5"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/ring6.jpg" className="card-img-top hi p-3" alt="ring6"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Ring</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>
          <div className="tab-pane fade" id="pills-ban" role="tabpanel" aria-labelledby="pills-ban-tab" tabindex="0">
          <div className="row pt-3 justify-content-center">
              <div className="col-lg-9">
                <div className="row gy-5">
                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang1.jpg" className="card-img-top hi p-3" alt="bang1"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang2.jpg" className="card-img-top hi p-3" alt="bang2" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang3.jpg" className="card-img-top hi p-3" alt="bang3"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang4.jpg" className="card-img-top hi p-3" alt="bang4"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang5.jpg" className="card-img-top hi p-3" alt="bang5" />
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-4">
                    <div className="card border border-info rounded-0">
                      <img src="../image/bang6.jpg" className="card-img-top hi p-3" alt="bang6"/>
                      <div className="card-body text-start">
                        <h5 className="card-title">Abstracr Bangles</h5>
                        <p className="card-text">₹28,954.50-₹32,835.00</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>

        </div>
      </div>
    
      
      </>
)
}





export default Home