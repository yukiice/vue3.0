<template>
  <div id="app">
    <Suspense>
      <template #default>
        <suspenses></suspenses>
      </template>
      <template #fallback>
        <h1>...loading</h1>
      </template>
    </Suspense>
      <div>
        <button @click="open">111</button>
      </div>
      <Modal :isOpen="modelOpen" @closeOpen="modelClose"></Modal>
  </div>
</template>

<script>
import suspenses from "./suspenses.vue";
import Modal from "./Modal.vue";
import { ref } from "vue";
export default {
  components: { suspenses, Modal },
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
#app {
  width: 500px;
  height: 500px;
}
</style>
