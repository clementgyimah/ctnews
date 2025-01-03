import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {newsBrowserStyle} from '../assets/styles/StylSheet';

export const ContactBrowserHeaderRight = ({
  pageLoading,
  newsLink,
  newsTitle,
}) => {
  return (
    <View style={newsBrowserStyle.headerRightView}>
      {pageLoading ? (
        <View style={newsBrowserStyle.headerRightViewComponentsView}>
          <ActivityIndicator color="white" size={25} />
        </View>
      ) : null}
    </View>
  );
};
