import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors.js";

export const selectFilter = (state) => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
