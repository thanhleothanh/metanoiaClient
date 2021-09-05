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
              <a className='text-5xl font-semibold text-white sm:text-5xl md:text-6xl 3xl:text-7xl'>
                <h2 className='font-dancingScript'>Sun Lust</h2>
              </a>
            </Link>
          </div>
        </div>

        <div className='pt-5 mx-7 xs:mx-10 lg:mx-24'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 place-items-center'>
            <h3
              className='self-center text-4xl font-semibold sm:text-5xl md:text-6xl font-dancingScript sm:col-span-2 place-self-start 2xl:text-7xl 3xl:text-8xl'
              style={{
                transform: `translate(${offset / 100}px, ${offset / 30}px)`,
                transition: `transform 0.3s`,
              }}
            >
              It's not about
              <br /> what size you wear!
            </h3>
            <h3
              className='self-center pb-10 text-4xl font-semibold text-right sm:text-5xl font-dancingScript md:text-6xl sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-2 sm:col-span-2 place-self-end 2xl:text-7xl 3xl:text-8xl'
              style={{
                transform: `translate(-${offset / 50}px, ${offset / 50}px)`,
                transition: `transform 0.3s`,
              }}
            >
              It's about how <br /> you wear your size!
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
              className='relative w-full pb-2/3 sm:hidden md:inline md:col-span-2'
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
