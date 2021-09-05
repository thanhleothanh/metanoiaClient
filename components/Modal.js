import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className='fixed top-0 z-20 flex items-center justify-center w-full h-full overflow-auto bg-opacity-40 bg-metanoiaBlack'>
      <div className='flex flex-col h-auto max-w-2xl overflow-auto bg-white min-w-1/4 max-h-9/10'>
        <div className='sticky top-0 flex justify-between px-2 py-1'>
          <div className='font-semibold xl:text-lg'>{title && title}</div>
          <button onClick={handleClose}>
            <i className='fas fa-times fa-lg' />
          </button>
        </div>
        <div className='self-center px-2 py-2 mx-1 xl:px-6'>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}

// https://devrecipes.net/modal-component-with-next-js/
