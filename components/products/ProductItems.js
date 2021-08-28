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
              <div className='longImage relative max-w-2xl w-full'>
                <ImageWithBlur
                  className='absolute select-none'
                  image={product.images[0]}
                  objectFit='cover'
                />
                <Image
                  className='absolute select-none transition-opacity opacity-0 hover:opacity-100 duration-200'
                  src={product.images[1].src}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='font-normal text-base mt-1'>{product.name}</h2>
              <h5 className='font-light text-sm xs:text-base inline'>
                {product.discountPrice && product.discountPrice > 0
                  ? toVND(product.discountPrice)
                  : toVND(product.price)}{' '}
                ₫{' '}
              </h5>
              {product.discountPrice !== 0 && product.discountPrice > 0 && (
                <h5 className='font-light text-sm xs:text-base inline line-through text-red-600'>
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
