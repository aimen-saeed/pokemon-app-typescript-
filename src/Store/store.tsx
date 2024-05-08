import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./pokemonApi";


const rootReducer = combineReducers({
	[pokemonApi.reducerPath]: pokemonApi.reducer,
});

const store = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;
