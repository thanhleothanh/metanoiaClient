import Image from 'next/image';
import { BlurhashCanvas } from 'react-blurhash';
import { defaultHash } from 'utils/staticData';

const ImageWithBlur = ({ image, objectFit }) => {
  return (
    <div className='relative w-full h-full'>
      <BlurhashCanvas
        hash={image.blurhash ?? defaultHash}
        className='absolute w-full h-full object-cover'
      />
      <Image
        className='absolute select-none'
        src={image.src}
        objectFit={objectFit}
        layout='fill'
      />
    </div>
  );
};

export default ImageWithBlur;
