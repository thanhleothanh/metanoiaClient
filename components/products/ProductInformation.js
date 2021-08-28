import toVND from '@/utils/toVND';
import { useState } from 'react';
export default function ProductInformation({
  name,
  description,
  price,
  discountPrice,
  inStock,
}) {
  const [sizeChosen, setSizeChosen] = useState(null);
  return (
    <>
      <h1 className='text-left text-lg font-medium'>{name}</h1>
      <div className='text-left mt-1'>
        <h5 className='font-light lg:text-lg inline'>
          {discountPrice && discountPrice > 0
            ? toVND(discountPrice)
            : toVND(price)}
          ₫{' '}
        </h5>
        {discountPrice !== 0 && (
          <h5 className='font-light lg:text-lg inline line-through text-red-600'>
            {toVND(price)} ₫
          </h5>
        )}
      </div>
      {/* <div className='grid grid-cols-3 gap-2 mt-3'>
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
      </div> */}
      <a
        className='border-2 p-1 border-gray-300 hover:border-black text-center mt-3'
        href='https://m.me/metanoia.hanoi'
        rel='noopener noreferrer'
        target='_blank'
      >
        Đặt hàng qua <i className='fab fa-facebook-square' />
      </a>
      <h2 className='text-left mt-3'>{description}</h2>
    </>
  );
}
