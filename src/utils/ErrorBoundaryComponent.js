import { useState, useEffect } from 'react';

function ErrorBoundaryComponent({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onError = (error, errorInfo) => {
      setHasError(true);
      // You can also log the error to an error reporting service
      console.error('error....', error);
      console.error('errorInfo....', errorInfo);
    };

    // Listen for global errors
    window.addEventListener('error', onError);

    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', onError);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onError);
    };
  }, []);

  if (hasError) {
    return <p>An error occurred. Please try again later.</p>;
  }

  return children;
}

export default ErrorBoundaryComponent;
