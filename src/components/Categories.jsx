import React from "react";
import Movie from "./Movie";
import Slide from "react-slick";
export default function Categories({ data, setdata, name }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
    <div className="movielist">
      <span id="title">{name}</span>

      <Slide {...settings} className="slide">
        {data.map(
          (item) =>
            item.categories === name && (
              <ul>
                <Movie name={item.name} image={item.small_image} />
              </ul>
            )
        )}
      </Slide>
    </div>
  );
}
