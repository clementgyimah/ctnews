import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyle} from '../assets/styles/StylSheet';
import {useNavigation} from '@react-navigation/native';

const NewBrowserHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name="arrow-left"
      size={27}
      color="white"
      backgroundColor="#3773e1"
      style={appStyle.settingsBackButtonStyle}
      onPress={() => navigation.goBack()}
    />
  );
};

export default NewBrowserHeaderLeft;
