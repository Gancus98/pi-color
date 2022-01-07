import { useState, useEffect, useCallback } from 'react';

const useWindowWidth = () => {
  const isWindow = typeof window !== 'undefined';

  const getWindowWidth = useCallback(() => {
    const width = isWindow ? window.innerWidth : 360;
    return {
      width,
    };
  },[isWindow])

  const [windowWidth, setWindowDimensions] = useState(getWindowWidth());

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowWidth());
  },[getWindowWidth])

  useEffect(() => {
    if (isWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, isWindow]);

  return windowWidth;
}

export default useWindowWidth;