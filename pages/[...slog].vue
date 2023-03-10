<template>
  <div class="not-found">
    <img src="/404.svg" alt="">
    <div class="btn" @click="backHome">回到首页</div>
  </div>
</template>
<script lang="ts" setup>

async function backHome() {
  await navigateTo('/')
}
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .btn {
    display: block;
    padding: 8px 16px;
    font-size: 16px;
    color: #1e80ff;
    border-radius: 2px;
    border: 1px solid;
    line-height: 24px;
    cursor: pointer;
  }
}
</style>
