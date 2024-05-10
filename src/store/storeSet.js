import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useBannerStaterStore = defineStore("bannerState", () => {
  const active = ref("这是active的值"); //相当于state
  const doubleCount = computed(() => count.value * 2);
  function setBannerState(act) {
    active.value = act;
  }
  return { active, doubleCount, setBannerState };
});
