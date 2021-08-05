import Realm from 'realm';
import {downloadImageSchema, shareSchema} from '../extras/databaseSchemas';

export default async function otherOptionsHandler({...props}) {
  /*
  console.log('news image: ', props.imageSrc);
  console.log('news title: ', props.title);
  console.log('news link: ', props.url);
  */

  Realm.open({
    path: 'settingsDB',
    schema: [downloadImageSchema, shareSchema],
  })
    .then(async (realm) => {
      //set or update the value of the image url in the database
      const downloadImageData = realm.objects('DownloadImage');
      if (downloadImageData.length === 0) {
        realm.write(() => {
          realm.create('DownloadImage', {
            _id: 'imageUrl',
            imageLink: props.imageSrc,
          });
        });
      } else {
        realm.write(() => {
          downloadImageData.filtered("_id = 'imageUrl'")[0].imageLink =
            props.imageSrc;
        });
      }

      //set or update the share data in the database
      const shareData = realm.objects('Share');
      if (shareData.length === 0) {
        realm.write(() => {
          realm.create('Share', {
            _id: 'shareNewsData',
            newsLink: props.url,
            newsTitle: props.title,
          });
        });
      } else {
        realm.write(() => {
          shareData.filtered("_id = 'shareNewsData'")[0].newsLink = props.url;
          shareData.filtered("_id = 'shareNewsData'")[0].newsTitle =
            props.title;
        });
      }
      realm.close();
    })
    .catch((err) => {
      console.log('Store other options error: ', err);
    });
}
