import { createChain, Flow } from "sculk";
import { DELETE_META, SET_META } from "./actions";
import { worldStore } from "./store";

const setMeta: Flow = (action, next) => {
  if (SET_META.match(action)) {
    worldStore.files[action.payload.id] = action.payload;
    // create file handle and file from world handle
  }
  return next(action);
};

const deleteMeta: Flow = (action, next) => {
  if (DELETE_META.match(action)) {
    delete worldStore.files[action.payload];
    // delete file from world handle
  }

  return next(action);
};

export const worldStoreChain = createChain(setMeta, deleteMeta);
