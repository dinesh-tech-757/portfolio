import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgs from "../assets/img";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const images = Object.values(imgs);

const Social = () => {
  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="">
      <FaChevronCircleRight className="absolute text-5xl right-5 opacity-50 bg-white rounded-full top-[50%] translate-y-[-50%] cursor-pointer z-[10]" />
    </div>
  );
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="">
      <FaChevronCircleLeft className="absolute text-5xl left-5 opacity-50 bg-white rounded-full top-[50%] translate-y-[-50%] cursor-pointer z-[10]" />
    </div>
  );

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 90000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  var settings2 = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 90000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="social" className="py-10">
      <div className="flex flex-col md:flex-row justify-between px-[30px] md:px-[80px] py-[80px] md:items-center space-y-5">
        <h1 className="text-4xl md:text-7xl font-medium flex space-x-5">
          <span className="text-gray-400">My</span> Photo <br />
          Journal
        </h1>
        <a
          href="https://www.facebook.com/rjsanthoshkumar/" target="_blank" rel="noopener noreferrer"
          className="bg-yellow-300 text-black text-xl md:text-2xl py-3 px-7 w-[250px] rounded-4xl"
        >
          Follow on Facebook
        </a>
      </div>

      <div className="text-black z-10 hidden md:block">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-screen text-center items-center px-2"
            >
              <img
                src={image}
                className="w-[90%] brightness-80 h-[400px] object-cover rounded-3xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-black z-10 md:hidden">
        <Slider {...settings2}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-screen text-center items-center px-2"
            >
              <img
                src={image}
                className="w-[90%] brightness-80 h-[400px] object-cover rounded-3xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Social;
