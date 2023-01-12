/*
*
* In this example, the LazyImage component uses the IntersectionObserver API to monitor the visibility of the image element, and it loads the image using the window.Image constructor when the element becomes visible in the viewport. The useEffect hook is used to set up the observer and disconnect it when the component unmounts. The LazyImage component also accepts all the same props as the standard img element, such as width, height, className, and style, and it passes these props to the img element.
* */
import React, { useEffect, useRef } from 'react';

function LazyImage({ src, alt, width, height, className, style }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = new window.Image();
          img.src = src;
          img.alt = alt;
          img.width = width;
          img.height = height;
          img.className = className;
          img.style = style;
          img.onload = () => {
            imageRef.current.src = src;
            imageRef.current.alt = alt;
            imageRef.current.width = width;
            imageRef.current.height = height;
            imageRef.current.className = `${className} lazy-loaded`;
            imageRef.current.style = style;
            observer.disconnect();
          };
        }
      });
    });
    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [src, alt, width, height, className, style]);

  return (
      <img
          ref={imageRef}
          width={width}
          height={height}
          className={className}
          style={style}
      />
  );
}

export default LazyImage;
