import React from 'react';
import {Modal, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {otherOptionModalStyle} from '../assets/styles/StylSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckAndroidPermission from '../functions/DownloadNewsImage';
import ShareNews from '../functions/ShareNews';
import {useSelector} from 'react-redux';

export default function OtherOptionsModal({...props}) {
  const newsImageLink = useSelector(state => state.settings.image);
  const newsTitle = useSelector(state => state.settings.share.title);
  const newsLink = useSelector(state => state.settings.share.link);

  //close the other options modal
  const handleCloseModal = () => {
    props.setOpenModal(false);
  };

  //take care of sharing news
  const handleShareNews = async () => {
    await ShareNews({newsLink, newsTitle})
      .then(() => handleCloseModal())
      .catch(err => console.log(err));
  };

  //take care of downloading image
  const handleDownloadNewsImage = async () => {
    await CheckAndroidPermission(newsImageLink)
      .then(() => handleCloseModal())
      .catch(err => console.log(err));
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.openModal}
      hardwareAccelerated={true}
      onRequestClose={() => handleCloseModal()}>
      <View style={otherOptionModalStyle.modalContainer}>
        <TouchableOpacity
          style={otherOptionModalStyle.transparentModalView}
          onPress={() => handleCloseModal()}
        />
        <View style={otherOptionModalStyle.translucentView}>
          <ScrollView>
            <TouchableOpacity
              style={otherOptionModalStyle.eachContentView}
              activeOpacity={0.5}
              onPress={() => handleShareNews()}>
              <Icon name="share-variant" color="#5f6368" size={20} />
              <Text style={otherOptionModalStyle.eachContentText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={otherOptionModalStyle.eachContentView}
              activeOpacity={0.5}
              onPress={() => handleDownloadNewsImage()}>
              <Icon name="download" color="#5f6368" size={20} />
              <Text style={otherOptionModalStyle.eachContentText}>
                Download news image
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
