import { createChain } from "sculk";
import { createSculk } from "sculk/dist/createSculk";
import { Meta, metaStore } from "./store";

export const setMeta = createSculk<Meta>("meta/create", (action) => {
  metaStore.files.set(action.payload.id, action.payload);
});

export const deleteMeta = createSculk<string>("meta/delete", (action) => {
  metaStore.files.delete(action.payload);
});

export const metaChain = createChain(setMeta, deleteMeta);