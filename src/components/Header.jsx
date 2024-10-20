import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slices/productSlice'
const Header = ({insideHome}) => {
  const dispatch  = useDispatch ()
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist=useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex bg-yellow-500 fixed w-full p-5'>
        <Link className='text-white font-bold' to ={'/'}><i className="fa-solid fa-truck-fast me-1"></i>
        ECart</Link>
        <ul className='flex-1 text-right'>
          {insideHome &&   
          
            <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-1' type="text" placeholder='Search Product'/></li>
             }
           <li className='list-none inline-block px-5'><Link to={'/wishlist'} className='text-white font-bold'><i className='fa-solid fa-heart text-red-600'></i> Wishlist <span className='rounded bg-black p-1'>{userWishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><i class="fa-solid fa-cart-shopping text-green-600"></i><Link  className='text-white' to={'/cart'}>Cart <span className='rounded bg-black p-1'>{userCart?.length}</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header