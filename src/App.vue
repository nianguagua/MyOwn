<script setup>
import axios from "./store/axiosSet";
import { RouterLink } from "vue-router";
import { useBannerStaterStore } from "./store/storeSet";
const bannerStore = useBannerStaterStore();
</script>
<template>
  <div id="box">
    <div id="banner">
      <el-container>
        <el-header height="80px">
          <div class="left">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <div class="right">
            <ul>
              <li>
                <div :class="['name', { active: bannerStore.active == 1 }]">
                  <RouterLink class="test" index="1" to="/">首页</RouterLink>
                </div>
              </li>
              <li v-if="role == 1">
                <div :class="['name', { active: bannerStore.active == 2 }]">
                  <RouterLink index="2" to="/products">产品</RouterLink>
                </div>
                <div class="dropCon">
                  <div class="item">
                    <RouterLink index="2" to="/products/jianzhu"
                      >建筑设计</RouterLink
                    >
                  </div>
                  <div class="item">
                    <RouterLink index="2" to="/products/chanpin/5/10236"
                      >产品设计</RouterLink
                    >
                  </div>
                  <div class="item">室内</div>
                </div>
              </li>
              <li>
                <div :class="['name', { active: bannerStore.active == 3 }]">
                  <router-link index="3" to="/news">新闻</router-link>
                </div>
                <div class="dropCon">
                  <div class="item">
                    <router-link index="3" to="/news/chanyeNews"
                      >产业新闻</router-link
                    >
                  </div>
                  <div class="item">
                    <router-link index="3" to="/news/gongsiNews"
                      >公司新闻</router-link
                    >
                  </div>
                </div>
              </li>
              <li>
                <div :class="['name', { active: bannerStore.active == 4 }]">
                  <RouterLink index="4" to="/tuandui">团队</RouterLink>
                </div>
              </li>
              <li>
                <div :class="['name', { active: bannerStore.active == 5 }]">
                  <RouterLink index="5" to="/">服务</RouterLink>
                </div>
              </li>
              <li>
                <div :class="['name', { active: bannerStore.active == 6 }]">
                  <RouterLink index="6" to="/">关于</RouterLink>
                </div>
              </li>
            </ul>
          </div>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: 1,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    hoverHeader(e) {
      let act = e.target.getAttribute("index");
    },
    getUserInfo() {
      console.log("/api/getUserInfo");
      axios({
        method: "post",
        url: "/api/getUserInfo",
        data: {
          token: "aaa",
        },
      }).then((param) => {
        let data = param.data;
        this.role = data.role;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  color: red;
}
.el-header {
  position: fixed;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #333;
  background: #1d1e20;
  .left {
    height: 100%;
    float: left;
    position: relative;
    img {
      width: 120px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .right {
    height: 100%;
    float: right;
    font-size: 0.8em;
    a {
      color: #999;
    }
    ul {
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      li {
        color: #999;
        display: inline-block;
        cursor: pointer;
        position: relative;
        .name {
          padding: 0 35px;
          &.active {
            a {
              color: #333;
            }
            background: #fdd947;
          }
        }
        &:hover {
          .name {
            a {
              color: #333;
            }
            background: #fdd947;
          }

          .dropCon {
            display: block;
          }
        }
        .dropCon {
          display: none;
          position: absolute;
          left: -50px;
          padding-top: 20px;
          width: 200px;
          background: #222;
          .item {
            font-size: 0.8em;
            border-bottom: 1px solid #333;
            padding: 5px 0 5px 15px;
            &:first-child {
              border-top: 2px solid #999;
            }
            &:hover {
              color: #fff;
              font-size: 1em;
              padding-left: 20px;
              background: #000;
            }
          }
        }
      }
    }
  }
}
.el-main {
  margin-top: 80px;
}
</style>
