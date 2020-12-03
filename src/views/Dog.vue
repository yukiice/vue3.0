<template>
  <div>
    <div v-if="loading">loding......</div>
    <div v-if="loaded">
      <img :src="result.message" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { urlLoads } from "../server/index1";
export default {
  name: "Home",
  setup() {
    let urls: string = `https://dog.ceo/api/breeds/image/random`;
    const { result, loading, loaded, error } = urlLoads(urls);
    return {
      result,
      loading,
      loaded,
      error,
    };
  },
};
</script>

<style lang="less" scoped></style>
