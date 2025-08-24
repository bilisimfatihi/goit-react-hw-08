import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authSlice from "./auth/slice";

const persistConfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(persistConfig, authSlice),
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export const persistor = persistStore(store);
