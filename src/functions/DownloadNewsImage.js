import {PermissionsAndroid, Platform, Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

//expression for checking android permission before downloading news item image
export default async function checkAndroidPermission(imageSrc) {
  if (Platform.OS === 'ios') {
    downloadNewsImage(imageSrc);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        downloadNewsImage(imageSrc);
      } else {
        // If permission denied then show alert
        Alert.alert('Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.warn(err);
    }
  }
}

//expression for downloading news item image
const downloadNewsImage = imageSrc => {
  // Main function to download the image

  // To add the time suffix in filename
  let date = new Date();
  // Image URL which we want to download
  let image_URL = imageSrc;
  // Getting the extention of the file
  let ext = getExtention(image_URL);
  ext = '.' + ext[0];
  // Get config and fs from RNFetchBlob
  // config: To pass the downloading related options
  // fs: Directory path where we want our image to download
  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      // Related to the Android only
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/image_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Image',
    },
  };
  config(options)
    .fetch('GET', image_URL)
    .then(res => {
      // Showing alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      Alert.alert('Image Downloaded Successfully.');
    });
};

const getExtention = filename => {
  // To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};
