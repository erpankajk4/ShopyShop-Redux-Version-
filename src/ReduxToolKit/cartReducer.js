import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where, onSnapshot } from "firebase/firestore";
import { db } from "../FireBaseDB/firebaseInit";
import { notify } from "../Components/notify";

const initialState = {
    cartItems: [],
    loading: false,
    error: null
}

//## Add Item to Cart
export const addItem = createAsyncThunk("myCartReducer/addItem",
 async (payload, thunkAPI) => {
    //~ payload = {id, title, price, description, category, image }

    const userUID = thunkAPI.getState().userReducer.userUID;
    if (!userUID) {
        notify('error', 'Please sign in to add items to the cart.');
        return;
    }
    const { id } = payload; // product ID

    // Create a Firestore query to check if the item is already in the user's cart
    const q = query(collection(db, "User", userUID, "MyCart"), where("id", "==", id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        // Item is not in the cart, so add it
        await addDoc(collection(db, "User", userUID, "MyCart"), {
            ...payload,
            qty: 1
        }).then(() => {
            notify("success", "Item Has Been Added Successfully");
        });
    } else {
        // Item is already in the cart
        notify("warn", "Item is already in the cart");
    }
});

// Create an async thunk for fetching cart products in real-time
export const fetchCartProducts = createAsyncThunk(
  "myCartReducer/fetchCartProducts",
  async (_, { dispatch, getState }) => {
    dispatch(myCartActions.setLoading(true)); // Dispatch loading action
    const userUID = getState().userReducer.userUID;
    if (!userUID) {
      return []; // Return an empty array if the user is not authenticated
    }

    const cartCollection = collection(db, "User", userUID, "MyCart");

    // Listen for changes to the cart collection in real-time
    const unsubscribe = onSnapshot(cartCollection, (querySnapshot) => {
      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push({ itemRef: doc.id, ...doc.data() });
      });

      // Dispatch an action to update the cart items in the state
      dispatch(myCartActions.updateCart(cartItems));
      dispatch(myCartActions.setLoading(false)); // Dispatch loading complete action
    });

    // Return the unsubscribe function to stop listening when needed
    return unsubscribe;
  }
);


//## Remove Particular Product from Cart

export const removeFromCart = createAsyncThunk("myCartActions/removeFromCart",
 async (payload, thunkAPI) => {
    const userUID = thunkAPI.getState().userReducer.userUID;
    // Delete the item from the user's cart in Firestore
    await deleteDoc(doc(db, "User", userUID, "MyCart", payload));
    notify('warn', 'Product has been Removed');
});




//## Increase Quantity of a Particular Product in Cart

export const increaseQuantity = createAsyncThunk("myCartActions/increaseQuantity",
 async (payload, thunkAPI) => {
    //~ payload = {id, qty}

    const userUID = thunkAPI.getState().userReducer.userUID;
    const { itemRef, qty } = payload;

    // Update the quantity of the item in the user's cart in Firestore
    await updateDoc(doc(db, "User", userUID, "MyCart", itemRef), {
        qty: qty + 1
    });
});




//## Decrease Quantity of a Particular Product in Cart

export const decreaseQuantity = createAsyncThunk("myCartActions/decreaseQuantity", async (payload, thunkAPI) => {
    //~ payload = {id, qty}

    const userUID = thunkAPI.getState().userReducer.userUID;
    const { itemRef, qty } = payload;
    if (qty === 0) {
        // If the quantity zero, remove the item from the cart
        thunkAPI.dispatch(removeFromCart(itemRef));
    } else {
        // Update the quantity of the item in the user's cart in Firestore
        await updateDoc(doc(db, "User", userUID, "MyCart", itemRef), {
            qty: qty - 1
        });
    }
});




//# Purchase all items in Cart
// Here, I delete items one by one from the user's cart and then add them to the MyOrders collection.
export const purchase = createAsyncThunk("myCartActions/purchase", async (_, thunkAPI) => {
    const userUID = thunkAPI.getState().userReducer.userUID;

    // Fetch all items from the user's cart in Firestore
    const querySnapshot = await getDocs(collection(db, "User", userUID, "MyCart"));
    if (querySnapshot.empty) {
        notify("error", "Your Cart is Empty");
        return;
    }

    const allItemsInMyCart = [];

    querySnapshot.forEach(async (doc) => {
        const { name, price, qty } = doc.data();
        allItemsInMyCart.push({ name, price, qty });

        // Remove the item from the user's cart in Firestore
        await thunkAPI.dispatch(removeFromCart(doc.id));
    });

    const today = new Date();
    const day = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    // Add all purchased items to the MyOrders collection in Firestore
    await addDoc(collection(db, "User", userUID, "MyOrders"), {
        purchaseDate: day,
        itemsList: allItemsInMyCart
    });

    notify("success", "Thanks for shopping with us! Enjoy! 🎉");

    // Clear the cart after purchase
    thunkAPI.dispatch(myCartActions.updateCart([]));
});


export const myCartSlice = createSlice({
    name: "myCartReducer",
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.cartItems = action.payload
            console.log(state.cartItems);
        },
        setLoading: (state, action) => {
          state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCartProducts.pending, (state) => {
          state.error = null;
          console.log("Loading Cart products from Firestore DB...");
        })
        .addCase(fetchCartProducts.fulfilled, (state) => {
          console.log("Real-time Cart Products Loaded Successfully");
        })
        .addCase(fetchCartProducts.rejected, (state, action) => {
          state.error = action.error.message;
          console.log("Cart Products are not loading in real-time from Firebase");
        });
    },
})

export const myCartReducer = myCartSlice.reducer;
export const myCartActions = myCartSlice.actions;