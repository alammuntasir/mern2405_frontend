"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../common/Container";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/banner/allbanners`)
      .then((res) => {
        setBanners(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <section>
      <Container>
        <Slider {...settings}>
          {banners.map((item) => (
            <img src={item.image} alt="banner" className="w-full h-[400px] object-cover" />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
