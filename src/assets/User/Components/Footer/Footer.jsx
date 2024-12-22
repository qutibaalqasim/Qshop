import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={` mt-5 mb-5 bg-body-secondary p-3`}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 col-md-6`}>
              <div className={`footer-Logo`}>
                  <img src='/images/Logo/logo.png' width={`80px`} className={`img-fluid`} alt='Our Logo' />
              </div>
              <div className={`footer-content`}>
             <address className={``}>
                  123 Masion Street<br />
                  Rammallah, palestine, 12345<br />
                  <a href="#" className="text-secondary text-decoration-none">Phone: +1 (234) 567-890</a><br />
                  <a href="#" className="text-secondary text-decoration-none">Email: info@example.com</a>
                </address>
                  <Link to={'/contact'} className={`btn ${style.Direction}`}>Get Direction <svg xmlns="http://www.w3.org/2000/svg" width='20px' height='20px' viewBox="0 0 384 512"><path d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5l88 0 0 192c0 17.7-14.3 32-32 32l-80 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192 88 0c9.6 0 18.2-5.7 22-14.5z"/></svg> </Link>
                  <div className={`social-media d-flex flex-wrap gap-3 mt-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${style.facebook}`} viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${style.X}`} viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${style.insta}`}  viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${style.tiktok}`}  viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${style.tiktok}`}  viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                </div>
              </div>
          </div>

          <div className={`col-lg-2 col-md-4`}>
              <h2 className='mb-4'>Help</h2>
              <ul className={`list-unstyled d-flex flex-column gap-2`}>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Privacy Policy</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Returns + Exchanges</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Shipping</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Terms & Conditions</a> 
                </li>
                <li>
                <Link to={'/FAQ'} className={`text-decoration-none text-black ${style.footerLinks}`}>FAQ's</Link> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Compare</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>My Wishlist</a> 
                </li>
              </ul>
          </div>
          <div className={`col-lg-2 col-md-6`}>
              <h2 className='mb-4'>About us</h2>
              <ul className={`list-unstyled d-flex flex-column gap-2`}>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Our Story</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Visit Our Store</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>Contact Us</a> 
                </li>
                <li>
                <a href='#' className={`text-decoration-none text-black ${style.footerLinks}`}>About Us</a> 
                </li>
              </ul>
          </div>

          <div className={`col-lg-4 col-md-4`}> 
                <h2 className={`p-2`}>Sign up For Email</h2>
                <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
              <div>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your Email" aria-label="Recipient's username with two button addons" />
                  <button className={`btn btn-dark ${style.footerForm} `} type="button">Subscribe</button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
