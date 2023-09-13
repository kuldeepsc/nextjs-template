/*
* the IntersectionObserver API to load a custom component only when it enters the viewport.
*
* */

import React, { useRef, useState, useEffect } from 'react';

function LazyLoad({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div ref={ref}>
      {isVisible && children}
    </div>
  );
}

const withLazyLoad = (WrappedComponent) => ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(false);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  try {
    return (
      <div ref={ref}>
        {isLoading && <LoadingSpinner isDynamic={isVisible} />}
        {isError && <FallbackComponent error={props.error} />}
        <div aria-live="polite">{isVisible && <WrappedComponent {...props} />}</div>
      </div>
    );
  } catch (err) {
    setIsError(true);
  }
};
withLazyLoad().getInitialProps = async (ctx) => {
  try {
    const wrappedComponentProps = await WrappedComponent.getInitialProps(ctx);
    return { ...wrappedComponentProps };
  } catch (err) {
    return { error: err };
  }
};

function FallbackComponent({ error: { status } }) {
  return (
    <div>
      {status === 404
            && <p>Sorry, the page you're looking for couldn't be found.</p>}
      {status === 500
            && <p>Sorry, there was an error on the server. Please try again later.</p>}
      {status === 503
            && <p>Sorry, the service is currently unavailable. Please try again later.</p>}
      {status === 400
            && <p>Sorry, there was an error with the request. Please try again.</p>}
      {!status
            && <p>Sorry, there was an error loading the component. Please refresh the page and try again.</p>}
      <button type="button" onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div aria-label="Loading..." className="loading-box"><h3 className="spinner">Loading.....</h3></div>
  );
}

export {
  LazyLoad,
  withLazyLoad,
  FallbackComponent,
  LoadingSpinner,
};
