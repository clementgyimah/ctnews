//import all necessary libraries and packages
import React, {useState, useRef, useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {newsBrowserStyle} from '../assets/styles/StylSheet';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {ContactBrowserHeaderRight} from './ContactBrowserHeaderRight';

const headerRight = ({pageLoading, newsLink, newsTitle}) => (
  <ContactBrowserHeaderRight
    pageLoading={pageLoading}
    newsLink={newsLink}
    newsTitle={newsTitle}
  />
);

//main exported function
export default function ContactBrowser({route, navigation}) {
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
      source={{uri: route.params.contactLink}}
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
