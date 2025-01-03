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
import {newsItemsSmallStyle} from '../../assets/styles/StylSheet';
import durationCalculator from '../../functions/DurationCalculator';
import {useDispatch} from 'react-redux';
import {updateImage, updateShare} from '../../redux/features/settings/slice';

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
  openModal,
}) {
  const dispatch = useDispatch();
  //setImageLoadingError(false);

  //call the 'durationCalculator' function
  //to do time and date calculations for each news item
  const newsDuration = durationCalculator(publishedAt);

  const openOtherOptionModal = async () => {
    dispatch(updateImage(imageSrc));
    dispatch(updateShare({title, url}));
    openModal(true);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={newsItemsSmallStyle.touch}
      onPress={() =>
        navigation.navigate('NewsBrowser', {newsLink: url, newsTitle: title})
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
            <View style={newsItemsSmallStyle.extraOptionsView}>
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
