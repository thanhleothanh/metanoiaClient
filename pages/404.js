import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout
      title='Metanoia'
      description='METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa'
    >
      <div className='w-full h-auto min-h-screen px-5 xs:px-10'>
        <div className='flex flex-col items-center justify-center h-screen max-w-lg mx-auto'>
          <div className='text-2xl font-light text-center sm:text-4xl'>
            Không có gì ở đây cả!
          </div>
          <Link href='/'>
            <a className='flex items-center justify-center w-full p-3 mt-5 border-2 border-gray-300 sm:mt-10 hover:border-black'>
              Trở về trang chủ Metanoia
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
