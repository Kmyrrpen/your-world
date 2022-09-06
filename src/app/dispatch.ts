import { createDispatch } from 'wuuber';
import { themeReducer } from './theme/store';
import { worldReducer } from './world/store';

const dispatch = createDispatch(worldReducer, themeReducer);
export default dispatch;
