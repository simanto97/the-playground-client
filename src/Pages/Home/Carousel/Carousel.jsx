import React from "react";
import img1 from "../../../assets/main/carousel/image1.jpg";
import img2 from "../../../assets/main/carousel/image2.jpg";
import img3 from "../../../assets/main/carousel/image3.jpg";
import img4 from "../../../assets/main/carousel/image4.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-2xl md:h-[650px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#3b3b3b] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-4 md:space-y-7 md:w-1/2 pl-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Welcome to The PlayGround
            </h2>
            <p>Your dream Toys Cars is Here</p>
            <div>
              <button className="btn btn-active btn-primary md:mr-4">
                Explore More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl mr-4"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#3b3b3b] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-4 md:space-y-7 md:w-1/2 pl-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Welcome to The PlayGround
            </h2>
            <p>Your dream Toys Cars is Here</p>
            <div>
              <button className="btn btn-active btn-primary md:mr-4">
                Explore More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent border-none text-orange-600 mr-4 text-4xl"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#3b3b3b] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-4 md:space-y-7 md:w-1/2 pl-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Welcome to The PlayGround
            </h2>
            <p>Your dream Toys Cars is Here</p>
            <div>
              <button className="btn btn-active btn-primary md:mr-4">
                Explore More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent border-none text-orange-600 mr-4 text-4xl"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#3b3b3b] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-4 md:space-y-7 md:w-1/2 pl-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Welcome to The PlayGround
            </h2>
            <p>Your dream Toys Cars is Here</p>
            <div>
              <button className="btn btn-active btn-primary md:mr-4">
                Explore More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl mr-4"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent border-none text-orange-600 text-4xl"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
