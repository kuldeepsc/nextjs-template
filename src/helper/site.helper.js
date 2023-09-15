import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const base_url = (url = '') => publicRuntimeConfig.siteUrl + url;

export {
  base_url,
};
