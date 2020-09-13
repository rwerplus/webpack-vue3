<template>
  <div>
    <halo/>
  </div>
</template>

<script>
  import halo from './halo.demo.vue'

  export default {
    name: 'HelloWorld',
    components: { halo },
    props: {
      msg: String
    }
  }
</script>
