import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {newsBrowserStyle} from '../assets/styles/StylSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareNews from '../functions/ShareNews';

export const NewsBrowserHeaderRight = ({pageLoading, newsLink, newsTitle}) => {
  return (
    <View style={newsBrowserStyle.headerRightView}>
      {pageLoading ? (
        <View style={newsBrowserStyle.headerRightViewComponentsView}>
          <ActivityIndicator color="white" size={25} />
        </View>
      ) : null}
      <View style={newsBrowserStyle.headerRightViewComponentsView}>
        <Icon
          onPress={() =>
            ShareNews({
              newsLink,
              newsTitle,
            })
          }
          name="share-variant"
          size={25}
          color="white"
        />
      </View>
    </View>
  );
};
