import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigContacts = {
  key: "contactsPersistor",
  version: 1,
  storage,
};

const persistConfigFilters = {
  key: "filtersPersistor",
  version: 1,
  storage,
  blacklist: ["name"],
};

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactsReducer
);
const persistedReducerFilters = persistReducer(
  persistConfigFilters,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filters: persistedReducerFilters,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
