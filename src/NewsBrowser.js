//import all necessary libraries and packages
import React, {useEffect, useState /*useRef, useCallback*/} from 'react';
import {WebView} from 'react-native-webview';
import {newsBrowserStyle} from './StylSheet';
import {ActivityIndicator, View /*BackHandler*/} from 'react-native';
//import {useFocusEffect} from '@react-navigation/native';

//main exported function
function NewsPage({route, navigation}) {
  const [pageLoading, setPageLoading] = useState(false);
  //const hardwareBackRef = useRef(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        pageLoading ? (
          <View style={newsBrowserStyle.pageLoadingIndicatorView}>
            <ActivityIndicator color="white" size="small" />
          </View>
        ) : null,
    });
  }, [navigation, pageLoading]);

  /*
  useFocusEffect(
    useCallback(() => {
      const webViewGoBack = () => {
        //hardwareBackRef.current.goBack();
        console.log('Back pressed');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', webViewGoBack);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', webViewGoBack);
    }, []),
  );
  */

  return (
    <WebView
      source={{uri: route.params.newsLink}}
      style={newsBrowserStyle.webViewStyle}
      onLoadStart={() => setPageLoading(true)}
      onLoadEnd={() => setPageLoading(false)}
      dataDetectorTypes="all"
    />
  );
}

export default NewsPage;
