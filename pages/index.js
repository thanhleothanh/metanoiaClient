import Link from 'next/link';
import { useEffect, useState } from 'react/cjs/react.development';
import Layout from '@/components/Layout';
import ImageWithBlur from '@/components/ImageWithBlur';
import {
  carouselImages as images,
  collectionImages,
} from '@/utils/staticData.js';

export default function Products() {
  const [image, setImage] = useState(images[3]);
  useEffect(() => {
    let index = 0;
    function slide() {
      setImage(images[index++ % images.length]);
    }
    const internalId = setInterval(slide, 2000);
    return () => clearInterval(internalId);
  }, []);

  return (
    <Layout
      title='Metanoia'
      description='METANOIA - Thời trang dành cho plus-sized và curvy'
    >
      <div className='h-auto min-h-screen w-full mt-14 mb-6'>
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
            <Link href='/collections/sun-lust'>
              <a className='bg-transparent border-4 border-white text-white text-4xl font-medium p-4'>
                <h2 className='font-dancingScript tex'>Sun Lust</h2>
              </a>
            </Link>
          </div>
        </div>
        <div className='text-center space-y-2 my-8 mx-10 sm:mx-16 md:mx-32 lg:mx-52'>
          <h2 className='text-2xl sm:text-3xl font-dancingScript'>Our Story</h2>
          <p className='text-sm sm:text-base'>
            Metanoia is a clothing brand that filling the gap of luxury fashion
            for plus-size people in Vietnam. We believe plus-size clothes is not
            just bigger size but should make us feel as remarkable as we are.
          </p>
        </div>
        <div className='mx-5 xs:mx-10 lg:mx-24 md:mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-dancingScript font-semibold sm:self-center sm:col-span-2 pb-5'>
              Sun Lust Collection
            </h3>
            <p className='text-sm sm:text-base sm:col-start-2 sm:row-start-2 lg:col-start-1 text-right lg:text-left self-center lg:self-baseline'>
              Metanoia is a clothing brand
            </p>
            <div className='longImage relative max-w-2xl transform-none lg:transform scale-110 -rotate-6'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[0]}
                objectFit='cover'
              />
            </div>
            <div className='longImage relative max-w-2xl transform-none lg:transform rotate-2'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[1]}
                objectFit='cover'
              />
            </div>
            <div className='longImage relative max-w-2xl transform-none lg:transform scale-75 -rotate-6 translate-x-2 translate-y-15'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[2]}
                objectFit='cover'
              />
            </div>
            <div className='longImage relative max-w-2xl transform-none lg:transform -translate-y-24 -rotate-3'>
              <ImageWithBlur
                className='absolute select-none'
                image={collectionImages[3]}
                objectFit='cover'
              />
            </div>
            <div className='longImage relative max-w-2xl hidden lg:inline transform-none lg:transform translate-x-10 -translate-y-4 scale-75 rotate-3'>
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
