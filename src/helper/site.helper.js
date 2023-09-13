import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const base_url = (url='') => {
    return publicRuntimeConfig.siteUrl+url;
};



export {
    base_url,
};