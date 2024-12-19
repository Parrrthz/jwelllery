import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  if (isEmpty) return (<div className="container py-5 my-4 bg-info">
    <div className="text-center fw-bolder py-4">
      <h1>Your Cart Is Empty</h1>
    </div>
  </div>)

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className="col-12 mb-5">
          <div className="container py-5 my-4 #C59485">
            <div className="text-center fw-bolder py-4">
              <h1>Total Items: ({totalItems})</h1>
            </div>
          </div>


          <table className='table table-light table-hover m-0'>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: '6rem' }} alt='img' />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-primary text-white mx-3'>-</button>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-primary text-white me-3'>+</button>
                      <button onClick={() => removeItem(item.id)} className='btn btn-primary text-white'>Remove Item</button>
                    </td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto">
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className='btn btn-primary text-white fw-bold rounded-5 px-4 py-2 mb-4' onClick={() => emptyCart()}>Clear Cart</button>

        </div>
      </div>
    </section>
  )
}

export default Cart