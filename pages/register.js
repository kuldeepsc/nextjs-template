import {Suspense} from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../src/utils/ErrorBoundary";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
const RegisterPageComponent = dynamic(import("../src/components/desktop/home/Register"));
import homeProps from "../shelper/homeProps";


const Register = ({ pageData }) => {
    return (
        <>
            <ErrorBoundary>

                <Suspense fallback={<h2>Loading...</h2>}>
                    {

                        <DesktopLayout
                            data={pageData}
                            mainComponent={RegisterPageComponent}
                            pageType="microsite"
                        />
                    }

                </Suspense>
            </ErrorBoundary>

        </>
    )
}

export async function getServerSideProps(context) {
    return homeProps(context, false, 'market');
}

export default Register;

