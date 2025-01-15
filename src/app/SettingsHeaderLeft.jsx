import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyle} from '../assets/styles/StylSheet';

const SettingsHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name="close"
      size={27}
      color="white"
      backgroundColor="#3773e1"
      style={appStyle.settingsBackButtonStyle}
      onPress={() => navigation.goBack()}
    />
  );
};

export default SettingsHeaderLeft;
