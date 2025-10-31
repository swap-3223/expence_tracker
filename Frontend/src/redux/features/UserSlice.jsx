import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
    const res = await axios.get('')
})