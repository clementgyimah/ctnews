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
import {newsItemsLargeStyle} from '../../assets/styles/StylSheet';
import durationCalculator from '../../functions/DurationCalculator';
import {useDispatch} from 'react-redux';
import {updateImage, updateShare} from '../../redux/features/settings/slice';

//function to render each news item
export default function NewsItemsLarge({
  title,
  sourceName,
  navigation,
  imageSrc,
  url,
  publishedAt,
  // imageLoadingError,
  // setImageLoadingError,
  imageLoading,
  setImageLoading,
  openModal,
}) {
  const dispatch = useDispatch();
  //setImageLoadingError(false);

  // calculate news duration
  const newsDuration = durationCalculator(publishedAt);

  const openOtherOptionModal = async () => {
    dispatch(updateImage(imageSrc));
    dispatch(updateShare({title, url}));
    openModal(true);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={newsItemsLargeStyle.touch}
      onPress={() =>
        navigation.navigate('NewsBrowser', {newsLink: url, newsTitle: title})
      }>
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
          <Image
            source={{uri: imageSrc}}
            style={newsItemsLargeStyle.imgStyle}
            onLoad={() => setImageLoading(false)}
          />
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
            <View style={newsItemsLargeStyle.extraOptionsView}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={20}
                color="#5f6368"
                onPress={() => openOtherOptionModal()}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
