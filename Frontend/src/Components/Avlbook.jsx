import React from "react";
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";
export const Avlbook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(
          "https://fullstack-library-3.onrender.com/book"
        );

        const fdata = response.data.filter((data) => data.category === "Free");
        setBook(fdata);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Books</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga odio
            corporis libero consequuntur minima esse optio quasi nisi,
            laudantium explicabo quas, rerum perferendis reiciendis excepturi
            alias assumenda? Pariatur consectetur inventore iste aspernatur,
            maxime, a, cum fugit tempore quidem totam obcaecati officiis ut
            repellendus culpa laboriosam provident aliquid beatae molestias
            architecto?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
