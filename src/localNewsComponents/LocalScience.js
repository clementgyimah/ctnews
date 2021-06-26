//import all necessary libraries and packages
import React from 'react';
import {SafeAreaView} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../StylSheet';
import AdsBrowser from '../AdsBrowser';

//main exported function
export default function LocalScience({navigation}) {
  return (
    <SafeAreaView style={newsContainer.container}>
      {/**call ForeignNewsList1 function and give the appropriate parameters */}
      <NewsGenerator
        navigation={navigation}
        category="science"
        language="en"
        pageSize={20}
        type="local"
      />
      <AdsBrowser />
    </SafeAreaView>
  );
}
