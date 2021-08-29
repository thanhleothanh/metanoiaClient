import ImageWithBlur from '@/components/ImageWithBlur';
import Image from 'next/image';
import toVND from '@/utils/toVND';
import Link from 'next/link';

export default function ProductItems({ productsString, chosenCategory }) {
  //for chosing category
  let products = [...JSON.parse(productsString)];
  if (chosenCategory) {
    products = products.filter(
      (product) => product.category === chosenCategory
    );
  }
  return (
    <>
      {products.map((product) => {
        return (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <a>
              <div className='relative w-full max-w-2xl pb-3/2'>
                <ImageWithBlur
                  className='absolute select-none'
                  image={product.images[0]}
                  layout='fill'
                  objectFit='cover'
                />
                <Image
                  className='absolute transition-opacity duration-200 opacity-0 select-none hover:opacity-100'
                  src={product.images[1].src}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='mt-1 text-base font-normal'>{product.name}</h2>
              <h5 className='inline text-sm font-light xs:text-base'>
                {product.discountPrice && product.discountPrice > 0
                  ? toVND(product.discountPrice)
                  : toVND(product.price)}{' '}
                ₫{' '}
              </h5>
              {product.discountPrice !== 0 && product.discountPrice > 0 && (
                <h5 className='inline text-sm font-light text-red-600 line-through xs:text-base'>
                  {toVND(product.price)} ₫
                </h5>
              )}
            </a>
          </Link>
        );
      })}
    </>
  );
}
