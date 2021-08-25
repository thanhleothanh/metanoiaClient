import Image from 'next/image';
import { BlurhashCanvas } from 'react-blurhash';
import { defaultHash } from 'utils/staticData';

const ImageWithBlur = ({ className, image, objectFit }) => {
  return (
    <>
      <BlurhashCanvas
        hash={image.hash ?? defaultHash}
        className='absolute w-full h-full object-cover'
      />
      <Image
        className={className}
        src={image.src}
        objectFit={objectFit}
        layout='fill'
      />
    </>
  );
};

export default ImageWithBlur;
