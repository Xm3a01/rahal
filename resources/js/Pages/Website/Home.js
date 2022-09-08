import React from "react";
import App from "./Layouts/App";
import { Link, Head } from "@inertiajs/inertia-react";

const Home = () => {
  return (
    <App>
      <Head title="Home" />
      <div className="hero-area hero-style-four">
      <img src="assets/images/banner/banner-plane.svg" className="img-fluid banner-plane" />
      <img src="assets/images/banner/banner-star1.svg" className="banner-star1" alt="" />
      <img src="assets/images/banner/banner-star2.svg" className="banner-star2" alt="" />
       <img src="assets/images/banner/banner-star3.svg" className="banner-star3" alt="" />
        <div className="hero-main-wrapper position-relative">
          <div className="swiper hero-slider-four">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="">
                  <div className="slider-bg-1">
                    <div className="container">
                      <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">

                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide ">
                <a href="">
                  <div className="slider-bg-2">
                    <div className="container">
                      <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li className="item1 active"></li>
            <li className="item2"></li>
            <li className="item3"></li>
            <li className="item4"></li>
          </ol>
        </div>
      </div>
    </App>
  )
}

export default Home;