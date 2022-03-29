import { getMessage } from '../tool';

const langFiles: any = require.context('./en_US', true, /\.ts$/);

export default {
  message: {
    ...getMessage(langFiles, 'en_US'),
  },
};
