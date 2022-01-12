import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API_URL_HOST = publicRuntimeConfig.api_url_host || "http://localhost:1337"

export const PER_PAGE = 5;