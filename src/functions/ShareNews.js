import {Share, Alert} from 'react-native';
import DynamicLink from '@react-native-firebase/dynamic-links';

export default async function ShareNews({...props}) {
  const newsLink = props.newsLink;
  if (newsLink) {
    // console.log('title: ', route.params.newsTitle);
    const createLink = await DynamicLink().buildLink({
      link: 'https://',
      domainUriPrefix: 'https://ctnewslink.page.link/open-news',
    });
    const shareContent = {
      message: `Read this:\n\n${props.newsTitle}\n${newsLink}\n\nRead more from: ${createLink}\n\n Powered by Ctnews`,
      title: props.newsTitle,
      url: createLink,
    };
    const shareOption = {
      dialogTitle: 'SHARE',
    };
    Share.share(shareContent, shareOption)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  } else {
    Alert.alert("Can't share this screen");
  }
}
