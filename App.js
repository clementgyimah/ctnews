//import all necessary modules
import 'react-native-gesture-handler';

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {appStyle} from './src/StylSheet';
import {View} from 'react-native';

import ForeignTechnology from './src/foreignNewsComponents/ForeignTechnology';
import ForeignBusiness from './src/foreignNewsComponents/ForeignBusiness';
import ForeignEntertainment from './src/foreignNewsComponents/ForeignEntertainment';
import ForeignGeneral from './src/foreignNewsComponents/ForeignGeneral';
import ForeignHealth from './src/foreignNewsComponents/ForeignHealth';
import ForeignScience from './src/foreignNewsComponents/ForeignScience';
import ForeignSports from './src/foreignNewsComponents/ForeignSports';
import LocalTechnology from './src/localNewsComponents/LocalTechnology';
import LocalBusiness from './src/localNewsComponents/LocalBusiness';
import LocalEntertainment from './src/localNewsComponents/LocalEntertainment';
import LocalGeneral from './src/localNewsComponents/LocalGeneral';
import LocalHealth from './src/localNewsComponents/LocalHealth';
import LocalScience from './src/localNewsComponents/LocalScience';
import LocalSports from './src/localNewsComponents/LocalSports';
import NewsPage from './src/NewsBrowser';
import Settings from './src/Settings';
import Help from './src/Help';

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

/*
//function for top tabs
const topTabsFunc = ({title}) => {
  return {
    title,
    tabBarIcon: () => null,
    tabBarLabel: ({focused}) => {
      if (focused) {
        return (
          <View>
            <Text style={appStyle.topTabActiveText}>{title}</Text>
            <View style={appStyle.topTabActiveBorder} />
          </View>
        );
      } else {
        return (
          <View style={appStyle.topTabInactiveBorder}>
            <Text style={appStyle.topTabInactiveText}>{title}</Text>
          </View>
        );
      }
    },
  };
};
*/

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
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="BottomTab">
        <MainStack.Screen
          name="BottomTab"
          component={BottomTabFunc}
          options={({navigation}) => ({
            title: 'Ctnews',
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
          name="NewsPage"
          component={NewsPage}
          options={({navigation}) => ({
            title: 'Ctnews',
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
