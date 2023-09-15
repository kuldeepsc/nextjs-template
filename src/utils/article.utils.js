import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const arrayOnly = (value) => {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'object') {
    return Object.values(value);
  }
  return [];
};

const limitChar = (str = '', length) => {
  if (str.length < length) {
    return str;
  }
  return `${str.substring(0, length)}...`;
};

const stripTags = (str = '') => str.replace(/(<([^>]+)>)/gi, '');

const ignoreQueryParams = (url = '', reSlash = true) => {
  const queryPos = url.indexOf('?');
  url = queryPos > 0 ? url.substr(0, queryPos) : url;
  if (!reSlash) {
    return url;
  }
  return url[url.length - 1] != '/' ? url : url.substring(0, url.length - 1);
};

const currentDate = () => new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });

const ellipsis = (str = '', len = 98) => `${str.slice(0, len)}...`;

const scrollToTarget = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

const scrollIntoViewIfNeeded = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    element.scrollIntoViewIfNeeded(true);
  }
};

const getQueryString = (field, url) => {
  const href = url;
  const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
  const string = reg.exec(href);
  return string ? string[1] : null;
};

const ucWords = (string) => {
  string = string && string.toLowerCase();
  return string && string.replace(
    /(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
    ($1) => $1.toUpperCase(),
  );
};

const objectToArray = (obj = [], removeLengthKey = true) => {
  const arr = [];
  for (const p in obj) {
    if (removeLengthKey) {
      if (p !== 'length') {
        arr[p] = obj[p];
      }
    } else {
      arr[p] = obj[p];
    }
  }
  return arr;
};

const timeAgo = (date, timeStamp = false) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const current = new Date();

  if (timeStamp) {
    date = new Date(date * 1000);
  }

  const elapsed = current - date;

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} seconds ago`;
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} minutes ago`;
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} hours ago`;
  }

  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} days ago`;
  }

  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} months ago`;
  }

  return `${Math.round(elapsed / msPerYear)} years ago`;
};

export {
  arrayOnly,
  limitChar,
  stripTags,
  ignoreQueryParams,
  currentDate,
  ellipsis,
  scrollToTarget,
  scrollIntoViewIfNeeded,
  getQueryString,
  ucWords,
  objectToArray,
  timeAgo,
};
