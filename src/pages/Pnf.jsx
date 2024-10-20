import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Pnf = () => {
  return (
    <>
        <Header/>
        <div className="h-80 flex justify-center flex-col items-center" style={{
          paddingTop:"100px"
        }}>
          <img src="" alt="" />
          <h1 className='text-4xl font-bold '>Page Not Found!</h1>
          <p className='text-xl font-semibold '>Click the Home to redirect to home page</p>
          <Link to={'/'} className='bg-green-600 text-white rounded text-xl font-bold px-2 py-1'>Home</Link>
        </div>
    </>
  )
}

export default Pnf