import DropdownMenu from '@/components/DropdownMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation({ offsetY }) {
  const router = useRouter();
  const path = router.pathname.split('/');

  return (
    <nav
      className='flex justify-between fixed inset-0 z-20 w-full fixedHeader'
      style={{
        backgroundColor: `${
          offsetY !== undefined && offsetY === 0 ? 'transparent' : 'white'
        }`,
        transition: 'background-color 0.5s',
      }}
    >
      <Link href='/'>
        <a className='text-xl md:text-2xl font-semibold py-4 md:py-3 px-4'>
          Metanoia
        </a>
      </Link>
      <ul className='hidden md:flex font-medium space-x-4 p-4'>
        <li>
          <Link href='/products'>
            <a
              className={`p-1 ${
                path[1] === 'products'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              Sản phẩm
            </a>
          </Link>
        </li>
        <li>
          <Link href='/collections/sun-lust'>
            <a
              className={`p-1 ${
                path[1] === 'collections'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              Bộ sưu tập
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a
              className={`p-1 ${
                path[1] === 'about'
                  ? 'border-2 border-black'
                  : ' hover:text-metanoiaYellow'
              }`}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
      <div className='md:hidden px-4 py-4'>
        <DropdownMenu />
      </div>
    </nav>
  );
}
