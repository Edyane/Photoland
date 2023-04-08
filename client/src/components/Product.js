import React from 'react';
import { Link } from 'react-router-dom';

const Product = ( {product} ) => {
  return (
    <Link>
      <div className='group'>
        {/*image*/}
          <div className="w-full h-[200px] flex items-center justify-center relative">
            <img className="w-[160px] h-[160px] group-hover:scale-90 transition-all" src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="" />
          </div>
      </div>
    </Link>

  )
};

export default Product;
