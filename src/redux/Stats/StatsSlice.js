import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStatsAsync = createAsyncThunk("stats/getStatsAsync", async (name) => {
  const res = await axios(`https://covid-api.com/api/reports?region_name=${name}`);
  return res.data.data[0];
});

export const StatsSlice = createSlice({
  name: "stats",
  initialState: {
    counts: {
      infected: { title: 'infected', count: 0 },
      recovered: { title: 'recovered', count: 0 },
      death: { title: 'death', count: 0 },
      active: { title: 'active', count: 0 },
    },
    informations: {
      requestStatus: 'unused',
      error: null,
      lastUpdate: null,
      country: 'Turkey',
    },
  },
  reducers: {
    setCountry: (state, action) => {
      state.informations.country = action.payload.country;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatsAsync.pending, (state) => {
        state.informations.requestStatus = 'loading';
      })
      .addCase(getStatsAsync.fulfilled, (state, action) => {
        const data = action.payload; 
       
        
        state.informations.requestStatus = 'succeeded';
        state.informations.lastUpdate = data.last_update;
        state.counts.infected.count = data.confirmed;
        state.counts.recovered.count = data.recovered;
        state.counts.death.count = data.deaths;
        state.counts.active.count = data.active;
        
      })
      .addCase(getStatsAsync.rejected, (state, action) => {
        state.informations.requestStatus = 'failed';
        state.informations.error = action.error.message;
      });
  },
});

export const { setCountry } = StatsSlice.actions;

export default StatsSlice.reducer;
