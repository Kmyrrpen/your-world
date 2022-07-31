import { proxy } from "valtio";
import { World } from "../types";

type WorldStore = World & {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
};

export const worldStore = proxy<WorldStore>({
  name: "",
  description: "",
  files: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
});
