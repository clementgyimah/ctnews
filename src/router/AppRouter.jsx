//import all necessary modules
import 'react-native-gesture-handler';

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {appStyle} from '../assets/styles/StylSheet';
import SplashScreen from 'react-native-splash-screen';
import ForeignTechnology from '../components/foreignNews/ForeignTechnology';
import ForeignBusiness from '../components/foreignNews/ForeignBusiness';
import ForeignEntertainment from '../components/foreignNews/ForeignEntertainment';
import ForeignGeneral from '../components/foreignNews/ForeignGeneral';
import ForeignHealth from '../components/foreignNews/ForeignHealth';
import ForeignScience from '../components/foreignNews/ForeignScience';
import ForeignSports from '../components/foreignNews/ForeignSports';
import LocalTechnology from '../components/localNews/LocalTechnology';
import LocalBusiness from '../components/localNews/LocalBusiness';
import LocalEntertainment from '../components/localNews/LocalEntertainment';
import LocalGeneral from '../components/localNews/LocalGeneral';
import LocalHealth from '../components/localNews/LocalHealth';
import LocalScience from '../components/localNews/LocalScience';
import LocalSports from '../components/localNews/LocalSports';
import NewsBrowser from '../components/NewsBrowser';
import ContactBrowser from '../components/ContactBrowser';
import Settings from '../components/Settings';
import Help from '../components/Help';
import BottomTabHeaderRight from '../app/BottomTabHeaderRight';
import NewBrowserHeaderLeft from '../app/NewBrowserHeaderLeft';
import ContactBrowserHeaderLeft from '../app/ContactBrowserHeaderLeft';
import SettingsHeaderLeft from '../app/SettingsHeaderLeft';
import SettingsHeaderRight from '../app/SettingsHeaderRight';
import HelpHeaderLeft from '../app/HelpHeaderLeft';
import HelpHeaderRight from '../app/HelpHeaderRight';
// import TestScreen from '../app/TestScreen';

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
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#2554C7',
        tabBarInactiveTintColor: '#000000e6',
        tabBarLabelStyle: appStyle.topTabLabelStyle,
        tabBarItemStyle: appStyle.eachTopTabStyle,
        tabBarIndicatorStyle: appStyle.topTabActiveIndicator,
        tabBarStyle: appStyle.specificNewsTopStyle,
        lazy: true,
        lazyPlaceholder: () => null,
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
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#2554C7',
        tabBarInactiveTintColor: '#000000e6',
        tabBarLabelStyle: appStyle.topTabLabelStyle,
        tabBarItemStyle: appStyle.eachTopTabStyle,
        tabBarIndicatorStyle: appStyle.topTabActiveIndicator,
        tabBarStyle: appStyle.specificNewsTopStyle,
        lazy: true,
        lazyPlaceholder: () => null,
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

// Bottom tab function
const BottomTabFunc = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Local"
      screenOptions={{
        tabBarActiveTintColor: '#283618', //'#2554C7',
        tabBarInactiveTintColor: '#bcbfc7',
        tabBarLabelStyle: appStyle.bottomTabLabelStyle,
        tabBarStyle: appStyle.bottomTabBarStyle,
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

// Main function that returns a container for all navigators
const AppRouter = () => {
  SplashScreen.hide();

  return (
    <NavigationContainer>
      <MainStack.Navigator /*initialRouteName="BottomTab"*/>
        <MainStack.Screen
          name="BottomTab"
          component={BottomTabFunc}
          options={{
            title: 'CTnews',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerRight: BottomTabHeaderRight,
          }}
        />
        <MainStack.Screen
          name="NewsBrowser"
          component={NewsBrowser}
          options={{
            title: 'CTnews',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: NewBrowserHeaderLeft,
          }}
        />
        <MainStack.Screen
          name="ContactBrowser"
          component={ContactBrowser}
          options={{
            title: 'Get in touch',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: ContactBrowserHeaderLeft,
          }}
        />
        <MainStack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: SettingsHeaderLeft,
            headerRight: SettingsHeaderRight,
          }}
        />
        <MainStack.Screen
          name="Help"
          component={Help}
          options={{
            title: 'Help',
            headerTitleStyle: appStyle.mainHeaderTitleStyle,
            headerStyle: appStyle.mainHeaderStyle,
            headerLeft: HelpHeaderLeft,
            headerRight: HelpHeaderRight,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
