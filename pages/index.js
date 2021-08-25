import Layout from '@/components/Layout';
import LoopVideo from '@/components/LoopVideo';
import Link from 'next/link';
import ImageWithBlur from '@/components/ImageWithBlur';
import { useEffect, useState } from 'react/cjs/react.development';
import {
  carouselImages as images,
  collectionImages,
} from '../utils/staticData.js';

export default function Products() {
  const [image, setImage] = useState(images[3]);
  useEffect(() => {
    let index = 0;
    function slide() {
      setImage(images[index++ % images.length]);
    }
    setInterval(slide, 2000);
  }, []);

  return (
    <Layout
      title='Metanoia'
      description='METANOIA - Thời trang dành cho plus-sized và curvy'
    >
      <div className='h-auto min-h-screen w-full font-prompt pb-4'>
        <div className='relative flex justify-center items-center h-screen'>
          {image && (
            <ImageWithBlur
              className='absolute select-none'
              alt='metanoia'
              image={image}
              layout='fill'
              objectFit='cover'
            />
          )}
          <div className='z-10 absolute flex items-center justify-center w-full h-full'>
            <Link href='/collections'>
              <a className='bg-transparent border-4 border-white text-white text-4xl font-medium p-4'>
                <h2 className='font-dancingScript tex'>Sun Lust</h2>
              </a>
            </Link>
          </div>
        </div>
        <div className='py-8 px-10 sm:px-16 md:px-32 lg:px-52 text-center space-y-2'>
          <h2 className='text-2xl sm:text-3xl font-dancingScript'>Our Story</h2>
          <p className='text-sm sm:text-base'>
            Metanoia is a clothing brand that filling the gap of luxury fashion
            for plus-size people in Vietnam. We believe plus-size clothes is not
            just bigger size but should make us feel as remarkable as we are.
          </p>
        </div>
        <div className='grid mx-2 md:mx-10 lg:mx-32 md:mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-dancingScript font-semibold sm:self-center sm:col-span-2 pb-5'>
              Sun Lust collection
            </h3>
            <p className='text-sm sm:text-base self-center sm:col-start-2 sm:row-start-2 lg:col-start-1 text-right pl-3 lg:text-left lg:pl-0'>
              Metanoia is a clothing brand
            </p>
            <div className='gridImage relative'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[0]}
                objectFit='cover'
              />
            </div>
            <div className='gridImage relative'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[1]}
                objectFit='cover'
              />
            </div>
            <div className='gridImage relative'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[2]}
                objectFit='cover'
              />
            </div>
            <div className='gridImage relative'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[3]}
                objectFit='cover'
              />
            </div>
            <div className='gridImage relative hidden lg:inline'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[4]}
                objectFit='cover'
              />
            </div>
            <p className='text-sm sm:text-base self-center text-right'>
              Hanoi, 2021
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
