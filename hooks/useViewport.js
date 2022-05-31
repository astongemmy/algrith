import React, { useEffect, useState } from 'react';

export default function useViewport() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateLayout() {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateLayout);
    updateLayout();
    return () => window.removeEventListener('resize', updateLayout);
  }, []);
  const viewport = dimension.width <= 640 ? 'sm' : dimension.width <= 768 ? 'md' : dimension.width <= 1024 ? 'lg' : dimension.width <= 1280 ? 'xl' : dimension.width <= 1536 ? '2xl' : ''
  return { viewport, dimension };
}