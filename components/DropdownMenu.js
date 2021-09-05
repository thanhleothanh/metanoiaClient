import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (container ?? !container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return (
    <div ref={container} className='relative'>
      <button onClick={() => setShow(!show)}>
        <i className='fas fa-bars fa-lg' />
      </button>

      <div
        style={{
          display: `${show ? 'inline' : 'none'}`,
        }}
      >
        <div className='absolute right-0 flex flex-col overflow-hidden font-medium text-right origin-top-right bg-white border-2 w-36'>
          <Link href='/products'>
            <a className='p-3 text-sm hover:text-metanoiaYellow sm:text-base'>
              Sản phẩm
            </a>
          </Link>
          <Link href='/collections/sun-lust'>
            <a className='p-3 text-sm hover:text-metanoiaYellow sm:text-base'>
              Bộ sưu tập
            </a>
          </Link>
          <Link href='/about'>
            <a className='p-3 text-sm hover:text-metanoiaYellow sm:text-base'>
              Về chúng mình
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
