import { getMessage } from '../tool'

const langFiles: any = require.context('./zh_CN', false, /\.ts$/)

export default {
  message: {
    ...getMessage(langFiles, 'zh-CN'),
  },
}
