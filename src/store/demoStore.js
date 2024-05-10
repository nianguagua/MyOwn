import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBannerStaterStore } from "./storeSet";
export const useDemoStateStore = defineStore("demoState", {
  state: () => {
    return {
      num: 10,
    };
  },

  actions: {
    setDemoState(act) {
      const bannerStater = useBannerStaterStore();
      this.num = act;
    },
  },
});
