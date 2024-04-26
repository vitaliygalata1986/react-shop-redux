import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goods: [],
  loading: true,
};

export const fetchGoods = createAsyncThunk(
  'products/fetchGoods',
  async ({ API_URL, API_KEY }, thunkAPI) => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      /*
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      return await response.json();
    } 
    */

      console.log(error);
      // throw error;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getGoods: (state, action) => {
      state.goods = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.goods = action.payload?.shop ?? [];
      state.loading = false;
    });
    builder.addCase(fetchGoods.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchGoods.pending, (state) => {
      state.loading = true;
    });
  },
});

export const selectAllGoods = (state) => state.products.goods;
export const selectLoading = (state) => state.products.loading;

export default productsSlice.reducer;
