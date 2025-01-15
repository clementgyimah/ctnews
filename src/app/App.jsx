import React from 'react';
import AppRouter from '../router/AppRouter';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native';
import {newsContainer} from '../assets/styles/StylSheet';

const App = () => {
  return (
    <SafeAreaView style={newsContainer.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
