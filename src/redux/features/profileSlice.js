import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isvalue: false,
  profile: {}
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    showPRofile: (state, action) => {
      state.isvalue = true,
      state.profile = action.payload
    },
    lessProfile: (state) => {
      state.isvalue = false,
      state.profile = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const {showPRofile, lessProfile} = profileSlice.actions

export default profileSlice.reducer