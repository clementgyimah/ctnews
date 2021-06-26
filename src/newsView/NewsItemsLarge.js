//import all necessary libraries and packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {checkAndroidPermission} from '../extras/DownloadNewsImage';
import {newsItemsLargeStyle} from '../StylSheet';
import durationCalculator from '../extras/durationCalculator';

//function to render each news item
export default function NewsItemsLarge({
  title,
  sourceName,
  navigation,
  imageSrc,
  url,
  publishedAt,
  //imageLoadingError,
  //setImageLoadingError,
  imageLoading,
  setImageLoading,
}) {
  //setImageLoadingError(false);

  //call the 'durationCalculator' function
  //to do time and date calculations for each news item
  const newsDuration = durationCalculator(publishedAt);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={newsItemsLargeStyle.touch}
      onPress={() => navigation.navigate('NewsPage', {newsLink: url})}>
      <View>
        <View style={newsItemsLargeStyle.imgView}>
          {imageLoading ? (
            <ActivityIndicator
              style={newsItemsLargeStyle.imageLoadingIndicator}
              color="#2554C7"
              size="small"
            />
          ) : (
            <View />
          )}
          <ImageBackground
            source={{uri: imageSrc}}
            style={newsItemsLargeStyle.imgStyle}
            onLoad={() => setImageLoading(false)}>
            {imageLoading ? (
              <View />
            ) : (
              <View style={newsItemsLargeStyle.imageDownloadView}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={newsItemsLargeStyle.imageDownloadIconView}
                  onPress={() => checkAndroidPermission(imageSrc)}>
                  <MaterialCommunityIcons
                    name="download"
                    size={27}
                    color="#2554C7"
                    backgroundColor="white"
                  />
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        </View>
        <View style={newsItemsLargeStyle.txtView}>
          <Text style={newsItemsLargeStyle.title}>{title}</Text>
          <View style={newsItemsLargeStyle.timeAndSourceRowView}>
            <View style={newsItemsLargeStyle.sourceNameView}>
              <Text style={newsItemsLargeStyle.sourceTxt}>{sourceName}</Text>
            </View>
            <View style={newsItemsLargeStyle.sourceDurationView}>
              <Text style={newsItemsLargeStyle.sourceTxt}>{newsDuration}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
