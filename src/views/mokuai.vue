<template>
  <div>
    <h1>{{x}}</h1>
    <h2>{{y}}</h2>
  </div>
</template>

<script lang="ts">
import useMousePosition from "@/hooks/useMousePosition";
import {ref, computed } from 'vue'
export default {
  name: "Home",
  setup() {
    const {x,y} = useMousePosition()
    return {
      x, y
    }
  },
};
</script>

<style lang="less" scoped></style>
