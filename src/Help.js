import React from 'react';
import {View, Text, ScrollView, Image, Linking} from 'react-native';
import {helpPageStyle} from './StylSheet';

export default function Help() {
  return (
    <View style={helpPageStyle.container}>
      <ScrollView>
        <View style={helpPageStyle.appIconView}>
          <Image
            source={require('./ctnews-icon.png')}
            style={helpPageStyle.appIconStyle}
          />
        </View>
        <View style={helpPageStyle.developerInfoView}>
          <Text style={helpPageStyle.developerInfoText}>
            Developed By:{' '}
            <Text style={helpPageStyle.developerNameSpecificText}>
              Gyimah Clement
            </Text>
          </Text>
          <Text style={helpPageStyle.developerInfoText}>
            Email:{' '}
            <Text
              style={helpPageStyle.developerInfoSpecificText}
              onPress={() =>
                Linking.openURL('mailto:clementgyimah2@gmail.com')
              }>
              clementgyimah2@gmail.com
            </Text>
          </Text>
          <Text style={helpPageStyle.developerInfoText}>
            Contact Number:{' '}
            <Text
              style={helpPageStyle.developerInfoSpecificText}
              onPress={() => Linking.openURL('tel:+233559505063')}>
              +233559505063
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
