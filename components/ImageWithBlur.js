import Image from 'next/image';
import { BlurhashCanvas } from 'react-blurhash';
import { defaultHash } from 'utils/staticData';

const ImageWithBlur = ({ className, image, objectFit }) => {
  return (
    <>
      <BlurhashCanvas
        hash={image.blurhash ?? defaultHash}
        className='absolute w-full h-full object-cover'
      />
      <Image
        alt='metanoia-brand'
        className='absolute select-none'
        src={image.src}
        objectFit='cover'
        layout='fill'
      />
    </>
  );
};

export default ImageWithBlur;
