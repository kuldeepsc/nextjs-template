import dynamic from "next/dynamic";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
import HomeDesktop from "../src/components/desktop/index";

const Home = ({ pageData }) => {
  return (
      <>
        {/* <DesktopLayout
            data={pageData}
            mainComponent={HomeDesktop}
            pageType="home"
        /> */}
          <HomeDesktop/>
      </>
  )
}

export default Home;
