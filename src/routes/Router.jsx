import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../assets/User/Pages/Home/Home";
import AboutUs from "../assets/User/Pages/AboutUs/AboutUs";
import Men from "../assets/User/Pages/Categories/Men/Men";
import Women from "../assets/User/Pages/Categories/Women/Women";
import Kids from "../assets/User/Pages/Categories/Kids/Kids";
import Location from "../assets/User/Pages/Location/Location";
import Shop from './../assets/User/Pages/Shop/Shop';
import Products from './../assets/User/Pages/Products/Products';
import Contact from "../assets/User/Pages/Contact/Contact";
import OurStore from "../assets/User/Pages/OurStore/OurStore";
import FAQ from "../assets/User/Pages/FAQ/FAQ";
import TimeLine from "../assets/User/Pages/TimeLine/TimeLine";
import MyAccount from "../assets/User/Pages/MyAccount/MyAccount";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path:'/men',
                element: <Men />
            },
            {
                path:'/women',
                element: <Women />
            },
            {
                path: '/kids',
                element: <Kids />
            },
            {
                path: '/findAStore',
                element: <Location />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/ourStore',
                element: <OurStore />
            },
            {
                path: '/FAQ',
                element: <FAQ />
            },
            {
                path: '/TimeLine',
                element: <TimeLine />
            },
            {
                path: '/MyAccount',
                element: <MyAccount />
            },
            {
                path: '*',
                element: () => <h1>404 Not Found</h1>  
            }
        ]
    }
]);

export default router;