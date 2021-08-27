import axios from 'axios';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProductItems from '@/components/products/ProductItems';
import DropdownCategory from '@/components/products/DropdownCategory';
import { API_URL } from '@/utils/config';
import { useRouter } from 'next/router';

export default function ProductsPage({ productsString }) {
  const { category } = useRouter().query;

  return (
    <Layout
      title={`Metanoia | Products`}
      description={`Các sản phẩm váy, áo, đầm... METANOIA - Thời trang dành cho plus-sized và curvy`}
    >
      <div className='min-h-screen mt-20 mx-5 xs:mx-10 lg:mx-24 mb-6'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6'>
            <ProductItems
              productsString={productsString}
              chosenCategory={category}
            />
          </div>
          <div className='hidden md:flex flex-col text-right self-start w-full md:w-36 md:sticky md:top-14 mt-5 md:mt-0'>
            <Link href='/products'>
              <a
                className={`lg:text-lg ${
                  category ?? 'font-semibold underline'
                }`}
              >
                Tất cả
              </a>
            </Link>
            <Link
              href={{
                pathname: '/products',
                query: { category: 'top' },
              }}
            >
              <a
                className={`lg:text-lg ${
                  category === 'top' && 'font-semibold underline'
                }`}
              >
                Áo
              </a>
            </Link>
            <Link
              href={{
                pathname: '/products',
                query: { category: 'skirt' },
              }}
            >
              <a
                className={`lg:text-lg ${
                  category === 'skirt' && 'font-semibold underline'
                }`}
              >
                Váy
              </a>
            </Link>
            <Link
              href={{
                pathname: '/products',
                query: { category: 'dress' },
              }}
            >
              <a
                className={`lg:text-lg ${
                  category === 'dress' && 'font-semibold underline'
                }`}
              >
                Đầm
              </a>
            </Link>
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
