import {useState, useEffect, useContext} from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import DesktopLayoutStyle from '../../../styles/desktop/DesktopLayoutStyle';

const DesktopLayout = (props) => {
    const MainComponent = props.mainComponent;
    useEffect(() => {
        console.log("pageType... ", props.pageType)
    })
    return (
        <>
            <Header></Header>
            <MainComponent isDesktop={true} />
            <Footer></Footer>
            <style jsx global>{DesktopLayoutStyle}</style>
        </>
    )
}

export default DesktopLayout;