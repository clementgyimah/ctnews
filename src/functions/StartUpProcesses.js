import Realm from 'realm';
import messaging from '@react-native-firebase/messaging';
import dynamicLink from '@react-native-firebase/dynamic-links';
import {
  settingsSchema,
  downloadImageSchema,
  shareSchema,
} from '../extras/DatabaseSchemas';

export const checkNotification = async (navigation) => {
  //notification handler when app is running in background
  messaging().onNotificationOpenedApp((remoteMessage) => {
    if (remoteMessage.data.url) {
      console.log(
        'App opened from background due to notification ' +
          remoteMessage.data.url,
      );
      return navigation.navigate('NewsBrowser', {
        newsLink: remoteMessage.data.url,
      });
    }
  });
  //notification handler when app is in quit state
  await messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'App opened from quit state due to notification',
          remoteMessage.data.url,
        );
        return navigation.navigate('NewsBrowser', {
          newsLink: remoteMessage.data.url,
        });
      }
    });
};

export const checkDynamicLink = async () => {
  //when app is opened in foreground
  dynamicLink().onLink((link) => console.log('foreground: ', link));

  //when app is opened in background
  await dynamicLink()
    .getInitialLink()
    .then((link) => console.log('background/quit: ', link))
    .catch((err) => console.log(err));
};

export const verifyDatabaseInitializations = async () => {
  //open the local database, 'Realm', for operation
  await Realm.open({
    path: 'settingsDB',
    schema: [settingsSchema],
  })
    .then((realm) => {
      //if nothing is stored in the settings database, initialize new data
      const settingsData = realm.objects('Settings');
      if (settingsData.length === 0) {
        realm.write(async () => {
          console.log('Settings data empty for country');
          await realm.create('Settings', {
            _id: 'country',
            value: 'us',
          });
        });
        realm.write(async () => {
          console.log('Settings data empty for news type');
          await realm.create('Settings', {
            _id: 'newsType',
            value: 'large',
          });
        });
      }
      console.log('Settings startup process', settingsData);
      //realm.close();
    })
    .catch((err) =>
      console.log('Startup settings database initialization error: ', err),
    );

  //open the local database, 'Realm', for operation
  await Realm.open({
    path: 'otherOptionsDB',
    schema: [downloadImageSchema, shareSchema],
  })
    .then((realm) => {
      //initialize the 'image url' data in the database if it is empty
      const downloadImageData = realm.objects('DownloadImage');
      if (downloadImageData.length === 0) {
        realm.write(async () => {
          console.log('Image url data empty');
          await realm.create('DownloadImage', {
            _id: 'imageUrl',
            imageLink: '',
          });
        });
      }
      console.log('Image url startup process', downloadImageData);

      //initialize the 'share' data in the database if it is empty
      const shareData = realm.objects('Share');
      if (shareData.length === 0) {
        console.log('Share data empty');
        realm.write(async () => {
          await realm.create('Share', {
            _id: 'shareNewsData',
            newsLink: '',
            newsTitle: '',
          });
        });
      }
      console.log('Share startup process', shareData);
      //realm.close();
    })
    .catch((err) =>
      console.log('Startup otherOptions database initialization error: ', err),
    );
};
