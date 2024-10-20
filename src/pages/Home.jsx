import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../Redux/Slices/productSlice'
const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error)
  const [ Currentpage,setCurrentPage]= useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = Currentpage * productPerPage
  const CurrentpageFirstProductIndex = currentPageLastProductIndex-productPerPage
  const visibleProduct = allProducts?.slice(CurrentpageFirstProductIndex,currentPageLastProductIndex)
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])
  const navigateToNextPage = ()=>{
    if(Currentpage!=totalPage){
      setCurrentPage(Currentpage+1)
    }
  }

  const navigateToPrevPage = ()=>{
    if(Currentpage!=totalPage){
      setCurrentPage(Currentpage-1)
    }
  }


  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container p-4 mx-auto'>
      {
      loading ?
      <div className="flex justify-center items-center my-5 text-lg">
       <img height={'70px'} width={"70px"} src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" alt="" />loading...
      </div>
      :
      <>
      <div className="grid grid-cols-4 gap-4">
      {
        allProducts?.length>0 ?
        visibleProduct?.map(product=>(
      <div key={product?.id} className="rounded border p-2 shadow-effect ">
        <img width={'100%'} height={'150px'} src={product?.thumbnail} alt="" />
       <div className='text-center'>
       <h3 className='text-xl font-bold'>{product?.title}</h3>
       <Link className='inline-block bg-yellow-500 rounded p-1 mt-3 text-white' to = {`${product.id}/view`}>view more</Link>
        </div> 
      </div>
        ))
        :
        <div className="flex justify-center items-center text-red-600 my-5 text-lg">
          Products not found
        </div>
      }
      </div>
      <div className="text-center my-5 text-2xl font-bold mt-20">
        <span onClick={navigateToPrevPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
        <span>{Currentpage} of {totalPage}</span>
        <span  onClick={navigateToNextPage}  className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

      </div>
      </>
}
    </div>
    </>
  )
}

export default Home