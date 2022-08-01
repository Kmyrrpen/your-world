import { JSONContent } from "@tiptap/react";
import { proxy } from "valtio";

type MetaStoreState = {
  files: { [id: string]: Meta }
}

export type Meta = {
  content: JSONContent;
  id: string;
}

export const metaStore = proxy<MetaStoreState>({
  files: {}
});
