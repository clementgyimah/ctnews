//import all necessary libraries and packages
import React, {useState, useRef, useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {newsBrowserStyle} from '../assets/styles/StylSheet';
import {ActivityIndicator, View, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareNews from '../functions/ShareNews';

//main exported function
function NewsPage({route, navigation}) {
  const [pageLoading, setPageLoading] = useState(false);
  const hardwareBackRef = useRef(null);

  navigation.setOptions({
    headerRight: () => (
      <View style={newsBrowserStyle.headerRightView}>
        {pageLoading ? (
          <View style={newsBrowserStyle.headerRightViewComponentsView}>
            <ActivityIndicator color="white" size={25} />
          </View>
        ) : null}
        <View style={newsBrowserStyle.headerRightViewComponentsView}>
          <Icon
            onPress={() =>
              ShareNews({
                newsLink: route.params.newsLink,
                newsTitle: route.params.newsTitle,
              })
            }
            name="share-variant"
            size={25}
            color="white"
          />
        </View>
      </View>
    ),
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

export default NewsPage;
