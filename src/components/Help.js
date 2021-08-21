import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  // Linking,
} from 'react-native';
import {helpPageStyle} from '../assets/styles/StylSheet';
import Icon from 'react-native-vector-icons/Zocial';

export default function Help({navigation}) {
  return (
    <View style={helpPageStyle.container}>
      <ScrollView>
        <View style={helpPageStyle.appIconView}>
          <Image
            source={require('../assets/images/ctnews-icon.png')}
            style={helpPageStyle.appIconStyle}
          />
        </View>
        <View style={helpPageStyle.developerInfoView}>
          <Text style={helpPageStyle.developerInfoText}>
            Developed By: Gyimah Clement
          </Text>
          <Text style={helpPageStyle.developerInfoText}>
            Email:{' '}
            <Text
              style={helpPageStyle.developerInfoSpecificText}
              // onPress={() => openLink('mailto:clementgyimah2@gmail.com')}>
              onPress={() =>
                navigation.navigate('ContactBrowser', {
                  contactLink:
                    'https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com',
                })
              }>
              clementgyimah2@gmail.com
            </Text>
          </Text>
          <Text style={helpPageStyle.developerInfoText}>
            Tel. Number: +233559505063
          </Text>
        </View>
        <View style={helpPageStyle.developerInfoSocialView}>
          <TouchableOpacity
            style={helpPageStyle.developerInfoLinkedInView}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ContactBrowser', {
                contactLink:
                  'https://www.linkedin.com/in/clement-gyimah-117b20149/',
              })
            }>
            <Icon name="linkedin" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={helpPageStyle.developerInfoFacebookView}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ContactBrowser', {
                contactLink:
                  'https://web.facebook.com/profile.php?id=100005602457246',
              })
            }>
            <Icon name="facebook" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={helpPageStyle.developerInfoTwitterView}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ContactBrowser', {
                contactLink: 'https://twitter.com/DjClemo2',
              })
            }>
            <Icon name="twitter" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
