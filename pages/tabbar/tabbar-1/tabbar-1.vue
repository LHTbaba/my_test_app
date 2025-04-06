<template>
  <view class="home-page">
    <swiper
      indicator-dots
      indicator-active-color="#FFFFFF"
      circular
      autoplay
      style="height: 500rpx"
    >
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <image :src="item.url" class="banner"></image>
      </swiper-item>
    </swiper>
    <div class="content-panel">
      <div class="item" v-for="(item, index) in enterList" :key="index">
        <div class="title-panel">
          <div class="left">{{ item.name }}</div>
          <div class="right">
            <uni-easyinput
              prefixIcon="minus"
              suffixIcon="plus"
              v-model="item.num"
              placeholder="左侧图标"
              @iconClick="iconClick($event, index)"
            >
            </uni-easyinput>
          </div>
        </div>
        <p class="sub-title">{{ item.subName }}</p>
      </div>
    </div>
    <div class="button-panel">
      <button
        class="button"
        type="primary"
        buttonColor="#1296db"
        @click="clickButton"
      >
        确认携带
      </button>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      imgList: [
        // {
        //   url: "http://sns-webpic-qc.xhscdn.com/202503151649/55f855e7fa08e721b61403a1ee8cb714/1040g2sg31e3f0pgq0ccg5p5a98h46m8oviofn1o!nd_dft_wgth_webp_3",
        // },
        // {
        //   url: "http://sns-webpic-qc.xhscdn.com/202503151649/884ab43072d4dab674d4f16efb1ae8dd/1040g2sg31e3f0pfe08dg5p5a98h46m8om4c8lco!nd_dft_wgth_webp_3",
        // },
        // {
        //   url: "https://sns-webpic-qc.xhscdn.com/202503151649/1ae9f9687a450f26f18945c23ac776dc/1040g00831e3f0pe1165g5p5a98h46m8on2fard8!nd_dft_wgth_webp_3",
        // },
        // {
        //   url: "http://sns-webpic-qc.xhscdn.com/202503151649/2bd86ff2c794f859ed0cc02ca2ef295a/1040g00831e3f0pdegc705p5a98h46m8ohqrbtk0!nd_dft_wgth_webp_3",
        // },
        // {
        //   url: "https://sns-webpic-qc.xhscdn.com/202503151649/023539dabf8820ec7ebac6256535bc51/1040g2sg31e3f0p9lgedg5p5a98h46m8olk898jo!nd_dft_wgth_webp_3",
        // },
        {
          url: "../../../static/img/diaoyu1.png",
        },
        {
          url: "../../../static/img/diaoyu2.png",
        },
        {
          url: "../../../static/img/diaoyu3.png",
        },
        {
          url: "../../../static/img/diaoyu4.png",
        },
        {
          url: "../../../static/img/diaoyu5.png",
        },
      ],
      enterList: [
        {
          name: "路亚竿",
          subName:
            "推荐长度在1.8-2.1米之间，调性选择ML或者M。新手建议使用直柄竿，比较容易上手‌",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
        {
          name: "泥鳅",
          subName: "这是路亚的秘密武器哟~",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
        {
          name: "铅笔",
          subName: "一种常见的路亚拟饵，因其形状细长，类似铅笔而得名",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
        {
          name: "铁板",
          subName:
            "一种专门用于路亚钓法的钓鱼工具，外形酷似一条没有尾巴的小鱼，通常由金属制成",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
        {
          name: "控鱼器",
          subName:
            "专门用于路亚钓鱼的工具，主要用于在钓鱼过程中控制鱼类，避免手被鱼齿、鱼刺及鱼钩划伤，并减少对鱼的损伤。它通常设计小巧，便于携带，且符合人体工程学，适合成年人手掌握距",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
        {
          name: "抄网",
          subName: "可带可不带，高手不需要",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
          num: 0,
        },
      ],
    };
  },
  onLoad() {
    uni.showShareMenu();
  },
  methods: {
    iconClick(e, index) {
      if (e === "prefix") {
        if (this.enterList[index].num > 0) {
          this.enterList[index].num--;
        } else {
          uni.showToast({
            title: "一个都不带？你个呆逼！",
            icon: "none",
            duration: 2000,
          });
        }
      } else if (e === "suffix") {
        if (this.enterList[index].num < 10) {
          this.enterList[index].num++;
        } else {
          uni.showToast({
            title: "有点多了，注意节制！",
            icon: "none",
            duration: 2000,
          });
        }
      }
    },
    clickButton() {
      uni.showToast({
        title: "已保存至备忘录！",
        //将值设置为 success 或者直接不用写icon这个参数
        icon: "success",
        //显示持续时间为 2秒
        duration: 2000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  image {
    width: 750rpx;
    height: 500rpx;
  }
  .content-panel {
    flex: 1;
    padding: 25rpx;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 30rpx;
    .item {
      height: 270rpx;
      padding: 15px;
      border-radius: 15rpx;
      box-sizing: border-box;
      background: #dddddd;
      .title-panel {
        width: 100%;
        margin-bottom: 15rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30rpx;
        color: #222222;
        font-weight: bolder;
        .left {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .right {
          width: 150rpx;
        }
      }
      .sub-title {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        font-size: 25rpx;
        line-height: 35rpx;
        color: #666666;
      }
    }
  }
  .button-panel {
    padding: 20rpx 60rpx;
  }
}
</style>
