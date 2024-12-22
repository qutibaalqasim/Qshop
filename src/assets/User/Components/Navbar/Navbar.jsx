import React from 'react';
import  style from './Navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar() {


  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary h-100 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/images/Logo/logo.png" width='50px' height='50px'  alt="our Brand" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`collapse navbar-collapse w-60 ${style.grow_0}`} id="navbarSupportedContent">
    <ul className={`nav`}>
      <li className={`nav-item `}>
        <Link className={`nav-link ${style.list}`} aria-current="page" to={'/home'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/shop'}>Shop</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/products'}>Products</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/aboutus'}>AboutUs</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/contact'}>ContactUs</Link>
      </li>
        <li className="nav-item dropdown">
      <button className={`btn dropdown-toggle ${style.list}`} data-bs-toggle="dropdown" aria-expanded="false">
        More
      </button>
      <ul className="dropdown-menu ">
        <li><Link className="dropdown-item" to={'/ourStore'}>OurStore</Link></li>
        <li><Link className="dropdown-item" to={'/FAQ'}>FAQ</Link></li>
        <li><Link className="dropdown-item" to={'/TimeLine'}>TimeLine</Link></li>
        <li><Link className="dropdown-item" to={'/MyAccount'}>MyAccount</Link></li>
      </ul>
    </li>

    </ul>  
    </div>
    
    <div className={`nav-icon d-flex justify-content-center align-items-center ${style.view}`}>
   <button className={`btn`}><svg className={`${style.icon}`} xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 512 512"> <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button> 
    <button className='btn'><svg className={`${style.icon}`} xmlns="http://www.w3.org/2000/svg" width='20' height='20'  viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg></button>
    <button className='btn  position-relative'>
      <svg className={`${style.icon}`} xmlns="http://www.w3.org/2000/svg"  width='20' height='20' viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
      <span className="visually-hidden">New alerts</span>
    </span>
      </button>
    <button className='btn  position-relative'>
      <svg className={`${style.icon}`} xmlns="http://www.w3.org/2000/svg"  width='20' height='20' viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
     <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
      <span className="visually-hidden">New alerts</span>
    </span>
      </button>
    </div>
  </div>
</nav>
<div className={`navbar-content d-flex justify-content-center mt-4 container-fluid`} >
        <ul className="nav">
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} aria-current="page" to={'/men'}>Men</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/women'}>Women</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/kids'}>Kids</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${style.list}`} to={'/findAStore'}>Find a Store</Link>
      </li>
    </ul>  
    </div>
</>
  )
}
