import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import style from './Women.module.css'

export default function Women() {
 
  return (
  <div className="main mt-5">
  <div className='collections container'>
    <div className="row">
      <div className='categories d-flex justify-content-center align-items-center gap-1 flex-wrap'>
        <div className={`${style.collection} d-flex flex-column justify-content-center align-items-center `}>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/newArrivals.jpg' className={` ${style.collectionImage}`}  alt='newArrivals'/>
          <h6 className={`${style.collectionName} mt-2`}>New Arrivals</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center '>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/bestSelers.jpg'className={`img-fluid ${style.collectionImage}`}  alt='Best Sellers'/>
          <h6 className={`${style.collectionName} mt-2`}>Best Sellers</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center '>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/topRated.jpg' className={`img-fluid ${style.collectionImage}`}  alt='Top Rated'/>
          <h6 className={`${style.collectionName} mt-2`}>Top Rated</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center '>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/brandsWeLove.jpg'className={`img-fluid ${style.collectionImage}`}  alt='Brande We Love'/>
          <h6 className={`${style.collectionName} mt-2`}>Brands We Love</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center '>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/trending.jpg'className={`img-fluid ${style.collectionImage}`}  alt='Trending'/>
          <h6 className={`${style.collectionName} mt-2`}>Trending</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center '>
          <Link className='btn' to={'/shop'}>
          <img src='/images/Categories/women/theRe_Imagined.jpg' className={`img-fluid ${style.collectionImage}`}  alt='The Re-Imagined'/>
          <h6 className={`${style.collectionName} mt-2`}>The Re-Imagined</h6>
          </Link>
        </div>
        <div className='collection d-flex flex-column justify-content-center align-items-center'>
          <Link className='btn' to={'/shop'}>
          <svg className={`${style.collectionAll}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
          <h6 className={`${style.collectionName} mt-2`}>Shop All</h6>
          </Link>
        </div>

      </div>
    </div>
  </div>

    <div className='slider mt-5'>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${style.sliderImg} position-fixed d-flex justify-content-center align-items-cenetr vh-100`}>
          <img src='/images/Categories/women/slider/women-slideshow-1.jpg' className='img-fluid' alt='slide1'/>
          </div>
          <div className={`${style.sliderContent} position-relative vh-100 d-flex flex-column align-items-start justify-content-center gap-4 ms-4`}> 
            <h1>Elegance</h1> 
            <h4>From casual to formal, we've got you covered</h4>
            <Link className={`btn ${style.sliderContentButton} p-3`} to={'/shop'}>Shop Collection <svg xmlns="http://www.w3.org/2000/svg" width={`20px`} height={`20px`} viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></Link>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${style.sliderImg} position-fixed d-flex justify-content-center align-items-cenetr vh-100`}>
          <img src='/images/Categories/women/slider/women-slideshow-2.jpg' className='img-fluid' alt='slide1'/>
          </div>
          <div className={`${style.sliderContent} position-relative vh-100 d-flex flex-column align-items-start justify-content-center gap-4 ms-4`}> 
            <h1>Boutique</h1> 
            <h4>From casual to formal, we've got you covered</h4>
            <Link className={`btn ${style.sliderContentButton} p-3`} to={'/shop'}>Shop Collection <svg xmlns="http://www.w3.org/2000/svg" width={`20px`} height={`20px`} viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${style.sliderImg} position-fixed d-flex justify-content-center align-items-cenetr vh-100`}>
          <img src='/images/Categories/women/slider/women-slideshow-3.jpg' className='img-fluid' alt='slide1'/>
          </div>
          <div className={`${style.sliderContent} position-relative vh-100 d-flex flex-column align-items-start justify-content-center gap-4 ms-4`}> 
            <h1>Luxury</h1> 
            <h4>From casual to formal, we've got you covered</h4>
            <Link className={`btn ${style.sliderContentButton} p-3`} to={'/shop'}>Shop Collection <svg xmlns="http://www.w3.org/2000/svg" width={`20px`} height={`20px`} viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
   
    <div className='categories container mt-5'>
      
        <h1 className={`text-center ${style.ctegoriesTitle}`} >Categories you might like</h1>
      
      <div className={`categoriesStyle d-flex justify-content-center align-items-center vh-100 mt-2`}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`card ${style.collections}`}>
            <Link to={'/shop'}>
            <img src='/public/images/Categories/women/collections/collection-42.jpg' className={`${style.collectionsImage}`} />
            </Link>
             <div className={`${style.collectionsButton}`}>
             <Link className={`btn btn-outline-success w-100 `} to={`/shop`}>Tops</Link>
             </div>       
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`card ${style.collections}`}>
            <Link to={'/shop'}>
            <img src='/public/images/Categories/women/collections/collection-43.jpg' className={`${style.collectionsImage}`} />
            </Link>
             <div className={`${style.collectionsButton}`}>
             <Link className={`btn btn-outline-success w-100 `} to={`/shop`}>SweetShirts</Link>
             </div>       
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`card ${style.collections}`}>
            <Link to={'/shop'}>
            <img src='/public/images/Categories/women/collections/collection-44.jpg' className={`${style.collectionsImage}`} />
            </Link>
             <div className={`${style.collectionsButton}`}>
             <Link className={`btn btn-outline-success w-100 `} to={`/shop`}>Swim</Link>
             </div>       
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`card ${style.collections}`}>
            <Link to={'/shop'}>
            <img src='/public/images/Categories/women/collections/collection-45.jpg' className={`${style.collectionsImage}`} />
            </Link>
             <div className={`${style.collectionsButton}`}>
             <Link className={`btn btn-outline-success w-100 `} to={`/shop`}>Dress</Link>
             </div>       
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`card ${style.collections}`}>
            <Link to={'/shop'}>
            <img src='/public/images/Categories/women/collections/collection-46.jpg' className={`${style.collectionsImage}`} />
            </Link>
             <div className={`${style.collectionsButton}`}>
             <Link className={`btn btn-outline-success w-100 `} to={`/shop`}>Cardigans</Link>
             </div>       
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
    
    <div className={``}>

    </div>

  </div>
  
   
  )
}
