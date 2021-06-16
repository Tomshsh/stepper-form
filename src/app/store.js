import { configureStore } from '@reduxjs/toolkit';
import { loanReducer, personReducer, bankDetailsReducer } from './features/index'

export const store = configureStore({
  reducer: {
    loan: loanReducer,
    bankDetails: bankDetailsReducer,
    person: personReducer
  },
});
