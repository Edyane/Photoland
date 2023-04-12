import React from 'react';
import { Link } from 'react-router-dom';

const Product = ( {product} ) => {
  return (
    <Link>
      <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
        {/* badge */}
        <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>New</div>
        {/*image*/}
          <div className="w-full h-[200px] flex items-center justify-center relative">
            <img className="w-[160px] h-[160px] group-hover:scale-90 transition-all" src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="" />
          </div>
      </div>
    </Link>

  )
};

export default Product;
