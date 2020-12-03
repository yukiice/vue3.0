<template>
  <div>
    <div>
      <button @click="open">111</button>
    </div>
    <Modal :isOpen="modelOpen" @closeOpen="modelClose"></Modal>
  </div>
</template>

<script lang="ts">
import Modal from "./Modal.vue";
import { ref } from "vue";
export default {
  setup() {
    const modelOpen = ref(false);
    const open = () => {
      modelOpen.value = true;
    };
    const modelClose = () => {
      modelOpen.value = false;
    };

    return {
      modelOpen,
      open,
      modelClose,
    };
  },
};
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
