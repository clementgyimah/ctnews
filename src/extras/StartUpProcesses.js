import messaging from '@react-native-firebase/messaging';
import dynamicLink from '@react-native-firebase/dynamic-links';

export const checkNotification = (navigation) => {
  //notification handler when app is running in background
  messaging().onNotificationOpenedApp((remoteMessage) => {
    if (remoteMessage.data.url) {
      console.log(
        'App opened from background due to notification ' +
          remoteMessage.data.url,
      );
      return navigation.navigate('NewsPage', {
        newsLink: remoteMessage.data.url,
      });
    }
  });
  //notification handler when app is in quit state
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'App opened from quit state due to notification',
          remoteMessage.data.url,
        );
        return navigation.navigate('NewsPage', {
          newsLink: remoteMessage.data.url,
        });
      }
    });
};

export const checkDynamicLink = () => {
  dynamicLink().onLink((link) => console.log('foreground: ', link));
  dynamicLink()
    .getInitialLink()
    .then((link) => console.log('background/quit: ', link))
    .catch((err) => console.log(err));
};
