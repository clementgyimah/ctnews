import React, {useEffect, useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Realm from 'realm';
import {shareSchema, downloadImageSchema} from './extras/databaseSchemas';
import {otherOptionModalStyle} from './StylSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckAndroidPermission from './extras/DownloadNewsImage';
import ShareNews from './extras/ShareNews';

export default function OtherOptionsModal({...props}) {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsLink, setNewsLink] = useState('');
  const [newsImageLink, setNewsImageLink] = useState('');

  useEffect(() => {
    //re-read data only when modal re-opens not when it closes
    if (props.openModal) {
      Realm.open({
        path: 'settingsDB',
        schema: [downloadImageSchema, shareSchema],
      })
        .then((realm) => {
          const downloadImageData = realm.objects('DownloadImage');
          setNewsImageLink(downloadImageData[0].imageLink);
          const shareNewsData = realm.objects('Share');
          setNewsTitle(shareNewsData[0].newsTitle);
          setNewsLink(shareNewsData[0].newsLink);
        })
        .catch((err) => console.log('Retrieve other options error: ', err));
    }
  }, [props.openModal]);

  //close the other options modal
  const handleCloseModal = () => {
    props.setOpenModal(false);
  };

  //take care of sharing news
  const handleShareNews = () => {
    ShareNews({newsLink, newsTitle});
    handleCloseModal();
  };

  //take care of downloading image
  const handleDownloadNewsImage = () => {
    CheckAndroidPermission(newsImageLink);
    handleCloseModal();
  };

  return (
    <Modal
      animationType="slide"
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
        </View>
      </View>
    </Modal>
  );
}
