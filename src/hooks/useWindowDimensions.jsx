import { useEffect, useState } from "react";

// useWindowDimension.js

export default function useWindowDimensions() {
  const [screenWidth, setScreenWidth] = useState();

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  useEffect(() => {
    if (hasWindow) {
      setScreenWidth(getWindowDimensions());

      function handleResize() {
        setScreenWidth(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);

  return screenWidth;
}
