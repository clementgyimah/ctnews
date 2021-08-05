//import all necessary libraries and packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {checkAndroidPermission} from '../extras/DownloadNewsImage';
import {newsItemsSmallStyle} from '../StylSheet';
import durationCalculator from '../extras/durationCalculator';

//function to render each news item
export default function NewsItemsSmall({
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
      style={newsItemsSmallStyle.touch}
      onPress={() =>
        navigation.navigate('NewsPage', {newsLink: url, newsTitle: title})
      }>
      <View style={newsItemsSmallStyle.mainView}>
        <View style={newsItemsSmallStyle.imgView}>
          {imageLoading ? (
            <ActivityIndicator
              style={newsItemsSmallStyle.imageLoadingIndicator}
              color="#2554C7"
              size="small"
            />
          ) : (
            <View />
          )}
          <Image
            source={{uri: imageSrc}}
            style={newsItemsSmallStyle.imgStyle}
            onLoad={() => setImageLoading(false)}
          />
        </View>
        <View style={newsItemsSmallStyle.txtView}>
          <Text style={newsItemsSmallStyle.title}>{title}</Text>
          <View style={newsItemsSmallStyle.timeAndSourceRowView}>
            <View style={newsItemsSmallStyle.sourceNameView}>
              <Text style={newsItemsSmallStyle.sourceTxt}>{sourceName}</Text>
            </View>
            <View style={newsItemsSmallStyle.sourceDurationView}>
              <Text style={newsItemsSmallStyle.sourceTxt}>{newsDuration}</Text>
            </View>
          </View>
        </View>
        {imageLoading ? (
          <View />
        ) : (
          <View style={newsItemsSmallStyle.imageDownloadView}>
            <TouchableOpacity
              activeOpacity={1}
              style={newsItemsSmallStyle.imageDownloadIconView}
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
      </View>
    </TouchableOpacity>
  );
}
