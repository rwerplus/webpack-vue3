<template>
  <button class='v-button' :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <c-icon v-if="icon && !loading" :name="icon"></c-icon>
    <c-icon :class="[{'loading':loading}]" v-if="loading" name="loading"></c-icon>
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
          return !(value !== 'left' && value !== 'right');
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss">
@import './v-button';
</style>
