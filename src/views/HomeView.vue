<script setup>
import { useBannerStaterStore } from "../store/storeSet";
const bannerStore = useBannerStaterStore();
bannerStore.setBannerState(1);
</script>

<template>
  <div id="homeView">
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "https://gd-hbimg.huaban.com/67d991320768740175b776e631ded3c01d01ca2c5d1f3-vewrpf_fw658webp",
        "https://gd-hbimg.huaban.com/c784a537da961983bc9c451ff82aa75ff0e0c3a352f63-t1nzf2_fw658webp",
        "https://gd-hbimg.huaban.com/8a594f5e828583970b70f085fd1eb881119b428237db9-7KZ7NU_fw658webp",
        "https://gd-hbimg.huaban.com/8e66e43ede522d1c8816bedbf5b1c107fecc16ba8f3cfb-ykMKSR_fw658webp",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.el-carousel {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
