import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('9656c11fda254404a9abacd3f5fd915d');

export const useNewsQuery = ({category, language, pageSize, local}) => {
  const countryName = useSelector(state => state.settings.country);

  //function to alert user when news query returns empty response
  const newUnavailable = (ntype, ncategory) => {
    const tempHolder = ntype === 'local' ? '\nfor the current country.' : '';
    switch (ncategory) {
      case 'general':
        Alert.alert('Sorry, Gen. news unavailable' + tempHolder);
        break;
      case 'technology':
        Alert.alert('Sorry, Tech. news unavailable' + tempHolder);
        break;
      case 'health':
        Alert.alert('Sorry, Hlth. news unavailable' + tempHolder);
        break;
      case 'science':
        Alert.alert('Sorry, Sci. news unavailable' + tempHolder);
        break;
      case 'sports':
        Alert.alert('Sorry, Spt. news unavailable' + tempHolder);
        break;
      case 'business':
        Alert.alert('Sorry, Bus. news unavailable' + tempHolder);
        break;
      case 'entertainment':
        Alert.alert('Sorry, Entmt. news unavailable' + tempHolder);
        break;
      default:
        break;
    }
  };
  const queryNews = async () => {
    return await axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          apiKey: '9656c11fda254404a9abacd3f5fd915d',
          category,
          language,
          pageSize,
          ...(local && {country: countryName}),
        },
      })
      .then(function (response) {
        // check if the news array from the news API
        // is not empty
        if (response.data.articles.length === 0) {
          return newUnavailable('local', category);
        }

        return response.data.articles;
      })
      .catch(function (error) {
        //alert user in case the news api returns an error
        //or when the query is taking too long
        return Alert.alert('Oops! \nCheck your network');
      });
    /*return await newsapi.v2
      .topHeadlines({
        category,
        language,
        pageSize,
        ...(local && {country: countryName}),
      })
      .then(response => {
        // check if the news array from the news API
        // is not empty
        if (response.articles.length === 0) {
          return newUnavailable('local', category);
        }

        return response.articles;
      })
      .catch(() => {
        //alert user in case the news api returns an error
        //or when the query is taking too long
        return Alert.alert('Oops! \nCheck your network');
      });*/
  };

  return {queryNews};
};
