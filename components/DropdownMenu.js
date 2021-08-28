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
          transition: '0.5s',
        }}
      >
        <div className='flex flex-col origin-top-right absolute right-0 w-32 mt-1 bg-white overflow-hidden font-medium text-right'>
          <Link href='/products'>
            <a className='p-3 hover:text-metanoiaYellow'>Products</a>
          </Link>
          <Link href='/collections/sun-lust'>
            <a className='p-3 hover:text-metanoiaYellow'>Collections</a>
          </Link>
          <Link href='/about'>
            <a className='p-3 hover:text-metanoiaYellow'> About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
