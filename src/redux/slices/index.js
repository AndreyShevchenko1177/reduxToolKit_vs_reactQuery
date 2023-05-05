import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchData} from "../../api";

export const fetchCats = createAsyncThunk('NAME: https://catfact.ninja/fact', async (name) => {
    const response = await fetchData('https://catfact.ninja/fact')
    if (response.status > 400){
        console.log('ERROR')}
    return response.data
})

const catsSlice = createSlice({
    name: 'catSlice',
    initialState: {
        value: 0,
        catsData: {fact: ''}
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCats.fulfilled, (state, action)=>{
            state.catsData = action.payload;
        })
        // builder.addCase(fetchCats.pending, (state,action)=>{
        //     state.isLoading = true;
        // })
        // builder.addCase(fetchCats.rejected, (state,action)=>{
        //     state.error = 'fetch ERROR';
        // })
    }
})

export const {increment} = catsSlice.actions;

export default catsSlice.reducer
