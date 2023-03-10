<template>
  <div>
    这是首页
    <div>{{ count }}</div>
    <el-button type="primary" @click="add">添加</el-button>
  </div>
</template>

<script setup lang="ts">
import useCountStore from '@/store/count';
import { storeToRefs } from 'pinia';


const countStore = useCountStore()
const { count } = storeToRefs(countStore)
function add() {
  countStore.addCount()
}
</script>

<style scoped>

</style>