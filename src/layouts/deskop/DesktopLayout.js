import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import DesktopLayoutStyle from '../../../styles/desktop/DesktopLayoutStyle';

function DesktopLayout(props) {
  const { mainComponent: MainComponent, pageType } = props;
  useEffect(() => {
    console.log('pageType... ', pageType);
  });
  return (
    <>
      <Header />
      <MainComponent isDesktop />
      <Footer />
      <style jsx global>{DesktopLayoutStyle}</style>
    </>
  );
}

export default DesktopLayout;
