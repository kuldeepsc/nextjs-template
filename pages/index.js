import dynamic from 'next/dynamic';
import homeProps from '../shelper/homeProps';
import ErrorBoundary from '../src/utils/ErrorBoundary';

const DesktopLayout = dynamic(import('../src/layouts/deskop/DesktopLayout'));
const HomePageComponent = dynamic(import('../src/components/desktop/home/Home'));

function Home({ pageData }) {
  return (
    <ErrorBoundary>
      <DesktopLayout
        data={pageData}
        mainComponent={HomePageComponent}
        pageType="microsite"
      />
    </ErrorBoundary>
  );
}

export async function getServerSideProps(context) {
    console.log("homepaage.... ");
  return homeProps(context, false, 'market');
}

export default Home;
