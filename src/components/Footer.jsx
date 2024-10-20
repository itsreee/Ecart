import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{ height: '400px' }} className='w-full bg-yellow-500 pt-12 mt-12'>
    <div className="flex justify-between">
      <div style={{ width: '400px' }} className="intro">
        <h5><i className='fa-solid fa-cart-shopping me-2'></i>ECart Application</h5>
        <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
        <p>Code liscenced Luminar, docs CC BY 3.0.</p>
        <p>Currently v5.3.2.</p>
      </div>
      <div className="">
        <h5>Links</h5>
        <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>Home Page</Link> <br />
        <Link to={'/home'} style={{ textDecoration: 'none', color:'black' }}>Cart Page</Link> <br />
        <Link to={'/history'} style={{ textDecoration: 'none', color:'black' }}>Wishlist Page</Link>
      </div>
      <div className="">
        <h5>Guides</h5>
        <a href="https://react.dev/" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React</a> <br />
        <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React Bootstrap</a> <br />
        <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color:'black' }} target='_blank'>React Router</a>
      </div>
      <div className="">
        <h5>Contact Us</h5>
        <div className='pt-1'>
          <input placeholder='Enter your email here' type="text" className='form-control rounded' />
          <button className='btn btn-info ms-1'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='flex gap-3 pt-1'>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="" style={{ textDecoration: 'none', color:'black' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
        </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy: June 2024 Batch ,Ecart . Built with React .
    </p>
  </div>
  )
}

export default Footer