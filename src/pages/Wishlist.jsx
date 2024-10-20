import React from 'react'
import Header from '../components/Header'
import { useSelector,useDispatch } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'
const Wishlist = () => {
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const handleCart = (product)=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(removeWishlistItem(product.id))
    if(existingProduct){
      alert("Product quantity is increasing!!!")
    }
  }
  return (
    <>
        <Header/>
    <div style={{paddingTop:'100px'}} className="container px-4 mx-auto">
{ 
userWishlist?.length>0?
  <>
<h1 className="text-5xl font-bold text-red-500">My Wishlist</h1>
<div className="grid grid-cols-4 gap-4 px-4">
{ 
userWishlist?.map(product=>(
  <div className="rounded border p-2 shadow">
    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
    <div className="text-center">
      <h3 className='text-xl font-bold'>{product?.title}</h3>
      <div className="flex justify-evenly mt-3">
  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="text-xl"> <i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
  <button onClick={()=>dispatch(handleCart(product))} className="text-xl"> <i className="fa-solid fa-cart-plus text-green-600"></i></button>

</div>    </div>
  </div>

)) 
}
</div>
</>
:
<div className='flex flex-col justify-center items-center'>
<img className='w-100 h-1/2' src="https://www.gospeedy.co.in/images/empty.gif" alt="empty cart" />
<h1 className='text-yellow-600 font-bold text-3xl my-5'>Your Wishlist is Empty</h1>
</div>
}    </div>
</>
  )
}

export default Wishlist
