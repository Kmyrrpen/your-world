// worlds stored in user files
export type Meta = {
  name: string;
  id: string;
  description: string;
};
export type World = {
  name: string;
  description: string;
  files: { [key: string]: Meta };
};

// worlds stored in state
export type ActiveMeta = Meta & {
  handle: FileSystemFileHandle;
};
export type ActiveWorld = World & {
  handle: FileSystemDirectoryHandle;
  files: { [key: string]: ActiveMeta };
};

// worlds stored in IDB, has no files
export type SavedWorld = Omit<World, "files"> & {
  handle: FileSystemDirectoryHandle;
};
