import { createSlice } from '@reduxjs/toolkit'


export const themeslice = createSlice({
    name: 'theme',
    initialState:{
        themecolor:'light'
    },
    reducers:{
        changeTheme: (state) =>{
            state.themecolor = state.themecolor === 'light' ? 'dark' : 'light'
        }
    }
})

export const {changeTheme} = themeslice.actions
export default themeslice.reducer