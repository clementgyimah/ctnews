//import all necessary libraries and packages
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, BackHandler, Alert} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../StylSheet';
import {useFocusEffect} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import AdsBrowser from '../AdsBrowser';

//main exported function
export default function LocalGeneral({navigation}) {
  useEffect(() => {
    //notification handler when app is running in background
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage.data.url) {
        console.log(
          'App opened from background due to notification ' +
            remoteMessage.data.url,
        );
        return navigation.navigate('NewsPage', {
          newsLink: remoteMessage.data.url,
        });
      }
    });
    //notification handler when app is in quit state
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'App opened from quit state due to notification',
            remoteMessage.data.url,
          );
          return navigation.navigate('NewsPage', {
            newsLink: remoteMessage.data.url,
          });
        }
      });
  });

  useFocusEffect(
    useCallback(() => {
      const webViewGoBack = () => {
        //hardwareBackRef.current.goBack();
        Alert.alert('Exit App', 'Do you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => console.log('App Exit cancelled'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', webViewGoBack);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', webViewGoBack);
    }, []),
  );
  return (
    <SafeAreaView style={newsContainer.container}>
      {/**call ForeignNewsList1 function and give the appropriate parameters */}
      <NewsGenerator
        navigation={navigation}
        category="general"
        language="en"
        pageSize={20}
        type="local"
      />
      <AdsBrowser />
    </SafeAreaView>
  );
}
