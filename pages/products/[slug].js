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
      description={`Sản phẩm ${name} của METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa`}
    >
      <div className='min-h-screen mx-5 mt-16 mb-6 md:mt-20 2xl:mt-24 3xl:mt-28 xs:mx-10 xl:mx-24 paddingInsetTop'>
        <div className='flex flex-col justify-center md:flex-row'>
          <div className='flex flex-col w-full md:w-1/2'>
            <ImagesList imagesString={JSON.stringify(images)} />
          </div>
          <div className='flex flex-col self-start w-full mt-5 text-right md:w-1/2 md:sticky md:top-16 2xl:top-20 3xl:top-24 md:pl-10 md:mt-0'>
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

export async function getStaticPaths() {
  const { data } = await axios.get(`${API_URL}/api/products`);
  const paths = data.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const { data } = await axios.get(`${API_URL}/api/products/${slug}`);
  const product = JSON.stringify(data);
  return {
    props: {
      product,
    },
  };
}
