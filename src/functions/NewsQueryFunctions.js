//import all necessary libraries and packages
import Realm from 'realm';
import {Alert} from 'react-native';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9656c11fda254404a9abacd3f5fd915d');
import {settingsSchema} from '../extras/DatabaseSchemas';

//function to alert user when news query returns empty response
function NewsUnavailable(type, category) {
  const tempHolder = type === 'local' ? '\nfor the current country.' : '';
  switch (category) {
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
}

export function QueryLocalNews(
  category,
  language,
  pageSize,
  setArticle,
  setIsLoading,
  setLargeNews,
) {
  //open the local database, 'Realm', for operation
  Realm.open({
    path: 'settingsDB',
    schema: [settingsSchema],
  })
    .then(async (realm) => {
      const settingsData = realm.objects('Settings');
      console.log('Country: ', settingsData.filtered("_id = 'country'"));
      console.log('News type: ', settingsData.filtered("_id = 'newsType'"));
      console.log('Hello');
      //constants to hold data from the database
      const countryName = settingsData.filtered("_id = 'country'")[0].value;
      const newsType = settingsData.filtered("_id = 'newsType'")[0].value;
      if (newsType === 'large') {
        setLargeNews(true);
      } else {
        setLargeNews(false);
      }
      //query the news api
      await newsapi.v2
        .topHeadlines({
          category,
          language,
          pageSize,
          country: countryName,
        })
        .then((response) => {
          //check if the news array from the news API
          //is not empty
          if (response.articles.length === 0) {
            NewsUnavailable('local', category);
          }
          setArticle(response.articles);
          setIsLoading(false);
        })
        .catch(() => {
          //alert user in case the news api returns an error
          //or when the query is taking too long
          setIsLoading(false);
          return Alert.alert('Oops! \nCheck your network');
        });
      realm.close();
      /*
    if (settingsData.length === 0) {
      realm.write(() => {
        realm.create('Settings', {
          _id: 'country',
          value: 'us',
        });
        realm.create('Settings', {
          _id: 'newsType',
          value: 'large',
        });
        //query the news api
        newsapi.v2
          .topHeadlines({
            category,
            language,
            pageSize,
            country: 'us',
          })
          .then((response) => {
            //check if the news array from the news API
            //is not empty
            if (response.articles.length === 0) {
              NewsUnavailable('local', category);
            }
            setArticle(response.articles);
            setIsLoading(false);
          })
          .catch(() => {
            //alert user in case the news api returns an error
            //or when the query is taking too long
            setIsLoading(false);
            return Alert.alert('Oops! \nCheck your network');
          });
        setLargeNews(true);
      });
    } else {
      //constants to hold data from the database
      const countryName = settingsData.filtered("_id = 'country'")[0].value;
      const newsType = settingsData.filtered("_id = 'newsType'")[0].value;
      if (newsType === 'large') {
        setLargeNews(true);
      } else {
        setLargeNews(false);
      }
      //query the news api
      newsapi.v2
        .topHeadlines({
          category,
          language,
          pageSize,
          country: countryName,
        })
        .then((response) => {
          //check if the news array from the news API
          //is not empty
          if (response.articles.length === 0) {
            NewsUnavailable('local', category);
          }
          setArticle(response.articles);
          setIsLoading(false);
        })
        .catch(() => {
          //alert user in case the news api returns an error
          //or when the query is taking too long
          setIsLoading(false);
          return Alert.alert('Oops! \nCheck your network');
        });
      realm.close();
    }
    */
    })
    .catch((err) =>
      console.log('Settings data query error in news query: ', err),
    );
}

export function QueryForeignNews(
  category,
  language,
  pageSize,
  setArticle,
  setIsLoading,
  setLargeNews,
) {
  //open the local database, 'Realm', for operation
  Realm.open({
    path: 'settingsDB',
    schema: [settingsSchema],
  })
    .then((realm) => {
      const settingsData = realm.objects('Settings');

      //constant to hold data from the database
      const newsType = settingsData.filtered("_id = 'newsType'")[0].value;
      if (newsType === 'large') {
        setLargeNews(true);
      } else {
        setLargeNews(false);
      }
      newsapi.v2
        .topHeadlines({
          category,
          language,
          pageSize,
        })
        .then((response) => {
          //check if the news array from the news API
          //is not empty
          if (response.articles.length === 0) {
            NewsUnavailable('foreign', category);
          }
          setArticle(response.articles);
          setIsLoading(false);
        })
        .catch(() => {
          //alert user in case the news api returns an error
          //or when the query is taking too long
          setIsLoading(false);
          return Alert.alert('Oops! \nCheck your network');
        });
      realm.close();
      /*
    if (settingsData.length === 0) {
      realm.write(() => {
        realm.create('Settings', {
          _id: 'country',
          value: 'us',
        });
        realm.create('Settings', {
          _id: 'newsType',
          value: 'large',
        });
        newsapi.v2
          .topHeadlines({
            category,
            language,
            pageSize,
          })
          .then((response) => {
            //check if the news array from the news API
            //is not empty
            if (response.articles.length === 0) {
              NewsUnavailable('foreign', category);
            }
            setArticle(response.articles);
            setIsLoading(false);
          })
          .catch(() => {
            //alert user in case the news api returns an error
            //or when the query is taking too long
            setIsLoading(false);
            return Alert.alert('Oops! \nCheck your network');
          });
        setLargeNews(true);
      });
    } else {
      //constant to hold data from the database
      const newsType = settingsData.filtered("_id = 'newsType'")[0].value;
      if (newsType === 'large') {
        setLargeNews(true);
      } else {
        setLargeNews(false);
      }
      newsapi.v2
        .topHeadlines({
          category,
          language,
          pageSize,
        })
        .then((response) => {
          //check if the news array from the news API
          //is not empty
          if (response.articles.length === 0) {
            NewsUnavailable('foreign', category);
          }
          setArticle(response.articles);
          setIsLoading(false);
        })
        .catch(() => {
          //alert user in case the news api returns an error
          //or when the query is taking too long
          setIsLoading(false);
          return Alert.alert('Oops! \nCheck your network');
        });
      realm.close();
    }
    */
    })
    .catch((err) => console.log('Settings data query error: ', err));
}
