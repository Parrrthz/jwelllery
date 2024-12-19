// // src/pages/LikedItems.js

import React from 'react';
import { useLikedItems } from '../context/LikedItemsContext';

const LikedItems = () => {
    const { likedItems, removeItem,updateItemQuantity } = useLikedItems();

    return (
        <div>
            <div className='row justify-content-center'>
        <div className="col-12 mb-5">
        <div className="container py-5 my-4 #C59485">
            <div className="text-center fw-bolder py-4">
              <h1>Liked Items</h1>
            
          
          <table className='table table-light table-hover m-0'>
            <tbody>
                {likedItems.length > 0 ? (
                    likedItems.map((item, index) => (
                        <div key={index} className="liked-item">
                            <img src={process.env.PUBLIC_URL + item.img} alt={item.name} style={{ height: '100px' }} />
                            {/* <div>{item.name}</div>
                            <div>{item.price}</div> */}
                          
                            {/* <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-primary text-white me-3'></button> */}
                      <button onClick={() => removeItem(item.id)} className='btn btn-primary text-white'>Remove</button>
                      {/* <i className="fas fa-heart"></i> */}

                        </div>
                    ))
                ) : (
                    <p>No liked items yet.</p>
                )}
                 </tbody>
                 </table>
            </div>
            </div>
          </div>
            </div>
            </div>
        // </div>
    );
};

export default LikedItems;

// import React from 'react';

// const LikedItems = ({ likedItems = [] }) => {
//   return (
//     <div>
//       <h2>Liked Items</h2>
//       <ul>
//         {likedItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LikedItems;

