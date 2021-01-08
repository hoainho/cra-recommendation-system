import React from 'react'
import AOS from 'aos';
import Slider from "react-slick";
import FF8 from '../image/FF8.jpg';
import DMT from '../image/nguoibattu.jpg';
AOS.init();
export default function slider() {
  const content = [
    {
      title : 'Fast & Furious',
      sub : 'Phim Hanh Dong',
      image : FF8
    },
    {
      title : 'Dinh Mu Mit',
      sub : 'Phim Hanh Dong',
      image : DMT
    }
  ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
    var data = content.map(item => {
      return (
        <div className="header" style = {{
        backgroundImage: `url("")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
          <h3>{item.tittle}</h3>
          <span> {item.sub}</span>
          {/* <img className="header-image" src={item.image} alt={item.sub}/> */}
      </div>
      )
    })
    return (
        <Slider {...settings}>
            {data}
        </Slider>
    )
}
