import { set } from 'lodash-es'
import Recordable = global.Recordable

/**
 * require.context是webpack提供的方法,用这个方法我们可以批量引入我们想要的文件,
 * require.context可以返回一个具有 resolve, keys, id 三个属性的方法
 * @param files
 * @param prefix
 * @returns
 */

export function getMessage (files: any, prefix = '') {
  const obj: Recordable = {}
  const modules: any = {}
  files.keys().forEach((key: any) => {
    const langFileModule = files[key].default;
    let fileName = key.replace(`./${prefix}/`, '').replace(/(\.\/|\.ts)/g, '');
    const lastIndex = fileName.lastIndexOf('.');
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    const objKey = keyList.join('.');
    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  })
  console.log(modules)
  return obj
}
