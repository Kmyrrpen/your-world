import { proxy } from "valtio";

type MetaStoreState = {
  files: { [key: string]: Meta }
}

export type Meta = {
  title: string;
  description: string;
  content: string;
  id: string;
}

export const metaStore = proxy<MetaStoreState>({
  files: {}
});
