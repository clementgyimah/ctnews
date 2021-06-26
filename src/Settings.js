//import all necessary libraries and packages
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Realm from 'realm';
import {Picker} from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {settingsPageStyle} from './StylSheet';
import {CountryList} from './extras/CountryList';
import {settingsSchema} from './extras/databaseSchemas';

//main exported class.
//NB: class component is used, because updating the 'selectedCountry' state variable
//immediately after the component is mounted works better for the dropdown using 'componentDidMount'.
//Functional components will use 'useEffect' hook, which only gets activated after the UI is loaded.
//Hence, the dropdown upon receiving no selected value early, uses the first object in it's array automatically.
export default class Settings extends Component {
  //creating a constructor to handle state changes
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '',
      toggleOn: true,
      newsType: '',
    };
  }

  componentDidMount() {
    Realm.open({
      path: 'settingsDB',
      schema: [settingsSchema],
    })
      .then(async (realm) => {
        const settingsData = realm.objects('Settings');
        if (settingsData.length === 0) {
          realm.write(() => {
            realm.create('Settings', {
              _id: 'country',
              value: 'us',
            });
            realm.create('Settings', {
              _id: 'newsType',
              value: 'large',
            });
            this.setState({
              selectedCountry: 'us',
              newsType: 'large',
              toggleOn: true,
            });
          });
        } else if (
          settingsData.filtered("_id = 'newsType'")[0].value === 'large'
        ) {
          this.setState({
            selectedCountry: settingsData.filtered("_id = 'country'")[0].value,
            newsType: 'large',
            toggleOn: true,
          });
        } else {
          this.setState({
            selectedCountry: settingsData.filtered("_id = 'country'")[0].value,
            newsType: 'small',
            toggleOn: false,
          });
        }
        realm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dropdownValueChanged(country) {
    Realm.open({
      path: 'settingsDB',
      schema: [settingsSchema],
    }).then((realm) => {
      realm.write(() => {
        const settingsData = realm.objects('Settings');
        settingsData.filtered("_id = 'country'")[0].value = country;
      });
      this.setState({
        selectedCountry: country,
      });
      realm.close();
    });
  }

  toggleFunc() {
    if (this.state.toggleOn) {
      Realm.open({
        path: 'settingsDB',
        schema: [settingsSchema],
      })
        .then((realm) => {
          realm.write(() => {
            const settingsData = realm.objects('Settings');
            settingsData.filtered("_id = 'newsType'")[0].value = 'small';
          });
          this.setState({
            toggleOn: false,
            newsType: 'small',
          });
          realm.close();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Realm.open({
        path: 'settingsDB',
        schema: [settingsSchema],
      })
        .then((realm) => {
          realm.write(() => {
            const settingsData = realm.objects('Settings');
            settingsData.filtered("_id = 'newsType'")[0].value = 'large';
          });
          this.setState({
            toggleOn: true,
            newsType: 'large',
          });
          realm.close();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <View style={settingsPageStyle.container}>
        <ScrollView>
          <View style={settingsPageStyle.eachSettingsItem}>
            <View style={settingsPageStyle.dropdownView}>
              <Picker
                selectedValue={this.state.selectedCountry}
                onValueChange={(itemValue, itemIndex) =>
                  this.dropdownValueChanged(itemValue)
                }
                mode="dialog"
                dropdownIconColor="#4895EF"
                prompt="Country"
                //onBlur={() => console.log('picker closed')}
                //onFocus={() => console.log('picker opened')}
                style={settingsPageStyle.pickerItem}>
                {CountryList.map((item) => (
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
                <MaterialCommunityIcons
                  name={
                    this.state.toggleOn ? 'toggle-switch' : 'toggle-switch-off'
                  }
                  size={30}
                  color={this.state.toggleOn ? '#4895EF' : '#8f9296'}
                  backgroundColor="white"
                  onPress={() => this.toggleFunc()}
                />
              </View>
            </View>
            <Text style={settingsPageStyle.shortMeaningText}>
              Do you prefer large news images?
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
