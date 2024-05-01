import { useEffect, useRef, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { LOADING_STATE } from '@/features/loader/constants.ts';

const useLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isLoading = navigation.state === LOADING_STATE;

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
    }

    const wrapper = wrapperRef.current;
    if (!isLoading && wrapper) {
      wrapper.classList.add('fade-out');
      wrapper.onanimationend = () => setIsVisible(false);
    }
  }, [isLoading]);

  return { isVisible, wrapperRef };
};

export default useLoader;
