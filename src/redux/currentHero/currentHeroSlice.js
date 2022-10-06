import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_CURRENT_HERO = 'GET_CURRENT_HERO';

const initialState = {
  hero: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunks
export const getHero = createAsyncThunk(GET_CURRENT_HERO, async (hero) => {
  try {
    return await api.fetchCurrentHero(hero);
  } catch (error) {
    return error.message;
  }
});

// Reducer
const currentHeroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    cleanupHero: (state, action) => ({
      ...state,
      status: 'idle',
      hero: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHero.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getHero.fulfilled, (state, action) => ({
        ...state,
        hero: action.payload,
        status: 'succeeded',
      }))
      .addCase(getHero.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { cleanupHero } = currentHeroSlice.actions;
export const currentHero = (state) => state.currentHero.hero;
export const currentHeroStatus = (state) => state.currentHero.status;

export default currentHeroSlice.reducer;
