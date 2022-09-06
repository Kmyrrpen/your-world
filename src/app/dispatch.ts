import { createDispatch } from 'wuuber';
import { themeReducer } from './theme';
import { worldReducer } from './world';

const dispatch = createDispatch(worldReducer, themeReducer);
export default dispatch;
