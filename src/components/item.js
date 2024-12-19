import React from 'react'
import { useCart } from 'react-use-cart'        
import { useNavigate } from 'react-router-dom';
import { useLikedItems } from '../context/LikedItemsContext';
import '../css/style.css';

const Item = (props,onLike, liked,item ) => {
    const { addItem } = useCart();
    const { addLikedItem } = useLikedItems();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addItem(props.item);
        navigate('../pages/cart');
      }
    const handleLikeItem = (event) => {
      event.preventDefault(); // Prevents default link behavior
      addLikedItem(props.item);
      navigate('../pages/liked'); 
      if (typeof onLike === 'function') {
        onLike(item);
    }
  };


  return (
    <div>
                <div className="card border border-info rounded-0">
                    <img src={process.env.PUBLIC_URL + props.img} className="card-img-top p-3" style={{ height: '400px' }} alt='img1'/>
                    <div className="card-body text-start">
                    
                        <h5 className="card-title">{props.name}</h5>
                        
                        <p className="card-text">{props.price}</p>
                        <div className='d-flex'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>    
                        </div>
                       
                       <br/>
                        <button  className='btn btn-info fw-bold px-4 rounded-5 py-2 mb-3'>Buy Now</button>
                        {/* <div className="d-flex">
                        <a className="nav-link" href="/" onClick={handleLikeItem}><i className="far fa-heart"></i></a>
                        <a className="nav-link px-3" href="/"><i class="fas fa-shopping-cart"></i></a>
                      </div> */}
                      <div className="d-flex">
                        <a 
                            className="nav-link" 
                            href="/" 
                            onClick={handleLikeItem}
                        >
                             <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
                        </a>
                        <a 
                            className="nav-link px-3" 
                            href="/" 
                            onClick={handleAddToCart}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            
                        </a>
                       
                       
                       
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Item