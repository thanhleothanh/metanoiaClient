import axios from 'axios';
import Layout from '@/components/Layout';
import CollectionInformation from '@/components/collections/CollectionInformation';
import CollectionImages from '@/components/collections/CollectionImages';
import { API_URL } from '@/utils/config';

export default function CollectionPage({ collection }) {
  const {
    name,
    description,
    season,
    models,
    designers,
    photographers,
    images,
  } = JSON.parse(collection);
  return (
    <Layout
      title={`Metanoia | ${name} Collection`}
      description={`Bộ sưu tập ${name}, METANOIA - Thời trang dành cho plus-sized và curvy`}
    >
      <div className='min-h-screen mt-20 mx-5 xs:mx-10 lg:mx-24 mb-6'>
        <div>
          <CollectionInformation
            name={name}
            description={description}
            season={season}
            models={models}
            designers={designers}
            photographers={photographers}
          />
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col w-full sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
            <div className='w-full sm:w-1/2 mt-5 sm:mt-20 space-y-4'>
              <CollectionImages
                imagesString={JSON.stringify(images)}
                start={0}
                stop={images.length / 2 - 1}
              />
            </div>
            <div className='w-full sm:w-1/2 space-y-4'>
              <CollectionImages
                imagesString={JSON.stringify(images)}
                start={images.length / 2}
                stop={images.length - 1}
              />
            </div>
          </div>
          <div className='flex flex-col text-right self-start w-full lg:w-56 lg:sticky lg:top-14 lg:ml-5 mt-5 lg:mt-0'>
            <h3 className='lg:text-lg font-semibold'>Bộ sưu tập khác</h3>
            <h3 className='text-sm lg:text-base'>Coming soon...</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(`${API_URL}/api/collections/${slug}`);
  const collection = JSON.stringify(data);
  return {
    props: {
      collection,
    },
  };
}
