//function to do time and date calculations
//to find when each news item was posted compared to the current time
export default function durationCalculator(publishedAt) {
  //variables to hold respective date or time value
  const currYear = parseInt(new Date().getFullYear(), 10);
  const currMonth = parseInt(new Date().getMonth(), 10);
  const currDay = parseInt(new Date().getDay(), 10);
  //const currHour = parseInt(new Date().getHours(), 10);
  //const currMin = parseInt(new Date().getMinutes(), 10);
  //const currSeconds = parseInt(new Date().getSeconds(), 10);

  var newsYear = publishedAt.slice(0, 4);
  //if a value has two digit and the first digit is zero(0), remove the first digit
  var newsMonth = publishedAt.slice(5, 7);
  if (newsMonth.length === 2) {
    if (newsMonth[0] === 0) {
      newsMonth = newsMonth[1];
    }
  }
  var newsDay = publishedAt.slice(8, 10);
  if (newsDay.length === 2) {
    if (newsDay[0] === 0) {
      newsDay = newsDay[1];
    }
  }
  var newsHour = publishedAt.slice(11, 13);
  if (newsHour.length === 2) {
    if (newsHour[0] === 0) {
      newsHour = newsHour[1];
    }
  }
  var newsMin = publishedAt.slice(14, 16);
  if (newsMin.length === 2) {
    if (newsMin[0] === 0) {
      newsMin = newsMin[1];
    }
  }
  var newsSeconds = publishedAt.slice(17, 19);
  if (newsSeconds.length === 2) {
    if (newsSeconds[0] === 0) {
      newsSeconds = newsSeconds[1];
    }
  }

  //do calculations to find when each news item was posted compared to the current time and date
  if (currYear - parseInt(newsYear, 10) > 0) {
    if (currYear - parseInt(publishedAt.slice(0, 4), 10) > 0 === 1) {
      return '1 year ago';
    } else {
      return publishedAt.slice(0, 4) + ' years ago';
    }
  } else if (currMonth - parseInt(newsMonth, 10) > 0) {
    if (currMonth - parseInt(newsMonth, 10) === 1) {
      return '1 month ago';
    } else {
      return newsMonth + ' months ago';
    }
  } else if (currDay - parseInt(newsDay, 10) > 0) {
    if (currDay - parseInt(newsDay, 10) === 1) {
      return 'Yesterday';
    } else {
      return newsDay + ' days ago';
    }
  } else {
    return 'Today';
  }
}
