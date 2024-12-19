// import image from './logo.svg';
import '../App.css';
import React from 'react';


function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
  {/* <a className="navbar-brand" href="/"><i className="far fa-envelope"></i>krishamaniya@gmail.com</a> */}
  <a className="navbar-brand" href="/"><img src='../image/pngegg.png' className='img-fluid' width="10%" alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <li className="nav-item px-3"style={{listStyle:'none'}}>
          <a className="nav-link" href="/"><i class="fas fa-search"></i></a>
        </li>
     <li className="nav-item px-3"style={{listStyle:'none'}}>
          <a className="nav-link" href="pages/liked"><i className="far fa-heart"></i></a>
        </li>
        <li className="nav-item px-3"style={{listStyle:'none'}}>
          <a className="nav-link" href="pages/cart"><i className="fas fa-shopping-cart"></i></a>
        </li>
   
  </div>
</nav>
<hr className='m-0 mx-5'/>
        <nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
  {/* <a className="navbar-brand" href="/"><img src='../image/pngegg.png' className='img-fluid' width="30%"/></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item px-3 dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu dropdown-menu">
          <li><a className="dropdown-item" href="pages/about">ABOUT US</a></li>
           <li><a className="dropdown-item" href="pages/trackorder">TRACK ORDER</a></li>
           <li><a className="dropdown-item" href="pages/contact">CONTACT</a></li>
          </ul>
        </li>
        <li className="nav-item px-3 dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collection
          </a>
          <ul className="dropdown-menu dropdown-menu">
          <li><a className="dropdown-item" href="pages/rings">RING<img src='../image/ring.gif' className='w-50' alt='ring'/> </a></li>
           <li><a className="dropdown-item" href="pages/earing">EARRING<img src='../image/otoplasty.gif' className='w-50' alt='earing'/> </a></li>
           <li><a className="dropdown-item" href="pages/necklace">NECKLAC<img src='../image/necklace.gif' className='w-50' alt='necklace'/> </a></li>
            <li><a className="dropdown-item" href="pages/mangalsutra">BYHEART<img src='../image/heart-necklace.gif' className='w-50' alt='mangalsutra'/> </a></li>
          <li><a className="dropdown-item" href="pages/bangles">BANGLES<img src='../image/ring-lamp.gif' className='w-50' alt='bangles'/> </a></li>
          </ul>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="pages/cutomize">Customized Jwellery</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="pages/b2b">B2B Queries</a>
        </li>
      </ul>
    </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item px-3">
          <a className="nav-link" href="pages/login">Login</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="pages/signup">SignUp</a>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
    </div>
//    <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/"><img src='../image/logo1.png' className='w-50'/></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Pages
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="components/about">ABOUT US</a></li>
//             <li><a className="dropdown-item" href="/">OUR SERVICES</a></li>
//             <li><a className="dropdown-item" href="/">FAQs </a></li>
//             <li><a className="dropdown-item" href="/">COMING SOON</a></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Collection
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="components/rings">RING<img src='../image/engagement-ring.gif' className='w-50'/> </a></li>
//             <li><a className="dropdown-item" href="/">EARRING<img src='../image/otoplasty.gif' className='w-50'/> </a></li>
//             <li><a className="dropdown-item" href="/">NECKLAC<img src='../image/necklace.gif' className='w-50'/> </a></li>
//             <li><a className="dropdown-item" href="/">BYHEART<img src='../image/heart-necklace.gif' className='w-50'/> </a></li>
//             <li><a className="dropdown-item" href="/">BANGLES<img src='../image/ring-lamp.gif' className='w-50'/> </a></li>
//           </ul>
//         </li>
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/custom">Customized Jwellery</a>
//         </li>
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/b2b">B2B Queries</a>
//         </li>
//       </ul>
//     </div>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/"><i class="far fa-heart"></i></a>
//         </li>
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/"><i class="fas fa-shopping-cart"></i></a>
//         </li>
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/login"><i class="fas fa-arrow-right"></i>Login</a>
//         </li>
//         <li className="nav-item px-3">
//           <a className="nav-link" href="/signup">SignUp</a>
//         </li>
//       </ul>

//     </div>
//   </div>
// </nav>
  );
}

export default App;
