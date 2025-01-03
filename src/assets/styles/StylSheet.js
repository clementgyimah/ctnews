//import all necessary libraries and packages
import {StyleSheet} from 'react-native';

//exported Stylesheets for styling in respective pages
export const newsContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5',
  },
});

export const newsItemsLargeStyle = StyleSheet.create({
  touch: {
    backgroundColor: 'white',
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageLoadingIndicator: {
    flex: 1,
  },
  imgStyle: {
    borderRadius: 10,
    flex: 1,
    height: 200,
  },
  txtView: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1D3557',
    fontFamily: 'roboto',
  },
  timeAndSourceRowView: {
    marginTop: 15,
    flexDirection: 'row',
  },
  sourceNameView: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  sourceDurationView: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  extraOptionsView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sourceTxt: {
    fontSize: 12,
    color: '#5f6368',
  },
});

export const newsItemsSmallStyle = StyleSheet.create({
  touch: {
    backgroundColor: 'white',
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  mainView: {
    flexDirection: 'row',
    height: 100,
  },
  imgView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    //height: 100,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  imageLoadingIndicator: {
    flex: 1,
  },
  imgStyle: {
    borderRadius: 10,
    flex: 1,
    height: 100,
  },
  txtView: {
    flex: 8,
    paddingLeft: 5,
    paddingRight: 5,
    //height: 100,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1D3557',
    flex: 3,
    //backgroundColor: 'blue',
  },
  timeAndSourceRowView: {
    flexDirection: 'row',
    //backgroundColor: 'pink',
    flex: 1,
  },
  sourceNameView: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  sourceDurationView: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sourceTxt: {
    fontSize: 12,
    color: '#5f6368',
  },
  extraOptionsView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export const newsBrowserStyle = StyleSheet.create({
  webViewStyle: {
    flex: 1,
  },
  headerRightView: {
    flexDirection: 'row',
  },
  headerRightViewComponentsView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 15,
  },
  loadingErrorView: {
    flex: 1,
  },
});

export const settingsPageStyle = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
  eachSettingsItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  spaceBetweenItems: {
    height: 10,
  },
  mainTopicText: {
    fontSize: 16,
    color: '#1D3557',
  },
  shortMeaningText: {
    fontSize: 13,
    color: '#8f9296',
  },
  dropdownView: {
    flex: 1,
  },
  newsListTypeView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  pickerItem: {
    color: '#4895EF',
  },
  newsListTypeTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  newsListTypeIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export const appStyle = StyleSheet.create({
  mainHeaderStyle: {
    backgroundColor: '#3773e1',
    elevation: 0,
  },
  mainHeaderTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomTabBarStyle: {
    backgroundColor: 'white',
    paddingTop: 5,
  },
  bottomTabLabelStyle: {
    fontSize: 13,
    // marginTop: 5,
  },
  specificNewsTopStyle: {
    height: 40,
    backgroundColor: 'white',
  },
  headerRightButtonsStyle: {
    marginRight: 10,
  },
  headerRightButtonsView: {
    flexDirection: 'row',
  },
  settingsBackButtonStyle: {
    marginLeft: 10,
  },
  topTabLabelStyle: {
    textTransform: 'none',
    fontSize: 13,
  },
  eachTopTabStyle: {
    width: 83,
  },
  topTabActiveIndicator: {
    height: 3,
  },
});

export const adViewStyle = StyleSheet.create({
  adLoadedSuccessfully: {
    backgroundColor: 'white',
  },
  adLoadingFailed: {
    height: 0,
    width: 0,
  },
});

export const helpPageStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  appIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  appIconStyle: {
    width: 150,
    height: 150,
  },
  developerInfoView: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerInfoText: {
    fontSize: 18,
    color: '#1D3557',
    fontWeight: 'bold',
  },
  developerInfoSpecificText: {
    color: '#4895EF',
  },
  developerInfoSocialView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerInfoLinkedInView: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#0e76a8',
    padding: 10,
    borderRadius: 7,
  },
  developerInfoFacebookView: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 7,
  },
  developerInfoTwitterView: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#00acee',
    padding: 10,
    borderRadius: 7,
  },
});

export const otherOptionModalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
  },
  transparentModalView: {
    flex: 2,
  },
  translucentView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  eachContentView: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    padding: 10,
  },
  eachContentText: {
    fontSize: 15,
    marginLeft: 15,
  },
});
