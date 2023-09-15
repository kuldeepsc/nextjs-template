const homeProps = async (context, isMobile = false, pageType = '') => {
  const pageData = {
    isMobile,
    pageType,
  };
  return { props: { pageData } };
};

export default homeProps;
