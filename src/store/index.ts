import { createPinia } from 'pinia';

/**
 * export default defineComponent({
    setup() {
      const store = useStore()
      // ❌ This won't work because it breaks reactivity
      // it's the same as destructuring from `props`
      const { name, doubleCount } = store

      name // "eduardo"
      doubleCount // 2

      return {
        // will always be "eduardo"
        name,
        // will always be 2
        doubleCount,
        // this one will be reactive
        doubleValue: computed(() => store.doubleCount),
        }
    },
})
 */
/**
 * In order to extract properties from the store while keeping its reactivity, you need to use storeToRefs(). It will create refs for every reactive property.
 * This is useful when you are only using state from the store * but not calling any action. Note you can destructure actions directly from the store as they are bound to the store itself too:
 * import { storeToRefs } from 'pinia'
 *
 *export default defineComponent({
 *  setup() {
 *    const store = useStore()
 *    // `name` and `doubleCount` are reactive refs
 *    // This will also create refs for properties added by plugins
 *    // but skip any action or non reactive (non ref/reactive) property
 *    const { name, doubleCount } = storeToRefs(store)
 *    // the increment action can be just extracted
 *    const { increment } = store
 *
 *    return {
 *      name,
 *      doubleCount
 *      increment,
 *    }
 *  },
 *})
 */

const store = createPinia();

export { store };
