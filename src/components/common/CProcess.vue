<template>
  <section class="c-process-wrap">
    <div class="c-content">
      <aside class="c-left-process" @click.stop="handleClick('123')">
        851515
      </aside>
      <aside class="c-right-process" @click="handleClick">
        123456
      </aside>
    </div>
    <el-progress type="dashboard"
                 color="#000"
                 :width="130"
                 :show-text="false"
                 :percentage="percentage" :color="colors"></el-progress>
    <div style="margin-top: 50px">
      <el-button-group>
        <el-button icon="el-icon-minus" @click.stop="decrease"></el-button>
        <el-button icon="el-icon-plus" @click.stop="increase"></el-button>
      </el-button-group>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CProcess',
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      handleClick(e) {
        console.log(e)
        console.log('left')
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>

<style lang="scss">
.c-process-wrap {
  display: inline-block;
  position: relative;
  .c-content {
    position: absolute;
    width: inherit;
    height: inherit;
    padding: 22px;
    top: 0;
    left: 0;
    z-index: 3003;
    .c-left-process{
      text-align: left;
      display: inline-block;
      overflow: visible;
      /*width: 0;*/
      /*height: 0;*/
      /*border-top: 70px solid transparent;*/
      /*border-right: 70px solid transparent;*/
      /*position: relative;*/
      /*cursor: pointer;*/
      .c-number-inner {
        position: absolute;
        top: 23px;
        left: 27px;
      }
    }
    .c-right-process{
      overflow: visible;
      display: inline-block;
      transform: translateX(15px) translateY(39px);
      /*width: 0;*/
      /*height: 0;*/
      /*border-bottom: 50px solid transparent;*/
      /*border-left: 50px solid transparent;*/
      cursor: pointer;
      .c-number-inner {
        position: absolute;
        bottom: -63px;
        left: -50px;
      }
    }
  }
}
</style>
