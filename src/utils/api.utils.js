import axios from 'axios';
import NodeCache from 'node-cache';
import { isEmpty } from 'underscore';
import { createStrHash } from '../helper/general';

const cacheData = new NodeCache();

export function getCacheInst() {
  return cacheData;
}

export function unsetCache(key = '') {
  if (key.length) {
    const hash = createStrHash(key);
    if (cacheData.has(hash)) cacheData.del(hash);
  } else {
    cacheData.flushAll();
  }
}

export function api(url, {
  defaultReturnValue,
} = {
  defaultReturnValue: '',
}) {
  return axios(url).then(({ data }) => {
    if (defaultReturnValue !== '') {
      return data && Object.keys(data).length ? data : defaultReturnValue;
    }
    return data;
  }).catch(() => defaultReturnValue);
}

// should be used at server side for better performance
export async function apiWithCache(url, {
  timeout,
  defaultReturnValue,
} = {
  timeout: 60 * 4,
  defaultReturnValue: '',
}) {
  const hash = createStrHash(url);
  const value = cacheData.get(hash);
  if (value && typeof value === 'object') {
    value.source = 'cache';
    return value;
  }
  const data = await api(url, { defaultReturnValue });
  if (typeof data === 'object' && !isEmpty(data)) data.source = 'live';
  cacheData.set(hash, data, timeout);
  return data;
}

export const TIMECONSTANTS = Object.freeze({
  FIFE: 60 * 5,
  FIFTEEN: 60 * 15,
  THIRTYMINUTES: 60 * 30,
  ONEHOUR: 60 * 60,
  ONEDAY: 60 * 60 * 24,
});

export async function getData(url, cacheDuration = TIMECONSTANTS.ONEHOUR) {
  try {
    const cacheKey = `cache-${url}`;
    const cache = global.__NEXT_DATA__.cache;

    // Check if the data is already in the cache
    if (cache[cacheKey]) {
      const data = cache[cacheKey].data;
      const expiration = cache[cacheKey].expiration;
      const now = Date.now();

      // Check if the cache is still valid
      if (now < expiration) {
        return data;
      }
    }

    // If the data is not in the cache, fetch it from the API
    const response = await fetch(url);
    const data = await response.json();

    // Save the data to the cache
    cache[cacheKey] = {
      data,
      expiration: Date.now() + cacheDuration,
    };

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
