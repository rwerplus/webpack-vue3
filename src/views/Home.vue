<template>
  <div class="home" style="margin: 0 auto">
    组件测试灰度版本@beta1.0.0
    <br/>
    <v-button icon='pinglun' icon-position='right'>组件</v-button>
    <v-button icon='arrow-left'>组件</v-button>
    <v-button icon='setup' icon-position='right' :loading="loading" @click="() => loading=!loading">组件</v-button>
    <v-button icon='setup' :loading="true" icon-position="right">组件</v-button>
    <el-divider/>
    <c-button-group>
      <v-button icon='setup' :loading="true" icon-position="right">组件</v-button>
      <v-button>前进</v-button>
      <v-button icon='setup' :loading="true" icon-position="right">组件</v-button>
    </c-button-group>
<!--    <c-multiple-select :options="options" @ok="handleOk" :selected="['h_1','h_2']" elementLabel="q" elementValue="sa"/>-->
<!--    <c-single-select :options="options" elementLabel="q" selected="深色背景颜色" elementValue="sa"></c-single-select>-->
<!--    <c-process/>-->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    handleOk (v) {
      console.log(v)
    }
  },
  data () {
    return {
      loading: false,
      options: [
        {
          'type': 'his_normal',
          'sa': 'h_1',
          'q': 'provide inject 传递响应式数据'
        }, {
          'type': 'his_normal',
          'sa': 'h_2',
          'q': 'provide'
        }, {
          'type': 'his_normal',
          'sa': 'h_3',
          'q': 'elementUI dropdown 颜色'
        }, {
          'type': 'his_normal',
          'sa': 'h_4',
          'q': 'elementUI dropdownhover颜色'
        }, {
          'type': 'his_normal',
          'sa': 'h_5',
          'q': '深色背景颜色'
        }, {
          'type': 'his_normal',
          'sa': 'h_6',
          'q': 'jsonp原理及简单实现'
        }, {
          'type': 'his_normal',
          'sa': 'h_7',
          'q': '动态创建script标签'
        }, {
          'type': 'his_normal',
          'sa': 'h_8',
          'q': '使用vue.use'
        }, {
          'type': 'his_normal',
          'sa': 'h_9',
          'q': 'php+vue'
        }, {
          'type': 'his_normal',
          'sa': 'h_10',
          'q': 'slot传值'
        }
      ]
    }
  }
}
</script>
