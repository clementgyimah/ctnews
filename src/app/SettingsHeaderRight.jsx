import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyle} from '../assets/styles/StylSheet';

const SettingsHeaderRight = () => {
  const navigation = useNavigation();
  return (
    <MaterialCommunityIcons
      name="help-circle"
      size={27}
      color="white"
      backgroundColor="#3773e1"
      style={appStyle.headerRightButtonsStyle}
      onPress={() => navigation.navigate('Help')}
    />
  );
};

export default SettingsHeaderRight;
