import Link from 'next/link';
import { useEffect, useState } from 'react/cjs/react.development';
import Layout from '@/components/Layout';
import ImageWithBlur from '@/components/ImageWithBlur';
import {
  carouselImages as images,
  homeGalleryImages,
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
        <div className='flex justify-center items-center font-dancingScript text-6xl sm:text-7xl mg:text-8xl font-semibold w-full text-center h-36 bg-metanoiaYellow'>
          You're not fat!
        </div>
        <div className='mx-5 xs:mx-10 lg:mx-24 mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            <h3 className='font-dancingScript font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:self-center sm:col-span-2 sm:pb-5'>
              You're beautiful!
            </h3>
            <h4 className='text-sm sm:text-base sm:col-start-2 sm:row-start-2 lg:col-start-1 text-right lg:text-left self-center'>
              from Metanoia with <i className='fas fa-heart' />
            </h4>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[0]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[1]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[2]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[3]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[5]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[4]}
                objectFit='cover'
              />
            </div>
            <div className='squareImage relative max-w-2xl sm:hidden lg:inline'>
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[6]}
                objectFit='cover'
              />
            </div>
            <p className='text-sm sm:text-base self-center text-right lg:col-span-2'>
              Hanoi, 2021
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
