import {configureStore} from '@reduxjs/toolkit'
import StatsSlice from './Stats/StatsSlice'

export const store = configureStore({
    reducer:{
        stats: StatsSlice
    }
})