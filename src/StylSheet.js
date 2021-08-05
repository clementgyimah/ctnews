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
    height: 220,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageLoadingIndicator: {
    flex: 1,
  },
  imgStyle: {
    borderRadius: 10,
    flex: 1,
    height: 220,
  },
  txtView: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
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
    flex: 7,
    paddingLeft: 5,
    //height: 100,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    flex: 3,
    //backgroundColor: 'blue',
  },
  timeAndSourceRowView: {
    flexDirection: 'row',
    //backgroundColor: 'pink',
    flex: 1,
  },
  sourceNameView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  sourceDurationView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sourceTxt: {
    fontSize: 12,
    color: '#5f6368',
  },
  imageDownloadView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //height: 100,
  },
  imageDownloadIconView: {
    backgroundColor: 'white',
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
    marginTop: 5,
  },
  specificNewsTopStyle: {
    height: 40,
    backgroundColor: 'white',
  },
  /*
  topTabActiveText: {
    fontSize: 12,
    marginBottom: 5,
  },
  topTabInactiveText: {
    fontSize: 12,
  },
  topTabActiveBorder: {
    backgroundColor: '#2554C7',
    height: 3,
    borderRadius: 20,
  },
  topTabInactiveBorder: {
    marginBottom: 3,
  },
  */
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  developerNameSpecificText: {
    color: '#283618',
  },
  developerInfoSpecificText: {
    color: '#4895EF',
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
