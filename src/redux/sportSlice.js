import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStoreList = createAsyncThunk(
  'sport/fetchStoreList',
  async () => {
    const response = await axios.get('https://api.example.com/categories');
    return response.data;
  },
);

const sportSlice = createSlice({
  name: 'sport/list',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStoreList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStoreList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sportSlice.reducer;
