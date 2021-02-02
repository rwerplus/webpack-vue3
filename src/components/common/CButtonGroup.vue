<template>
  <div class="c-button-group">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'CButtonGroup',
    mounted () {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn('c-button-group的子元素应该全是c-button,但是你使用的是:',node.nodeName)
        }
      }
    }
  }
</script>

<style lang="scss">
.c-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .v-button {
    border-radius: 0;
    &:active {position: relative;z-index: 1}
    &:focus {position: relative;z-index: 1}
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
  }
}
</style>
