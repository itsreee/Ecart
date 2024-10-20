import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]= useState(0)

  useEffect(()=>{
   if(userCart?.length>0){
    setCartTotal(userCart.map(item=>item.totalPrice)?.reduce((a,b)=>a+b))
   }
  },[userCart])

  const handleDecQuantity = (product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert("Order confirmed.. Thankyou for purchasing with us")
    navigate('/')
  }
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      {
        userCart?.length>0 ?
      <>
      <h1 className='text-5xl font-semibold text-green-500'> Cart-Summary</h1>
      <div className="grid grid-cols-3 gap-3 mx-auto mt-2" >
        <div className="col-span-2 border rounded shadow p-5" >
          {/**/}
          <table className="table-auto w-full">
            <thead>
              <tr>
               <td className="font-semi-bold">#</td>
               <td className="font-semi-bold">Name</td>
               <td className="font-semi-bold">Image</td>
               <td className="font-semi-bold">Quantity</td>
               <td className="font-semi-bold">Price</td>
               <td className="font-semi-bold">...</td>
              </tr>
            </thead>
            <tbody>
              {
                userCart?.map((product,index)=>( 
              <tr key={product?.id}>
                <td>{index+1}</td>
                <td>{product?.title}</td>
                <td>
                <img width={'76px'} height={"70px"} src={product?.thumbnail} alt="" />
                </td>
                <td>
                  <div className="flex">
                  <button className="font-bold" onClick={()=>handleDecQuantity(product)} >-</button>
                  <input type="text" style={{width:'40px'}} className='border p-1 rounded ms-2 me-2'  value={product?.quantity} readOnly/>
                  <button className="font-bold" onClick={()=>dispatch(incQuantity(product))}>+</button>
                </div>
                </td>
                <td>${product?.totalPrice}</td>
                <td><button onClick={()=>dispatch(removeCartItem(product?.id))}><i className="fa solid fa-trash text-red-600"></i></button></td>
              </tr>
               ))}
            </tbody>
          </table>
          <div className="float-right mt-4">
            <button className="bg-red-600 text-white p-2 rounded me-3" onClick={()=>dispatch(emptyCart())}>EMPTY CART</button>
            <Link to={'/'} className="bg-blue-600  text-white p-2 rounded me-3 ">SHOP MORE</Link>
          </div>
        </div>
        <div className="col-span-1 border rounded shadow p-5">
          {/* checkout */}
        <h1 className='text-2xl font-bold'>Total Amount: <span className='text-red-500'>${cartTotal} </span></h1> <br />
        <button className='w-full bg-green-500 rounded p-5 text-white font-bold mt-2 text-xl' onClick={handleCheckout}>checkout </button>
        </div>
      </div>
      </>
      :
      <div className='flex flex-col justify-center items-center'>
      <img className='w-100 h-1/2' src="https://www.gospeedy.co.in/images/empty.gif" alt="empty cart" />
      <h1 className='text-yellow-600 font-bold text-3xl my-5'>Your Cart is Empty</h1>
</div>
}
    </div>
    </>
  )
}

export default Cart