import axios from 'axios';
import Layout from '@/components/Layout';
import CollectionInformation from '@/components/collections/CollectionInformation';
import ImageWithBlur from '@/components/ImageWithBlur';
import { API_URL } from '@/utils/config';

export default function CollectionPage({ collection }) {
  const { name, description, images } = JSON.parse(collection);
  return (
    <Layout
      title={`Metanoia | Bộ sưu tập ${name}`}
      description={`Bộ sưu tập ${name} của METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa`}
    >
      <div className='min-h-screen mx-5 mt-16 mb-6 md:mt-20 2xl:mt-24 3xl:mt-28 xs:mx-10 xl:mx-24 paddingInsetTop'>
        <div>
          <CollectionInformation name={name} description={description} />
        </div>
        <div className='flex flex-col items-center justify-center mt-7 lg:flex-row'>
          <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
            {images.map((image) => {
              return (
                <div key={image.src} className='relative w-full pb-3/2'>
                  <ImageWithBlur
                    image={image}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              );
            })}
          </div>
          <div className='flex flex-col self-start w-full mt-5 text-right lg:w-56 lg:sticky lg:top-16 2xl:top-20 3xl:top-24 lg:ml-5 lg:mt-0'>
            <h4 className='font-semibold md:text-lg 2xl:text-xl 3xl:text-2xl'>
              Bộ sưu tập khác
            </h4>
            <h4 className='text-sm md:text-base 2xl:text-lg 3xl:text-xl'>
              Coming soon...
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${API_URL}/api/collections`);
  const paths = data.map((collection) => ({
    params: { slug: collection.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const { data } = await axios.get(`${API_URL}/api/collections/${slug}`);
  const collection = JSON.stringify(data);
  return {
    props: {
      collection,
    },
  };
}
