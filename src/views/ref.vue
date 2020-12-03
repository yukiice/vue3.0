<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <a-button type="primary" @click="increase"> Primary </a-button>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs } from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  name: "Home",
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    const data: DataProps = reactive({
      count: 0,
      increase: () => { 
        data.count++;  
      },
      double: computed(() => data.count * 2),
    });

    // toRefs
    const refData = toRefs(data);

    // 增加的方法
    return {
      ...refData,
    };
  },
};
</script>

<style lang="less" scoped>

</style>
