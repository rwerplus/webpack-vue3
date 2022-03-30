import { getMessage } from '../tool'

const langFiles: global.RequireContext = require.context('./zh_CN', true, /\.ts$/)

export default {
  message: {
    ...getMessage(langFiles),
  },
}
