import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ImageWithBlur from '@/components/ImageWithBlur';
import {
  carouselImages as images,
  homeGalleryImages,
} from '@/utils/staticData.js';

export default function Products() {
  const [image, setImage] = useState(images[3]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let index = 0;
    function slide() {
      setImage(images[index++ % images.length]);
    }
    const internalId = setInterval(slide, 2000);
    return () => clearInterval(internalId);
  }, []);

  useEffect(() => {
    //scroll event, for moving objects in the homepage
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Layout
      offsetY={offset}
      title='Metanoia'
      description='METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa'
    >
      <div className='h-auto min-h-screen w-full mb-6'>
        <div className='relative flex justify-center items-center h-screen'>
          {image && (
            <ImageWithBlur
              className='absolute select-none'
              image={image}
              layout='fill'
              objectFit='cover'
            />
          )}
          <div className='z-10 absolute flex items-center justify-center w-full h-full'>
            <Link href='/collections/sun-lust'>
              <a className='bg-transparent border-4 border-white text-white text-4xl font-medium p-4'>
                <h2 className='font-dancingScript'>Sun Lust</h2>
              </a>
            </Link>
          </div>
        </div>

        <div className='mx-5 xs:mx-10 lg:mx-24 mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            <h3
              className='font-dancingScript font-semibold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl sm:col-span-2 sm:pb-5 self-center'
              style={{
                transform: `translate(${offset / 100}px, ${offset / 17}px)`,
                transition: `transform 0.3s`,
              }}
            >
              You're not fat!
            </h3>
            <h3
              className='font-dancingScript font-semibold text-4xl md:text-5xl lg:text-6xl sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-2 lg:col-span-2 self-center text-right sm:text-left lg:text-right pb-5'
              style={{
                transform: `translate(-${offset / 100}px, ${offset / 17}px)`,
                transition: `transform 0.3s`,
              }}
            >
              You're beautiful!
            </h3>
            <div
              className='squareImage sm:longImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(-${offset / 80}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[0]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='squareImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(${offset / 80}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[1]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='squareImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(0px, ${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[2]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='squareImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(${offset / 130}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[3]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='squareImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(${offset / 80}px,0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[4]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='squareImage relative max-w-2xl h-auto'
              style={{
                transform: `translate(-${offset / 100}px, ${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[5]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='wideImage relative max-w-2xl h-auto sm:hidden lg:inline'
              style={{
                transform: `translate(${offset / 100}px, -${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                className='absolute select-none'
                image={homeGalleryImages[6]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p
              className='text-sm sm:text-base self-center text-right mt-5'
              style={{
                transform: `translate(-${offset / 80}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              Based in Hanoi
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
