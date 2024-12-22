import React from 'react'
import Navbar from '../assets/User/Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../assets/User/Components/Footer/Footer';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
