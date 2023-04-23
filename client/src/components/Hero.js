import React from 'react';
import CategoryNav from "../components/CategoryNav";
import MainSlider from '../components/MainSlider';

import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">

          <div>
            <CategoryNav />
          </div>

          <div className="w-full max-w-lg bg-pink-200">
            <MainSlider />
          </div>

          <div>
            <div>Promo 1</div>
            <div>Promo 2</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;