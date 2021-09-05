export default function Footer() {
  return (
    <footer className='flex items-center justify-between p-3 3xl:p-5 2xl:p-4 bg-metanoiaBeige'>
      <div className='space-x-2'>
        <a
          href='https://www.facebook.com/metanoia.hanoi/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-facebook fa-lg' />
        </a>
        <a
          href='https://www.instagram.com/metanoia.hanoi/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-instagram fa-lg' />
        </a>
      </div>

      <div className='text-sm lg:text-base 2xl:text-lg 3xl:text-xl'>
        &copy; 2021 METANOIA
      </div>
    </footer>
  );
}
