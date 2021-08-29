import ImageWithBlur from '@/components/ImageWithBlur';

export default function ImagesList({ imagesString, start, stop }) {
  const images = JSON.parse(imagesString);
  return (
    <div className='w-full h-full space-y-4'>
      {images.map((image, i) => {
        if (
          (i >= start && i <= stop) ||
          (start === undefined && stop === undefined)
        )
          return (
            <div key={image.src} className='relative pb-3/2 w-full max-w-2xl'>
              <ImageWithBlur image={image} layout='fill' objectFit='cover' />
            </div>
          );
      })}
    </div>
  );
}
