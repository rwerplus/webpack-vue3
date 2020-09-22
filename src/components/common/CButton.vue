<template>
  <button class='c-button' @click.stop="()=>$emit('click')">
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'CButton'
  }
</script>

<style lang="scss">
  @import '../base.scss';

  .c-button {
    font-size: 10px;
    height: 24px;
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color-hover);
    background: var(--button-bg);
    cursor: pointer;
    vertical-align: top;
    transition: all linear .2s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > .content {order: 2;}
    &:hover {
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    }
    &:focus {
      outline: none;
      background-color: var(--button-bg);
      border: 1px solid #00ffff;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    }
    &:active{
      background-color: var(--button-active-bg);
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    }
  }

</style>
