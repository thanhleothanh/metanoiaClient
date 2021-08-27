import axios from 'axios';
import Layout from '@/components/Layout';
import { API_URL } from '@/utils/config';
import ImagesList from '@/components/ImagesList';
import ProductInformation from '@/components/products/ProductInformation';

export default function ProductPage({ product }) {
  const { name, description, price, discountPrice, images, inStock } =
    JSON.parse(product);
  return (
    <Layout
      title={`Metanoia | ${name}`}
      description={`METANOIA - Thời trang dành cho plus-sized và curvy, ${name}`}
    >
      <div className='min-h-screen mt-20 mx-5 xs:mx-10 lg:mx-24 mb-6'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex flex-col w-full md:w-1/2 space-y-4'>
            <ImagesList imagesString={JSON.stringify(images)} />
          </div>
          <div className='flex flex-col self-start w-full md:w-1/2 text-right md:sticky md:top-14 md:pl-10 mt-5 md:mt-0'>
            <ProductInformation
              name={name}
              description={description}
              price={price}
              discountPrice={discountPrice}
              inStock={inStock}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(`${API_URL}/api/products/${slug}`);
  const product = JSON.stringify(data);
  return {
    props: {
      product,
    },
  };
}
