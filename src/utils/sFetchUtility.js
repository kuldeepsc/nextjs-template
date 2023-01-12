import axios from "axios";
import axiosRetry from "axios-retry";
const NodeCache = require("node-cache");
const incache = new NodeCache();
axiosRetry(axios, { retries: 3 });

const Agent = require('agentkeepalive');

const keepAliveAgent = new Agent({
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000, // active socket keepalive for 60 seconds
  freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

const httpsKeepAliveAgent = new Agent.HttpsAgent({
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000,
  freeSocketTimeout: 30000,
});

const instance = axios.create({
  timeout: 10000,
  httpAgent: keepAliveAgent,
  httpsAgent: httpsKeepAliveAgent
});

export default async function fetchUtility(api, defaultValue = '', key = false, ttl = 900, headers = '') {
  try {
    if (key) {
      let data = incache.get(key);
      if (data) {
        return data;
      }
    }
    let defaultHeaders = {
      'Accept-Encoding': 'gzip, deflate',
    };
    let finalHeaders = '';
    if (headers != '') {
      finalHeaders = { ...defaultHeaders, ...headers };
    } else {
      finalHeaders = {
        ...defaultHeaders
      };
    }
    const data = await instance.get(api, { headers: finalHeaders });
    if (data && data.data) {
      if (key) {
        incache.set(key, data.data, ttl);
      }
      return data.data;
    }

    return defaultValue;
  } catch (error) {
    // console.error(error);
    return defaultValue;
  }
}
