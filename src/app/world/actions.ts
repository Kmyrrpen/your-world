import { createAction } from "sculk";
import { Meta } from "../types";

export const DELETE_META = createAction<string>("world/delete");
export const SET_META = createAction<Meta>("world/create");