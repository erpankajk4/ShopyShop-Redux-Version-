import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { db } from '../FireBaseDB/firebaseInit';
import { collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore';
// Constants
const LAST_FETCH_TIMESTAMP_KEY = 'lastFetchTimestamp';

// Function to get the last fetch timestamp from Firebase
const getLastFetchTimestamp = async () => {
  const docRef = doc(db, 'metadata', LAST_FETCH_TIMESTAMP_KEY);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().timestamp;
  }
  return null;
};

// Function to update the last fetch timestamp in Firebase
const updateLastFetchTimestamp = async (timestamp) => {
  const docRef = doc(db, 'metadata', LAST_FETCH_TIMESTAMP_KEY);
  await setDoc(docRef, { timestamp });
};

export const fetchProductsAndStore = createAsyncThunk('products/fetchAndStore', async () => {
  try {
    const lastFetchTimestamp = await getLastFetchTimestamp();

    // Calculate the current time
    const currentTime = Date.now();

    // Check if it's been more than 24 hours since the last fetch
    if (!lastFetchTimestamp || currentTime - lastFetchTimestamp >= 24 * 60 * 60 * 1000) {
      // Fetching data from API using AXIOS
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;

      // Delete previous products from Firestore
      const productsCollectionRef = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollectionRef);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      // Store new products in Firestore
      for (const product of products) {
        await addDoc(collection(db, 'products'), product);
      }

      // Update the last fetch timestamp
      await updateLastFetchTimestamp(currentTime);

      return products;
    } else {
      // Fetch products from Firebase only
      const productsCollectionRef = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollectionRef);
      const products = querySnapshot.docs.map((doc) => doc.data());

      return products;
    }
  } catch (error) {
    throw error;
  }
});

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
