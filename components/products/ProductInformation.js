import toVND from '@/utils/toVND';
import { useState } from 'react';
import Modal from '@/components/Modal';
import ImageWithBlur from '@/components/ImageWithBlur';

export default function ProductInformation({
  name,
  description,
  price,
  discountPrice,
  inStock,
}) {
  const [sizeChosen, setSizeChosen] = useState(null);
  const [sizeGuideModalOpen, setSizeGuideModalOpen] = useState(false);

  return (
    <>
      <h1 className='text-lg font-medium text-left 2xl:text-2xl 3xl:text-3xl'>
        {name}
      </h1>
      <div className='mt-1 text-left'>
        <h5 className='inline font-light lg:text-lg 2xl:text-xl 3xl:text-2xl'>
          {discountPrice && discountPrice > 0
            ? toVND(discountPrice)
            : toVND(price)}
          ₫{' '}
        </h5>
        {discountPrice !== 0 && (
          <h5 className='inline font-light text-red-600 line-through lg:text-lg 2xl:text-xl 3xl:text-2xl'>
            {toVND(price)} ₫
          </h5>
        )}
      </div>
      <div className='grid grid-cols-3 gap-2 mt-3'>
        {inStock.map((stock, i) => {
          if (stock.inStock > 0)
            return (
              <button
                key={name + i}
                className={`border-2 p-2 ${
                  sizeChosen === stock.size ? 'border-black' : 'border-gray-300'
                } hover:border-black`}
                onClick={() => {
                  setSizeChosen(stock.size);
                }}
              >
                {stock.size}
              </button>
            );
          else
            return (
              <button
                key={name + i}
                disabled
                className={`border-2 p-2 border-gray-300 line-through`}
              >
                {stock.size}
              </button>
            );
        })}
      </div>
      <button
        className='mt-3 text-right underline'
        onClick={() => setSizeGuideModalOpen(true)}
      >
        Size Guide
      </button>
      <a
        className='p-1 mt-3 text-center border-2 border-gray-300 hover:border-black 2xl:text-xl 3xl:text-2xl'
        href='https://m.me/metanoia.hanoi'
        rel='noopener noreferrer'
        target='_blank'
      >
        Đặt hàng qua <i className='fab fa-facebook-square' />
      </a>
      <h2 className='mt-3 text-justify 2xl:text-xl 3xl:text-2xl'>
        {description}
      </h2>

      <Modal
        show={sizeGuideModalOpen}
        onClose={() => setSizeGuideModalOpen(false)}
      >
        <div className='relative w-[330px] h-[450px] md:w-[400px] md:h-[535px]'>
          <ImageWithBlur
            image={{
              src: '/sizeGuide.jpg',
              blurhash: 'L5RVwlj[?wofozof%Mj[?ct7-ps:',
            }}
            objectFit='cover'
          />
        </div>
      </Modal>
    </>
  );
}
