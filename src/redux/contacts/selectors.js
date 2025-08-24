const selectContacts = (state) => state.contacts.items;
const selectLoading = (state) => state.contacts.loading;
const selectError = (state) => state.contacts.error;

export { selectContacts, selectLoading, selectError };
