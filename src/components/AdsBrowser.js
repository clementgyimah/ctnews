import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
  TestIds,
} from '@react-native-firebase/admob';

import {adViewStyle} from '../assets/styles/StylSheet';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.OS === 'ios'
  ? 'ca-app-pub-6115251452818261/7111197782'
  : 'ca-app-pub-6115251452818261/8162207967';

export default function AdsBrowser({adType}) {
  const [adLoaded, setAdLoaded] = useState(false);
  admob()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,
    })
    .then(() => {})
    .catch(err => {
      console.log('Ads could not be configured' + err);
    });

  //show Ads container if Ad was loaded successfully
  const adLoadedFunc = () => setAdLoaded(true);

  //don't show the Ads container if Ad failed to load
  const adFailedToLoadFunc = err => {
    console.log('Ad Loading error: ' + err);
    return setAdLoaded(false);
  };

  return (
    <View
      style={
        adLoaded
          ? adViewStyle.adLoadedSuccessfully
          : adViewStyle.adLoadingFailed
      }>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          keywords: adType,
        }}
        onAdFailedToLoad={err => adFailedToLoadFunc(err)}
        onAdLoaded={() => adLoadedFunc()}
        //onAdOpened={() => console.log('Ad was successfully opened')}
      />
    </View>
  );
}
