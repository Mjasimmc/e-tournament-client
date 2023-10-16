import {combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import playerSlice from "./Slices/playerSlice";
import  GamemasterSlice  from "./Slices/GamemasterSlice";
import AdminSLice from "./Slices/AdminSLice";
import  playerChatSlice  from "./Slices/chatSlice";

const persistConfig = { key: "root", storage, version: 1 };


const rootReducer = combineReducers({
  player: playerSlice,
  gamemaster: GamemasterSlice,
  admin: AdminSLice,
  playerchat:playerChatSlice
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


