import { proxy } from 'valtio';
import { Action, createReducer } from 'wuuber';

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
  setMeta: (action: Action<Meta>) => {
    world.files[action.payload.id] = action.payload;
  },
  deleteMeta: (action: Action<string>) => {
    delete world.files[action.payload];
  },
  setTag: (action: Action<Tag>) => {
    world.tags[action.payload.id] = action.payload;
  },
  deleteTag: (action: Action<string>) => {
    delete world.tags[action.payload];
  },
});

export const { deleteMeta, deleteTag, setMeta, setTag } = worldReducer.actions;
