//import all necessary libraries and packages
import React, {useState, useRef, useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {newsBrowserStyle} from '../assets/styles/StylSheet';
import {ActivityIndicator, View, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//main exported function
export default function ContactBrowser({route, navigation}) {
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
