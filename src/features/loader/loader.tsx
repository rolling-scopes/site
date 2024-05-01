import { createPortal } from 'react-dom';
import useLoader from '@/features/loader/hooks/useLoader.ts';

import './loader.scss';

const Loader = () => {
  const { isVisible, wrapperRef } = useLoader();

  return (
    isVisible &&
    createPortal(
      <div ref={wrapperRef} className="loader-wrapper">
        <div className="loader" />
      </div>,
      document.body,
    )
  );
};

export default Loader;
