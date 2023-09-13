import {Suspense} from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../src/utils/ErrorBoundary";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
const AboutPageComponent = dynamic(import("../src/components/desktop/home/About"));


const Home = ({ pageData }) => {
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<h2>Loading...</h2>}>
                    {

                        <DesktopLayout
                            data={pageData}
                            mainComponent={AboutPageComponent}
                            pageType="microsite"
                        />
                    }
                </Suspense>
            </ErrorBoundary>

        </>
    )
}



export default Home;

