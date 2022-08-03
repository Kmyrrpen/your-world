import { createChain, Flow } from "sculk";
import { metaChain } from "./meta/flows";

const logger: Flow = (action, next) => {
  console.log(action.type);
  console.log(action.payload);
  return next(action);
};

const dispatch = createChain(logger, metaChain);
export default dispatch;