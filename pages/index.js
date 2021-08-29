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
      <div className='w-full min-h-screen mb-6'>
        <div className='relative flex items-center justify-center h-screen'>
          {image && (
            <ImageWithBlur image={image} layout='fill' objectFit='cover' />
          )}
          <div className='absolute z-10 flex items-center justify-center w-full h-full'>
            <Link href='/collections/sun-lust'>
              <a className='p-4 text-4xl font-medium text-white bg-transparent border-4 border-white'>
                <h2 className='font-dancingScript'>Sun Lust</h2>
              </a>
            </Link>
          </div>
        </div>

        <div className='pt-5 mx-7 xs:mx-10 lg:mx-24'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 place-items-center'>
            <h3
              className='text-4xl font-semibold font-dancingScript xs:text-5xl md:text-6xl lg:text-7xl sm:col-span-2 place-self-start lg:place-self-center'
              style={{
                transform: `translate(${offset / 100}px, ${offset / 30}px)`,
                transition: `transform 0.3s`,
              }}
            >
              You're not fat!
            </h3>
            <h3
              className='self-center pb-10 text-4xl font-semibold font-dancingScript md:text-5xl lg:text-6xl sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-2 lg:col-span-2 place-items-start lg:place-self-center'
              style={{
                transform: `translate(-${offset / 50}px, ${offset / 30}px)`,
                transition: `transform 0.3s`,
              }}
            >
              You're beautiful!
            </h3>
            <div
              className='relative w-full pb-2/3 lg:pb-3/2 sm:mt-3'
              style={{
                transform: `translate(-${offset / 100}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[0]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-2/3'
              style={{
                transform: `translate(${offset / 100}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[1]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-1/1'
              style={{
                transform: `translate(0px, ${offset / 100}px)`,
                transition: `transform 0.3s`,
                aspectRatio: '1/1',
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[2]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-1/1'
              style={{
                transform: `translate(${offset / 130}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[3]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-3/2'
              style={{
                transform: `translate(${offset / 100}px,0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[4]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-1/1'
              style={{
                transform: `translate(-${offset / 150}px, ${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[5]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-2/3 sm:hidden lg:inline'
              style={{
                transform: `translate(${offset / 150}px, -${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={homeGalleryImages[6]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p
              className='self-center mt-5 text-sm text-right sm:text-base'
              style={{
                transform: `translate(${offset / 80}px, 0px)`,
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
