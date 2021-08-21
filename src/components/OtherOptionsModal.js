import React, {useEffect, useState} from 'react';
import {Modal, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Realm from 'realm';
import {shareSchema, downloadImageSchema} from '../extras/DatabaseSchemas';
import {otherOptionModalStyle} from '../assets/styles/StylSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckAndroidPermission from '../functions/DownloadNewsImage';
import ShareNews from '../functions/ShareNews';

export default function OtherOptionsModal({...props}) {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsLink, setNewsLink] = useState('');
  const [newsImageLink, setNewsImageLink] = useState('');

  useEffect(() => {
    //re-read data only when modal re-opens not when it closes
    if (props.openModal) {
      Realm.open({
        path: 'otherOptionsDB',
        schema: [downloadImageSchema, shareSchema],
      })
        .then((realm) => {
          const downloadImageData = realm.objects('DownloadImage');
          setNewsImageLink(downloadImageData[0].imageLink);
          const shareNewsData = realm.objects('Share');
          setNewsTitle(shareNewsData[0].newsTitle);
          setNewsLink(shareNewsData[0].newsLink);
        })
        .catch((err) => console.log('Other options data query error: ', err));
    }
  }, [props.openModal]);

  //close the other options modal
  const handleCloseModal = () => {
    props.setOpenModal(false);
  };

  //take care of sharing news
  const handleShareNews = async () => {
    await ShareNews({newsLink, newsTitle})
      .then(() => handleCloseModal())
      .catch((err) => console.log(err));
  };

  //take care of downloading image
  const handleDownloadNewsImage = async () => {
    await CheckAndroidPermission(newsImageLink)
      .then(() => handleCloseModal())
      .catch((err) => console.log(err));
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
