import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

const selectContacts = (state) => state.contacts.items;
const selectisLoading = (state) => state.contacts.isloading;
const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) =>
    contacts.filter((c) =>
      c.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

export { selectContacts, selectisLoading, selectError };
