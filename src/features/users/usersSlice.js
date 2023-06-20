import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

const userAdapter = createEntityAdapter({})

const initialState = userAdapter.getInitialState()

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL)
  return response.data
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      userAdapter.upsertMany(state, action.payload)
    })
  },
})

export const userSelector = userAdapter.getSelectors((state) => state.users)

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
