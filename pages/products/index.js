import axios from 'axios';
import Layout from '@/components/Layout';
import ProductItems from '@/components/products/ProductItems';
import { API_URL } from '@/utils/config';
import { useState } from 'react';

export default function ProductsPage({ productsString }) {
  const [category, setCategory] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Layout
      title={`Metanoia | Các sản phẩm`}
      description={`Các sản phẩm áo, váy, đầm... METANOIA - Thời trang dành cho plus-sized và curvy`}
    >
      <div className='min-h-screen mx-5 mt-20 mb-6 xs:mx-10 lg:mx-24'>
        <div className='flex flex-col-reverse items-center justify-center w-full md:flex-row'>
          <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <ProductItems
              productsString={productsString}
              chosenCategory={category}
            />
          </div>
          <button
            className={`flex justify-end items-end w-full mb-5 md:hidden ${
              filterVisible && 'hidden'
            }`}
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <i className='fas fa-filter fa-lg' />
          </button>
          <div
            className={`${
              !filterVisible && 'hidden md:flex'
            } flex flex-col justify-end items-end self-start w-full md:w-52 md:sticky md:top-14 mb-5 md:mt-0`}
          >
            <button
              className={`${category ?? 'px-1 border-2 border-black'}`}
              onClick={() => {
                setCategory(null);
                setFilterVisible(false);
              }}
            >
              Tất cả
            </button>

            <button
              className={`${
                category === 'top' && 'px-1 border-2 border-black'
              }`}
              onClick={() => {
                setCategory('top');
                setFilterVisible(false);
              }}
            >
              Áo
            </button>

            <button
              className={`${
                category === 'dress' && 'px-1 border-2 border-black'
              }`}
              onClick={() => {
                setCategory('dress');
                setFilterVisible(false);
              }}
            >
              Váy
            </button>

            <button
              className={`${
                category === 'skirt' && 'px-1 border-2 border-black'
              }`}
              onClick={() => {
                setCategory('skirt');
                setFilterVisible(false);
              }}
            >
              Chân váy
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const { data } = await axios.get(`${API_URL}/api/products/`);
  const productsString = JSON.stringify(data);
  return {
    props: {
      productsString,
    },
  };
}
