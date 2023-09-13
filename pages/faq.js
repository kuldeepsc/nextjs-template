import {Suspense} from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../src/utils/ErrorBoundary";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
const FaqPageComponent = dynamic(import("../src/components/desktop/home/Faq"));


const Faq = ({ pageData }) => {
    return (
        <>
            <ErrorBoundary>

                <Suspense fallback={<h2>Loading...</h2>}>
                    {

                        <DesktopLayout
                            data={pageData}
                            mainComponent={FaqPageComponent}
                            pageType="microsite"
                        />
                    }

                </Suspense>
            </ErrorBoundary>

        </>
    )
}



export default Faq;

