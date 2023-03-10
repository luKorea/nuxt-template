import { defineStore } from "pinia";

const useCountStore = defineStore("count", () => {
  const count = ref(1);
  function addCount() {
    count.value++;
  }
  return {
    count,
    addCount,
  };
});

export default useCountStore;
