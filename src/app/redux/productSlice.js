import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'ped',
  standardPed: 0,
  superPed: 0,
  superPlusPed: 0,
  dailyPad: 0,
  superDailyPad: 0,
  miniTampon: 0,
  standardTampon: 0,
  superTampon: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setStandardPed: (state, action) => {
      state.standardPed = action.payload;
    },
    setSuperPed: (state, action) => {
      state.superPed = action.payload;
    },
    setSuperPlusPed: (state, action) => {
      state.superPlusPed = action.payload;
    },
    setDailyPad: (state, action) => {
      state.dailyPad = action.payload;
    },
    setSuperDailyPad: (state, action) => {
      state.superDailyPad = action.payload;
    },
    setMiniTampon: (state, action) => {
      state.miniTampon = action.payload;
    },
    setStandardTampon: (state, action) => {
      state.standardTampon = action.payload;
    },
    setSuperTampon: (state, action) => {
      state.superTampon = action.payload;
    },
    setTotalPrice: (state) => {
      let price = 0;

      // Ped fiyatları
      switch (state.standardPed) {
        case 10: price += 60.84; break;
        case 20: price += 119.85; break;
        case 30: price += 179.41; break;
        case 40: price += 239.70; break;
        case 50: price += 299.26; break;
        case 60: price += 358.82; break;
      }
      switch (state.superPed) {
        case 10: price += 71.40; break;
        case 20: price += 140.01; break;
        case 30: price += 208.42; break;
        case 40: price += 279.82; break;
        case 50: price += 348.43; break;
        case 60: price += 416.84; break;
      }
      switch (state.superPlusPed) {
        case 10: price += 80.03; break;
        case 20: price += 158.21; break;
        case 30: price += 235.74; break;
        case 40: price += 315.77; break;
        case 50: price += 393.95; break;
        case 60: price += 471.48; break;
      }

      // Günlük Ped fiyatları
      switch (state.dailyPad) {
        case 10: price += 37.59; break;
        case 20: price += 57.79; break;
        case 30: price += 80.11; break;
        case 40: price += 115.58; break;
        case 50: price += 127.30; break;
        case 60: price += 160.22; break;
        case 70: price += 185.09; break;
        case 80: price += 207.41; break;
        case 90: price += 240.33; break;
        case 100: price += 254.60; break;
      }
      switch (state.superDailyPad) {
        case 10: price += 43.23; break;
        case 20: price += 72.73; break;
        case 30: price += 105.45; break;
        case 40: price += 145.46; break;
        case 50: price += 172.84; break;
        case 60: price += 210.90; break;
        case 70: price += 245.57; break;
        case 80: price += 278.29; break;
        case 90: price += 316.35; break;
        case 100: price += 345.68; break;
      }

      // Tampon fiyatları
      switch (state.miniTampon) {
        case 10: price += 78.74; break;
        case 20: price += 154.47; break;
        case 30: price += 228.81; break;
        case 40: price += 307.55; break;
        case 50: price += 383.28; break;
        case 60: price += 457.62; break;
      }
      switch (state.standardTampon) {
        case 10: price += 84.88; break;
        case 20: price += 165.10; break;
        case 30: price += 247.23; break;
        case 40: price += 330.20; break;
        case 50: price += 412.33; break;
        case 60: price += 494.46; break;
      }
      switch (state.superTampon) {
        case 10: price += 89.74; break;
        case 20: price += 178.63; break;
        case 30: price += 267.92; break;
        case 40: price += 356.21; break;
        case 50: price += 445.50; break;
        case 60: price += 534.79; break;
      }

      state.totalPrice = price;
    },
  },
});

export const {
  setActiveTab,
  setStandardPed,
  setSuperPed,
  setSuperPlusPed,
  setDailyPad,
  setSuperDailyPad,
  setMiniTampon,
  setStandardTampon,
  setSuperTampon,
  setTotalPrice,
} = productSlice.actions;

export default productSlice.reducer;
