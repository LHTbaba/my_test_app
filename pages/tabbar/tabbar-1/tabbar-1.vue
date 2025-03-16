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
        <p class="title">{{ item.name }}</p>
        <p class="sub-title">{{ item.subName }}</p>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      imgList: [
        {
          url: "http://sns-webpic-qc.xhscdn.com/202503151649/55f855e7fa08e721b61403a1ee8cb714/1040g2sg31e3f0pgq0ccg5p5a98h46m8oviofn1o!nd_dft_wgth_webp_3",
        },
        {
          url: "http://sns-webpic-qc.xhscdn.com/202503151649/884ab43072d4dab674d4f16efb1ae8dd/1040g2sg31e3f0pfe08dg5p5a98h46m8om4c8lco!nd_dft_wgth_webp_3",
        },
        {
          url: "https://sns-webpic-qc.xhscdn.com/202503151649/1ae9f9687a450f26f18945c23ac776dc/1040g00831e3f0pe1165g5p5a98h46m8on2fard8!nd_dft_wgth_webp_3",
        },
        {
          url: "http://sns-webpic-qc.xhscdn.com/202503151649/2bd86ff2c794f859ed0cc02ca2ef295a/1040g00831e3f0pdegc705p5a98h46m8ohqrbtk0!nd_dft_wgth_webp_3",
        },
        {
          url: "https://sns-webpic-qc.xhscdn.com/202503151649/023539dabf8820ec7ebac6256535bc51/1040g2sg31e3f0p9lgedg5p5a98h46m8olk898jo!nd_dft_wgth_webp_3",
        },
      ],
      enterList: [
        {
          name: "入口一",
          subName: "这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介这是入口一的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口二",
          subName: "这是入口二的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口三入口三入口三入口三",
          subName: "这是入口三的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口四",
          subName: "这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介这是入口四的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口五",
          subName: "这是入口五的简介这是入口五的简介这是入口五的简介这是入口五的简介这是入口五的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口六入口六入口六入口六",
          subName: "这是入口六的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
        {
          name: "入口七",
          subName: "这是入口七的简介",
          url: "pages/tabbar-3-detail/tabbar-3-release/tabbar-3-release",
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
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
      height: 250rpx;
      padding: 15px;
      border-radius: 15rpx;
      box-sizing: border-box;
      background: #dddddd;
      .title {
        width: 250rpx;
        margin-bottom: 15rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 30rpx;
        color: #222222;
				font-weight: bolder;
      }
      .sub-title {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        font-size: 20rpx;
				line-height: 35rpx;
        color: #666666;
      }
    }
  }
}
</style>
