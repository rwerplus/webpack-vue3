<template>
  <button class='v-button' :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#v-${icon}`"></use>
    </svg>
    <div class="content">
      <slot/>
    </div>
    </button>
</template>
<script>

  export default {
    name: 'VButton',
    props: ['icon','iconPosition']
  }
</script>
<style lang="scss">
@import './v-button'
</style>
