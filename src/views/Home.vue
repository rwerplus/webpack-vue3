<template>
  <div class="home">
    组件测试灰度版本@beta1.0.0
    <br />
    <v-button></v-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
