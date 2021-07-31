//function to do time and date calculations
//to find when each news item was posted compared to the current time
export default function durationCalculator(publishedAt) {
  //variables to hold respective date or time value
  const currYear = parseInt(new Date().getFullYear(), 10);
  const currMonth = parseInt(new Date().getMonth(), 10) + 1;
  const currDay = parseInt(new Date().getDate(), 10);
  const currHour = parseInt(new Date().getHours(), 10);
  const currMin = parseInt(new Date().getMinutes(), 10);
  const currSeconds = parseInt(new Date().getSeconds(), 10);

  let newsYear = publishedAt.slice(0, 4);
  //if a value has two digit and the first digit is zero(0), remove the first digit
  let newsMonth = publishedAt.slice(5, 7);
  if (newsMonth.length === 2 && newsMonth[0] === '0') {
    newsMonth = newsMonth[1];
  }
  let newsDay = publishedAt.slice(8, 10);
  if (newsDay.length === 2 && newsDay[0] === '0') {
    newsDay = newsDay[1];
  }
  let newsHour = publishedAt.slice(11, 13);
  if (newsHour.length === 2 && newsHour[0] === '0') {
    newsHour = newsHour[1];
  }
  let newsMin = publishedAt.slice(14, 16);
  if (newsMin.length === 2 && newsMin[0] === '0') {
    newsMin = newsMin[1];
  }
  let newsSeconds = publishedAt.slice(17, 19);
  if (newsSeconds.length === 2 && newsSeconds[0] === '0') {
    newsSeconds = newsSeconds[1];
  }

  //do calculations to find when each news item was posted compared to the current time and date
  if (currYear - parseInt(newsYear, 10) > 0) {
    if (currYear - parseInt(publishedAt.slice(0, 4), 10) > 0 === 1) {
      return '1 year ago';
    } else {
      return currYear - parseInt(newsYear, 10) + ' years ago';
    }
  } else if (currMonth - parseInt(newsMonth, 10) > 0) {
    if (currMonth - parseInt(newsMonth, 10) === 1) {
      return '1 month ago';
    } else {
      return currMonth - parseInt(newsMonth, 10) + ' months ago';
    }
  } else if (currDay - parseInt(newsDay, 10) > 0) {
    if (currDay - parseInt(newsDay, 10) === 1) {
      return 'Yesterday';
    } else {
      return currDay - parseInt(newsDay, 10) + ' days ago';
    }
  } else if (currHour - parseInt(newsHour, 10) > 0) {
    if (currHour - parseInt(newsHour, 10) === 1) {
      return '1 hour ago';
    } else {
      return currHour - parseInt(newsHour, 10) + ' hours ago';
    }
  } else if (currMin - parseInt(newsMin, 10) > 0) {
    if (currMin - parseInt(newsMin, 10) === 1) {
      return '1 minute ago';
    } else {
      return currMin - parseInt(newsMin, 10) + ' minutes ago';
    }
  } else if (currSeconds - parseInt(newsSeconds, 10) > 0) {
    if (currSeconds - parseInt(newsSeconds, 10) === 1) {
      return '1 second ago';
    } else {
      return currSeconds - parseInt(newsSeconds, 10) + ' seconds ago';
    }
  }
}
