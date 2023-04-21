import React from 'react';

//Components
import CategoryNavComponent from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';

//Images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png'
import CategoryNav from '../components/CategoryNav';

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {/* Sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* Main Slider */}
          <div>
            <MainSlider />
          </div>
          {/* Promo imgs */}
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
