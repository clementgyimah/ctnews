//import all necessary libraries and packages
import React, {useState} from 'react';
import NewsGenerator from '../NewsGenerator';
// import AdsBrowser from '../AdsBrowser';
import OtherOptionModal from '../OtherOptionsModal';

//main exported function
export default function LocalBusiness({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
    </>
  );
}
