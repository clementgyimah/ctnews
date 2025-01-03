//import all necessary libraries and packages
import React, {useState, useRef, useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {newsBrowserStyle} from '../assets/styles/StylSheet';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {NewsBrowserHeaderRight} from './NewsBrowserHeaderRight';

const headerRight = ({pageLoading, newsLink, newsTitle}) => (
  <NewsBrowserHeaderRight
    pageLoading={pageLoading}
    newsLink={newsLink}
    newsTitle={newsTitle}
  />
);

//main exported function
function NewsBrowser({route, navigation}) {
  const [pageLoading, setPageLoading] = useState(false);
  const hardwareBackRef = useRef(null);

  navigation.setOptions({
    headerRight: () =>
      headerRight({
        pageLoading,
        newsLink: route.params.newsLink,
        newsTitle: route.params.newsTitle,
      }),
  });

  useFocusEffect(
    useCallback(() => {
      const webViewGoBack = () => {
        hardwareBackRef.current.goBack();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', webViewGoBack);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', webViewGoBack);
    }, []),
  );

  return (
    <WebView
      ref={hardwareBackRef}
      source={{uri: route.params.newsLink}}
      style={newsBrowserStyle.webViewStyle}
      onLoadStart={() => setPageLoading(true)}
      onLoadEnd={() => setPageLoading(false)}
      dataDetectorTypes="all"
      /*
      onNavigationStateChange={(navigationState) =>
        console.log(navigationState)
      }
      */
    />
  );
}

export default NewsBrowser;
