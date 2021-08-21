//import all necessary modules
import 'react-native-gesture-handler';

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {appStyle} from './src/assets/styles/StylSheet';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  verifyDatabaseInitializations,
  checkDynamicLink,
} from './src/functions/StartUpProcesses';

import ForeignTechnology from './src/components/foreignNews/ForeignTechnology';
import ForeignBusiness from './src/components/foreignNews/ForeignBusiness';
import ForeignEntertainment from './src/components/foreignNews/ForeignEntertainment';
import ForeignGeneral from './src/components/foreignNews/ForeignGeneral';
import ForeignHealth from './src/components/foreignNews/ForeignHealth';
import ForeignScience from './src/components/foreignNews/ForeignScience';
import ForeignSports from './src/components/foreignNews/ForeignSports';
import LocalTechnology from './src/components/localNews/LocalTechnology';
import LocalBusiness from './src/components/localNews/LocalBusiness';
import LocalEntertainment from './src/components/localNews/LocalEntertainment';
import LocalGeneral from './src/components/localNews/LocalGeneral';
import LocalHealth from './src/components/localNews/LocalHealth';
import LocalScience from './src/components/localNews/LocalScience';
import LocalSports from './src/components/localNews/LocalSports';
import NewsBrowser from './src/components/NewsBrowser';
import ContactBrowser from './src/components/ContactBrowser';
import Settings from './src/components/Settings';
import Help from './src/components/Help';

//create instance of each navigator
const MainStack = createStackNavigator();
const Local = createMaterialTopTabNavigator();
const Foreign = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

// Bottom Tab options
const bottomTabLocalOptions = {
  tabBarIcon: ({focused}) => {
    return (
      <MaterialCommunityIcons
        name="map-marker-radius"
        size={27}
        color={focused ? '#283618' : '#bcbfc7'}
        backgroundColor="white"
      />
    );
  },
  tabBarLabel: 'Local',
};
const bottomTabForeignOptions = {
  tabBarIcon: ({focused}) => {
    return (
      <MaterialCommunityIcons
        name="earth"
        size={27}
        color={focused ? '#283618' : '#bcbfc7'}
        backgroundColor="white"
      />
    );
  },
  tabBarLabel: 'World',
};

//Local news navigation function
const LocalFunc = () => {
  return (
    <Local.Navigator
      initialRouteName="LocalGeneral"
      lazy={true}
      lazyPlaceholder={() => null}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#2554C7',
        inactiveTintColor: '#000000e6',
        tabStyle: appStyle.eachTopTabStyle,
        labelStyle: appStyle.topTabLabelStyle,
        style: appStyle.specificNewsTopStyle,
        indicatorStyle: appStyle.topTabActiveIndicator,
      }}>
      <Local.Screen
        name="LocalGeneral"
        component={LocalGeneral}
        options={{tabBarLabel: 'General'}}
      />
      <Local.Screen
        name="LocalTechnology"
        component={LocalTechnology}
        options={{tabBarLabel: 'Tech'}}
      />
      <Local.Screen
        name="LocalHealth"
        component={LocalHealth}
        options={{tabBarLabel: 'Health'}}
      />
      <Local.Screen
        name="LocalScience"
        component={LocalScience}
        options={{tabBarLabel: 'Science'}}
      />
      <Local.Screen
        name="LocalSports"
        component={LocalSports}
        options={{tabBarLabel: 'Sports'}}
      />
      <Local.Screen
        name="LocalBusiness"
        component={LocalBusiness}
        options={{tabBarLabel: 'Business'}}
      />
      <Local.Screen
        name="LocalEntertainment"
        component={LocalEntertainment}
        options={{tabBarLabel: 'Entert.'}}
      />
    </Local.Navigator>
  );
};

