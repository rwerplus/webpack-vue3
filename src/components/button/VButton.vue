<template>
  <button class='v-button' :class="{[`icon-${iconPosition}`]: true}">
    <v-icon v-if="icon" :name="icon"></v-icon>
    <div class="content">
      <slot/>
    </div>
    </button>
</template>
<script>

  export default {
    name: 'VButton',
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          console.log(value)
          return !(value !== 'left' && value !== 'right');
        }
      }
    },
  }
</script>
<style lang="scss">
@import './v-button';
</style>
