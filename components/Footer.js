export default function Footer() {
  return (
    <footer className='flex justify-between items-center p-3 bg-metanoiaBeige'>
      <div className='space-x-2'>
        <a
          href='https://www.facebook.com/metanoia.hanoi/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-facebook lg:fa-lg' />
        </a>
        <a
          href='https://www.instagram.com/metanoia.hanoi/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-instagram lg:fa-lg' />
        </a>
      </div>

      <div className='text-xs sm:text-sm lg:text-base'>
        &copy; 2021 Metanoia
      </div>
    </footer>
  );
}
