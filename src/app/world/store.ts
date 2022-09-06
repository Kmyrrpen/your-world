import { proxy } from 'valtio';
import { createReducer } from 'wuuber';

type MetaStoreState = {
  files: { [key: string]: Meta };
  tags: { [key: string]: Tag };
};

export type Tag = {
  name: string;
  description: string;
  id: string;
};

export type Meta = {
  title: string;
  description: string;
  content: string;
  id: string;
};

export const world = proxy<MetaStoreState>({
  files: {},
  tags: {},
});

export const worldReducer = createReducer('world', {
  setMeta: (action) => {
    world.files[action.payload.id] = action.payload;
  },
  deleteMeta: (action) => {
    delete world.files[action.payload];
  },
  setTag: (action) => {
    world.tags[action.payload.id] = action.payload;
  },
  deleteTag: (action) => {
    delete world.tags[action.payload];
  },
});

export const { deleteMeta, deleteTag, setMeta, setTag } = worldReducer.actions;
