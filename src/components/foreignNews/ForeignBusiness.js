//import all necessary libraries and packages
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import NewsGenerator from '../NewsGenerator';
import {newsContainer} from '../../assets/styles/StylSheet';
// import AdsBrowser from '../AdsBrowser';
import OtherOptionModal from '../OtherOptionsModal';

//main exported function
export default function ForeignBusiness({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={newsContainer.container}>
      <OtherOptionModal openModal={showModal} setOpenModal={setShowModal} />
      {/**call NewsGenerator component and give the appropriate parameters */}
      <NewsGenerator
        navigation={navigation}
        category="business"
        language="en"
        pageSize={20}
        local={true}
        openModal={setShowModal}
      />
      {/*<AdsBrowser
        adType={['news', 'business', 'insurance', 'loans', 'mortgage']}
      />*/}
    </SafeAreaView>
  );
}
