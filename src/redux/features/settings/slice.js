import {createSlice} from '@reduxjs/toolkit';
import {newsType} from '../../../constants';

const initialState = {
  country: 'us',
  type: newsType.large,
  image: '',
  share: {
    title: '',
    link: '',
  },
};

export const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateCountry: (state, actions) => {
      state.country = actions.payload;
    },
    updateType: (state, actions) => {
      state.type = actions.payload;
    },
    updateImage: (state, actions) => {
      state.image = actions.payload;
    },
    updateShare: (state, actions) => {
      state.share = actions.payload;
    },
  },
});

export const {updateCountry, updateType, updateImage, updateShare} =
  slice.actions;

export default slice.reducer;
