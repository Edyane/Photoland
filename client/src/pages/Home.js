import React from 'react';

//useFetch hook 
import useFetch from '../hooks/useFetch';

//Import components
import ProductSlider from '../components/ProductSlider';

const Home = () => {
  //Get new projects
  const { data } = useFetch('/products?populate=*&filters[is*New]=true');

  return (
    <div className="mb-16">
      <div className="mx-auto">
        <h2 className='h2 mb-6 text-center x1:text-left'>Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  )
};

export default Home;