//Foreign news navigation function
const ForeignFunc = () => {
  return (
    <Foreign.Navigator
      initialRouteName="ForeignGeneral"
      lazy={true}
      lazyPlaceholder={() => null}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#2554C7',
        inactiveTintColor: '#000000e6',
        tabStyle: appStyle.eachTopTabStyle,
        labelStyle: appStyle.topTabLabelStyle,
        style: appStyle.specificNewsTopStyle,
        indicatorStyle: appStyle.topTabActiveIndicator,
      }}>
      <Foreign.Screen
        name="ForeignGeneral"
        component={ForeignGeneral}
        options={{tabBarLabel: 'General'}}
      />
      <Foreign.Screen
        name="ForeignTechnology"
        component={ForeignTechnology}
        options={{tabBarLabel: 'Tech'}}
      />
      <Foreign.Screen
        name="ForeignHealth"
        component={ForeignHealth}
        options={{tabBarLabel: 'Health'}}
      />
      <Foreign.Screen
        name="ForeignScience"
        component={ForeignScience}
        options={{tabBarLabel: 'Science'}}
      />
      <Foreign.Screen
        name="ForeignSports"
        component={ForeignSports}
        options={{tabBarLabel: 'Sports'}}
      />
      <Foreign.Screen
        name="ForeignBusiness"
        component={ForeignBusiness}
        options={{tabBarLabel: 'Business'}}
      />
      <Foreign.Screen
        name="ForeignEntertainment"
        component={ForeignEntertainment}
        options={{tabBarLabel: 'Entert.'}}
      />
    </Foreign.Navigator>
  );
};

//Bottom tab function
const BottomTabFunc = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Local"
      tabBarOptions={{
        style: appStyle.bottomTabBarStyle,
        activeTintColor: '#283618', //'#2554C7',
        inactiveTintColor: '#bcbfc7',
        labelStyle: appStyle.bottomTabLabelStyle,
      }}>
      <BottomTab.Screen
        name="Local"
        component={LocalFunc}
        options={bottomTabLocalOptions}
      />
      <BottomTab.Screen
        name="Foreign"
        component={ForeignFunc}
        options={bottomTabForeignOptions}
      />
    </BottomTab.Navigator>
  );
};

//Main function that returns a container for all navigators
const App = () => {
  verifyDatabaseInitializations()
    .then(() => {
      checkDynamicLink();
      SplashScreen.hide();
    })
    .catch((err) =>
      console.log('Start up database initializations error: ', err),
    );
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="BottomTab">
        <MainStack.Screen
          name="BottomTab"
          component={BottomTabFunc}
          options={({navigation}) => ({
            title: 'CTnews',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerRight: () => (
              <View style={appStyle.headerRightButtonsView}>
                <MaterialCommunityIcons
                  name="settings"
                  size={27}
                  color="white"
                  backgroundColor="#3773e1"
                  style={appStyle.headerRightButtonsStyle}
                  onPress={() => navigation.navigate('Settings')}
                />
                <MaterialCommunityIcons
                  name="help-circle"
                  size={27}
                  color="white"
                  backgroundColor="#3773e1"
                  style={appStyle.headerRightButtonsStyle}
                  onPress={() => navigation.navigate('Help')}
                />
              </View>
            ),
          })}
        />
        <MainStack.Screen
          name="NewsBrowser"
          component={NewsBrowser}
          options={({navigation}) => ({
            title: 'CTnews',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: () => (
              <MaterialCommunityIcons
                name="arrow-left"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.settingsBackButtonStyle}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <MainStack.Screen
          name="ContactBrowser"
          component={ContactBrowser}
          options={({navigation}) => ({
            title: 'Get in touch',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: () => (
              <MaterialCommunityIcons
                name="arrow-left"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.settingsBackButtonStyle}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <MainStack.Screen
          name="Settings"
          component={Settings}
          options={({navigation}) => ({
            title: 'Settings',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: () => (
              <MaterialCommunityIcons
                name="close"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.settingsBackButtonStyle}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons
                name="help-circle"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.headerRightButtonsStyle}
                onPress={() => navigation.navigate('Help')}
              />
            ),
          })}
        />
        <MainStack.Screen
          name="Help"
          component={Help}
          options={({navigation}) => ({
            title: 'Help',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: () => (
              <MaterialCommunityIcons
                name="close"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.settingsBackButtonStyle}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons
                name="settings"
                size={27}
                color="white"
                backgroundColor="#3773e1"
                style={appStyle.headerRightButtonsStyle}
                onPress={() => navigation.navigate('Settings')}
              />
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
