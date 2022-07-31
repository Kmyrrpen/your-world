import { createChain } from "sculk";
import { worldStoreChain } from "./world/flows";

const dispatch = createChain(worldStoreChain);
export default dispatch;