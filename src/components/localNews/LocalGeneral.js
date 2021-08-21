//import all necessary libraries and packages
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, BackHandler, Alert} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../../assets/styles/StylSheet';
import {useFocusEffect} from '@react-navigation/native';
import AdsBrowser from '../AdsBrowser';
import {checkNotification} from '../../functions/StartUpProcesses';
import OtherOptionModal from '../OtherOptionsModal';
import StatusBarComponent from '../StatusBarComponent';

//main exported function
export default function LocalGeneral({navigation}) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    checkNotification(navigation);
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
      <StatusBarComponent />
      <OtherOptionModal openModal={showModal} setOpenModal={setShowModal} />
      {/**call NewsGenerator component and give the appropriate parameters */}
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
