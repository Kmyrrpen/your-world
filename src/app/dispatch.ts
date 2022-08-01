import { createChain } from "sculk";
import { metaChain } from "./meta/flows";

const dispatch = createChain(metaChain);
export default dispatch;