import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout
      title='Metanoia'
      description='METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa'
    >
      <div className='h-auto min-h-screen w-full px-5 xs:px-10'>
        <div className='h-screen flex flex-col justify-center items-center max-w-lg mx-auto'>
          <div className='text-center text-2xl sm:text-4xl font-light'>
            Không có gì ở đây cả!
          </div>
          <Link href='/'>
            <a className='flex justify-center items-center w-full mt-5 sm:mt-10 p-3 border-2 border-gray-300 hover:border-black'>
              Trở về trang chủ Metanoia
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
