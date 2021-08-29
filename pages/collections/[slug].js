import axios from 'axios';
import Layout from '@/components/Layout';
import CollectionInformation from '@/components/collections/CollectionInformation';
import ImagesList from '@/components/ImagesList';
import { API_URL } from '@/utils/config';

export default function CollectionPage({ collection }) {
  const { name, description, images } = JSON.parse(collection);
  return (
    <Layout
      title={`Metanoia | Bộ sưu tập ${name}`}
      description={`Bộ sưu tập ${name} của METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa`}
    >
      <div className='min-h-screen mx-5 mt-20 mb-6 xs:mx-10 lg:mx-24'>
        <div>
          <CollectionInformation name={name} description={description} />
        </div>
        <div className='flex flex-col items-center justify-center mt-5 lg:flex-row'>
          <div className='flex flex-col w-full space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
            <div className='w-full sm:w-1/2 sm:mt-20'>
              <ImagesList
                imagesString={JSON.stringify(images)}
                start={0}
                stop={images.length / 2 - 1}
              />
            </div>
            <div className='w-full sm:w-1/2'>
              <ImagesList
                imagesString={JSON.stringify(images)}
                start={images.length / 2}
                stop={images.length - 1}
              />
            </div>
          </div>
          <div className='flex flex-col self-start w-full mt-5 text-right lg:w-56 lg:sticky lg:top-14 lg:ml-5 lg:mt-0'>
            <h4 className='font-semibold lg:text-lg'>Bộ sưu tập khác</h4>
            <h4 className='text-sm lg:text-base'>Coming soon...</h4>
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
