//import all necessary libraries and packages
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../../assets/styles/StylSheet';
import AdsBrowser from '../AdsBrowser';
import OtherOptionModal from '../OtherOptionsModal';

//main exported function
export default function ForeignHealth({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={newsContainer.container}>
      <OtherOptionModal openModal={showModal} setOpenModal={setShowModal} />
      {/**call NewsGenerator component and give the appropriate parameters */}
      <NewsGenerator
        navigation={navigation}
        category="health"
        language="en"
        pageSize={20}
        type="world"
        openModal={setShowModal}
      />
      <AdsBrowser
        adType={[
          'news',
          'health',
          'hosting',
          'claim',
          'trading',
          'treatment',
          'cord blood',
        ]}
      />
    </SafeAreaView>
  );
}
