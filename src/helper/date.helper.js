import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const getDatesListOfMonth = (year, month, allowAnyMonth = false) => {
  // const year = 2022;
  // const month = 0; // January
  month -= 1;
  const currentDate = new Date();
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let dateList = [];
  for (let i = 0; i < daysInMonth; i++) {
    if ((year >= currentDate.getFullYear() && month > currentDate.getMonth()) || (year == currentDate.getFullYear() && month == currentDate.getMonth() && i > (currentDate.getDate() - 1))) {
      // more than current date
      if (allowAnyMonth) {
        date.setDate(i + 1);
        dateList.push(new Date(date));
      }
    } else {
      date.setDate(i + 1);
      dateList.push(new Date(date));
    }
  }
  dateList = dateList.map((d) => d.toLocaleDateString());
  return dateList;
};

const getDateListBetweenYears = (toYear = 1) => {
  const currentDate = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(currentDate.getFullYear() - toYear);
  let dateList = [];
  while (currentDate > oneYearAgo) {
    dateList.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() - toYear);
  }
  dateList = dateList.map((date) => date.toLocaleDateString());
  return dateList;
  // console.log('dateList....',  dateList);
  // console.log(dateList.map(date => date.toLocaleDateString()));
  // This will give you the dates in the format of yyyy-mm-dd
};

export const getDatesByYear = (startYear, tillNow = false) => {

  const date = new Date(startYear, 0, 1);
  const dates = [];
  if (tillNow) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    while (date.getFullYear() <= currentYear) {
      if(date.getFullYear() === currentYear && date.getMonth() === currentMonth && date.getDate() > currentDay){
        break;
      }
      const year = date.getFullYear();
      if (!dates[year]) {
        dates[year] = [];
      }
      dates[year].push(date.toLocaleDateString());
      // dates[year].push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  } else {
    while (date.getFullYear() === startYear) {
      const yr = date.getFullYear();
      if (!dates[yr]) {
        dates[yr] = [];
      }
      dates[yr].push(date.toLocaleDateString());
      // dates[yr].push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }
  const objd= Object.entries(dates).filter(([, datesArray]) => datesArray.length > 0).reduce((obj, [year, datesArray]) => {
    obj[year] = datesArray;
    return obj;
  }, {});
  return  objd;
  // return Object.entries(objd).map(([key, value]) => ({ key, value }));

};

export const getMonthsByYear = (startYear, startMonth=0, tillNow = true) => {
  const date = new Date(startYear, startMonth, 1);
  const dates = {};
  if (tillNow) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    while (date.getFullYear() < currentYear || (date.getFullYear() === currentYear && date.getMonth() <= currentMonth)) {
      const year = date.getFullYear();
      if (!dates[year]) {
        dates[year] = [];
      }
      dates[year].push(date.toDateString());
      // dates[year].push(date.getMonth());
      date.setMonth(date.getMonth() + 1);
      if (date.getMonth() === 12) {
        date.setFullYear(date.getFullYear() + 1);
        date.setMonth(0);
      }
    }
  }
  return dates;
};

export {
  getDatesListOfMonth,
  getDateListBetweenYears,
  getDatesByYear,
  getMonthsByYear,
};
