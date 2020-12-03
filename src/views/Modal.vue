<template>
  <teleport to="#model">
    <div id="center" v-if="isOpen">
      <h2><slot>this is teleport</slot></h2>
      <button @click="buttonClick">aaa</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  emits: {
    closeOpen: null,
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("closeOpen");
    };
    return {
      buttonClick,
    };
  },
  data() {
    return {};
  },
});
</script>

<style lang="less" scoped>
#model {
  width: 500px;
  height: 500px;
  #center {
    height: 500px;
    width: 500px;
  }
}
</style>
