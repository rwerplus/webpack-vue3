import { getMessage } from '../tool';

const langFiles: global.RequireContext = require.context('./en_US', true, /\.ts$/);

export default {
  message: {
    ...getMessage(langFiles),
  },
};
