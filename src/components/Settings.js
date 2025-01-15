//import all necessary libraries and packages
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {settingsPageStyle} from '../assets/styles/StylSheet';
import {CountryList} from '../extras/CountryList';
import {useDispatch, useSelector} from 'react-redux';
import {newsType} from '../constants';
import {updateCountry, updateType} from '../redux/features/settings/slice';

const Settings = () => {
  const dispatch = useDispatch();
  const country = useSelector(state => state.settings.country);
  const type = useSelector(state => state.settings.type);

  const dropdownValueChanged = currCountry => {
    return dispatch(updateCountry(currCountry));
  };

  const toggleFunc = () => {
    console.log(type);
    if (type === newsType.large) {
      return dispatch(updateType(newsType.small));
    }
    return dispatch(updateType(newsType.large));
  };

  return (
    <View style={settingsPageStyle.container}>
      <ScrollView>
        <View style={settingsPageStyle.eachSettingsItem}>
          <View style={settingsPageStyle.dropdownView}>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue, itemIndex) =>
                dropdownValueChanged(itemValue)
              }
              mode="dialog"
              dropdownIconColor="#4895EF"
              prompt="Country"
              style={settingsPageStyle.pickerItem}>
              {CountryList.map(item => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
          <Text style={settingsPageStyle.shortMeaningText}>
            Select your country for local news
          </Text>
        </View>
        <View style={settingsPageStyle.spaceBetweenItems} />
        <View style={settingsPageStyle.eachSettingsItem}>
          <View style={settingsPageStyle.newsListTypeView}>
            <View style={settingsPageStyle.newsListTypeTextView}>
              <Text style={settingsPageStyle.mainTopicText}>
                Large Images:{' '}
              </Text>
            </View>
            <View style={settingsPageStyle.newsListTypeIconView}>
              {type === newsType.large ? (
                <MaterialCommunityIcons
                  name="toggle-switch"
                  size={30}
                  color="#4895EF"
                  backgroundColor="white"
                  onPress={toggleFunc}
                />
              ) : (
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={30}
                  color="#8f9296"
                  backgroundColor="white"
                  onPress={toggleFunc}
                />
              )}
            </View>
          </View>
          <Text style={settingsPageStyle.shortMeaningText}>
            Do you prefer large news images?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
