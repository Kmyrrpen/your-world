import { proxy, ref } from "valtio";

type MetaStoreState = {
  files: Map<string, Meta>
}

export type Meta = {
  title: string;
  description: string;
  content: string;
  id: string;
}

export const metaStore = proxy<MetaStoreState>({
  files: ref(new Map())
});
