import { createChain, Flow } from "sculk";
import { metaChain } from "./meta/flows";
import { themeChain } from "./theme/flows";

const logger: Flow = (action, next) => {
  console.log(action.type);
  console.log(action.payload);
  return next(action);
};

const dispatch = createChain(logger, metaChain, themeChain);
export default dispatch;