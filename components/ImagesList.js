import ImageWithBlur from '@/components/ImageWithBlur';

export default function ImagesList({ imagesString, start, stop }) {
  const images = JSON.parse(imagesString);
  return (
    <>
      {images.map((image, i) => {
        if (
          (i >= start && i <= stop) ||
          (start === undefined && stop === undefined)
        )
          return (
            <div key={image.src} className='longImage relative max-w-2xl'>
              <ImageWithBlur
                className='absolute select-none'
                image={image}
                objectFit='cover'
              />
            </div>
          );
      })}
    </>
  );
}
