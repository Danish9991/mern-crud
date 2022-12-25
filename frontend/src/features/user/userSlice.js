import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import userService from './userService';

const initialState = {
    users : [],
    user : {},
    isLoading : false,
    isError : false,
    isSuccess : false,
    message : ''
}

export const getUsers = createAsyncThunk('user/getAll', async(_, thunkAPI) => {
    try {
        return await userService.getUsers()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message);
        return thunkAPI.rejectWithValue(message)
    }
})

export const createUser = createAsyncThunk('user/createUser', async(userData, thunkAPI) => {
    try {
        return await userService.createUser(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message);
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async(id, thunkAPI) => {
    try {
        return await userService.deleteUser(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message);
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async({updatedUser, id}, thunkAPI) => {
    console.log(id);
    console.log(updatedUser);
    try {
        return await userService.updateUser(id, updatedUser)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message);
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUserById = createAsyncThunk('user/getUser', async(id,thunkAPI) => {
    try {
        return await userService.getUser(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message);
        return thunkAPI.rejectWithValue(message)
    }
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : { 
        reset : (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = ''
        }
     },
    extraReducers : (builder) => {
        builder
           .addCase(getUsers.pending, (state) => {
                state.isLoading = true
           })
           .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users = action.payload
           })
           .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
           })
           .addCase(createUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
            .addCase(getUserById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // state.user = action.payload
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
    }
})

export const {reset} = userSlice.actions;

export default userSlice.reducer