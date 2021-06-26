import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
  TestIds,
} from '@react-native-firebase/admob';

import {adViewStyle} from './StylSheet';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.OS === 'ios'
  ? 'ca-app-pub-7838234933796537/7058734654'
  : 'ca-app-pub-7838234933796537/4013768916';

export default function AdsBrowser({route}) {
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
    .then(() => {
      console.log('Ad request configured successfully');
    })
    .catch((err) => {
      console.log('Ads could not be configured' + err);
    });

  //show Ads container if Ad was loaded successfully
  const adLoadedFunc = () => {
    console.log('Ad was successfully loaded');
    return setAdLoaded(true);
  };

  //don't show the Ads container if Ad failed to load
  const adFailedToLoadFunc = (err) => {
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
          keywords: [
            'technology',
            'health',
            'science',
            'sports',
            'business',
            'entertainment',
          ],
        }}
        onAdFailedToLoad={(err) => adFailedToLoadFunc(err)}
        onAdLoaded={() => adLoadedFunc()}
        onAdOpened={() => console.log('Ad was successfully opened')}
      />
    </View>
  );
}
