import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../FireBaseDB/firebaseInit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { notify } from "../Components/notify";

const initialState = {
    userUID: localStorage.getItem("userUID") ? localStorage.getItem("userUID") : null
};

// Async thunk to handle user sign-in
export const signIn = createAsyncThunk("userReducer/signIn",
 async (payload, thunkAPI) => {
    try {
        // Sign in the user using the provided email and password
        await signInWithEmailAndPassword(auth, payload.email, payload.password);
        notify("success", `Sign-In successfull, hi ${auth.currentUser.displayName}`);
        // console.log(auth.currentUser.displayName);
        localStorage.setItem("userUID", auth.currentUser.uid);
        // Dispatch the updateUserUID action to update the userUID in the Redux store
        thunkAPI.dispatch(userAction.updateUserUID(auth.currentUser.uid));
        // No need to return anything here as the 'updateUserUID' action will set the userUID in the state
    } catch (error) {
        notify("error","User not found or incorrect password. Please check your credentials.");
        throw error; // Rethrow the error so that it will be treated as a rejected action
    }
});



// Async thunk to handle user log out
export const logOut = createAsyncThunk("userReducer/logOut", async () => {
    await signOut(auth);
    // Return null as the payload of the fulfilled action
    localStorage.removeItem("userUID");
    return null;
})




// Slice for user reducer
const userSlice = createSlice({
    name: "userUID",
    initialState,
    reducers: {
        // Action to update the userUID in the state
        updateUserUID: (state, action) => {
            state.userUID = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Case for handling the fulfilled action of the 'logOut' async thunk
        builder.addCase(logOut.fulfilled, (state, action) => {
            // Update the userUID in the state to null after log out
            state.userUID = action.payload;
        })
    }
})



export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;