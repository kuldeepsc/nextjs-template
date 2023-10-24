import dynamic from 'next/dynamic';
import HomeDesktop from '../src/components/desktop/index';

const DesktopLayout = dynamic(import('../src/layouts/deskop/DesktopLayout'));

function NextHome({ pageData }) {
  console.log('NextHome......');
  return (
    <>
      {/* <DesktopLayout
            data={pageData}
            mainComponent={HomeDesktop}
            pageType="home"
        /> */}
      <HomeDesktop />
    </>
  );
}

export default NextHome;
