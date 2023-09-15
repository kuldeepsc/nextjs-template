import {Suspense} from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../src/utils/ErrorBoundary";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
const PricingPageComponent = dynamic(import("../src/components/desktop/home/Pricing"));


const Pricing = ({ pageData }) => {
    return (
        <>
            <ErrorBoundary>

                <Suspense fallback={<h2>Loading...</h2>}>
                    {

                        <DesktopLayout
                            data={pageData}
                            mainComponent={PricingPageComponent}
                            pageType="microsite"
                        />
                    }

                </Suspense>
            </ErrorBoundary>

        </>
    )
}



export default Pricing;

