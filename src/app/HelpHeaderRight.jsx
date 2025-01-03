import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyle} from '../assets/styles/StylSheet';
import {useNavigation} from '@react-navigation/native';

const HelpHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name="cog-outline"
      size={27}
      color="white"
      backgroundColor="#3773e1"
      style={appStyle.headerRightButtonsStyle}
      onPress={() => navigation.navigate('Settings')}
    />
  );
};

export default HelpHeaderRight;
