import dynamic from "next/dynamic";
const DesktopLayout = dynamic(import("../src/layouts/deskop/DesktopLayout"));
import Equity from "../src/components/desktop/equity/equity";
import equityProps from "../shelper/equityProps";

const equity = ({ pageData }) => {
    return (
        <>
            <DesktopLayout
                data={pageData}
                mainComponent={Equity}
                pageType="microsite"
            />
        </>
    )
}

export async function getServerSideProps(context) {
    return equityProps(context, false, 'market');
}

export default equity;

