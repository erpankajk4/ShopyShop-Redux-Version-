import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { db } from "../FireBaseDB/firebaseInit"
import { collection, addDoc } from "firebase/firestore";

//------------Fetching data from API and Store in DB------------//

export const fetchProductsAndStore = createAsyncThunk(
  'products/fetchAndStore',
  async () => {
    try {
      // Fetching data from API using AXIOS 
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;

      // Store products in Firestore
      for (const product of products) {
        await addDoc(collection(db, 'products'), product);
      }
      return products;
    } catch (error) {
      throw error;
    }
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAndStore.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Loading products from API...");
      })
      .addCase(fetchProductsAndStore.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        // console.log(state.products);
        console.log("Products Loaded Successfully");
      })
      .addCase(fetchProductsAndStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Products are not loading from API");
      });
  }
});

export const productReducer = productSlice.reducer;
