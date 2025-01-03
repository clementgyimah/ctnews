import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyle} from '../assets/styles/StylSheet';
import {useNavigation} from '@react-navigation/native';

const BottomTabHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={appStyle.headerRightButtonsView}>
      <MaterialCommunityIcons
        name="cog-outline"
        size={27}
        color="white"
        backgroundColor="#3773e1"
        style={appStyle.headerRightButtonsStyle}
        onPress={() => navigation.navigate('Settings')}
      />
      <MaterialCommunityIcons
        name="help-circle"
        size={27}
        color="white"
        backgroundColor="#3773e1"
        style={appStyle.headerRightButtonsStyle}
        onPress={() => navigation.navigate('Help')}
      />
    </View>
  );
};

export default BottomTabHeaderRight;
