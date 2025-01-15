//import all necessary libraries and packages
import React, {useState} from 'react';
import NewsGenerator from '../NewsGenerator';
// import AdsBrowser from '../AdsBrowser';
import OtherOptionModal from '../OtherOptionsModal';

//main exported function
export default function ForeignScience({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <OtherOptionModal openModal={showModal} setOpenModal={setShowModal} />
      {/**call NewsGenerator component and give the appropriate parameters */}
      <NewsGenerator
        navigation={navigation}
        category="science"
        language="en"
        pageSize={20}
        local={true}
        openModal={setShowModal}
      />
      {/*<AdsBrowser
        adType={[
          'news',
          'science',
          'recovery',
          'transfer',
          'gas',
          'electicity',
        ]}
      />*/}
    </>
  );
}
