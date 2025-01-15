import {Alert} from 'react-native';
// import {useSelector} from 'react-redux';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('9656c11fda254404a9abacd3f5fd915d');

export const test = (/*category, language, pageSize, countryName*/) => {
  return 'Heyyyyy';
  //function to alert user when news query returns empty response
  /*return await newsapi.v2
    .topHeadlines({
      category,
      language,
      pageSize,
      countryName,
    })
    .then(response => {
      // check if the news array from the news API
      // is not empty
      if (response.articles.length === 0) {
        console.log('--------- Error: ');
      }

      console.log('The articles: ', response.articles);
      return response.articles;
    })
    .catch(() => {
      //alert user in case the news api returns an error
      //or when the query is taking too long
      return Alert.alert('Oops! \nCheck your network');
    });*/
};
