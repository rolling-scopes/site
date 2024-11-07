import { createCatchAllMeta } from 'nextra/catch-all';
import json from './data.json' assert { type: 'json' };

// @ts-ignore
export default () => createCatchAllMeta(json.filePaths, json.nestedMeta);
