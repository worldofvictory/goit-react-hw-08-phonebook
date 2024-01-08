import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    updateFilter: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = state.items.filter(item => item.id !== action.payload.id);
        })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending);
  },
});

export const { updateFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;