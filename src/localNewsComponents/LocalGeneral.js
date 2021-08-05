//import all necessary libraries and packages
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, BackHandler, Alert} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../StylSheet';
import {useFocusEffect} from '@react-navigation/native';
import AdsBrowser from '../AdsBrowser';
import {checkNotification, checkDynamicLink} from '../extras/StartUpProcesses';
import OtherOptionModal from '../OtherOptionsModal';

//main exported function
export default function LocalGeneral({navigation}) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    checkNotification(navigation);
    checkDynamicLink();
  }, [navigation]);

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
      <OtherOptionModal openModal={showModal} setOpenModal={setShowModal} />
      <NewsGenerator
        navigation={navigation}
        category="general"
        language="en"
        pageSize={20}
        type="local"
        openModal={setShowModal}
      />
      <AdsBrowser adType={['news', 'general', 'donate', 'degree']} />
    </SafeAreaView>
  );
}
