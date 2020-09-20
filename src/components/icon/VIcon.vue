<template>
  <svg v-if="name" class="icon">
    <use :xlink:href="`#v-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'VIcon',
    props: ['name']
  }
</script>

<style lang="scss">

</style>
