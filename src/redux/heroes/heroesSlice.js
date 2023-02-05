import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_HEROES = 'GET_HEROES';
const GET_CURRENT_HERO = 'GET_CURRENT_HERO';

const initialState = {
  heroes: [],
  filteredHeroes: [],
  hero: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunks
export const getHeroes = createAsyncThunk(GET_HEROES, async () => {
  try {
    return await api.fetchHeroes();
  } catch (error) {
    return error.message;
  }
});

export const getHero = createAsyncThunk(GET_CURRENT_HERO, async (hero) => {
  try {
    return await api.fetchCurrentHero(hero);
  } catch (error) {
    return error.message;
  }
});

// Reducer
const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    filterHeroes: (state, action) => ({
      ...state,
      filteredHeroes: [...state.heroes.filter(({ publisher }) => publisher === action.payload)],
    }),
    load20Heroes: (state, action) => ({
      ...state,
      filteredHeroes: action.payload,
    }),
    cleanupHero: (state) => ({
      ...state,
      hero: {},
      status: 'idle',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeroes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getHeroes.fulfilled, (state, action) => ({
        ...state,
        heroes: action.payload,
        status: 'succeeded',
      }))
      .addCase(getHeroes.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
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

export const { filterHeroes, load20Heroes, cleanupHero } = heroesSlice.actions;
export const allHeroes = (state) => state.heroes.heroes;
export const allFilteredHeroes = (state) => state.heroes.filteredHeroes;
export const currentHero = (state) => state.heroes.hero;
export const allStatus = (state) => state.heroes.status;

export default heroesSlice.reducer;
