import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {appStyle} from '../assets/styles/StylSheet';

const HelpHeaderLeft = () => {
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

export default HelpHeaderLeft;
