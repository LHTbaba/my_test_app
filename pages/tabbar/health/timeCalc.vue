<template>
  <div class="time-page">
    <!-- <div class="button-list">
      <div class="button-item" @click="handleShowEffect('snow')">雪花特效</div>
      <div class="button-item" @click="handleShowEffect('fireworks')">
        烟花特效
      </div>
      <div class="button-item" @click="handleShowEffect('schoolpride')">
        礼花特效
      </div>
      <div class="button-item" @click="handleShowEffect('realistic')">
        喜庆特效
      </div>
      <div class="button-item" @click="handleShowEffect('stars')">星星特效</div>
      <div class="button-item" @click="handleShowEffect('all')">全部特效</div>
    </div> -->
    <div class="countdown-title">
      <span>主人，您已经活了：</span>
    </div>
    <div class="countdown">
      <div class="card-spacing">
        <nx-flip-card
          :text="dd"
          direction="up"
          width="150rpx"
          height="90rpx"
          font-size="45rpx"
          fontColor="#ffffff"
          backgroundColor="#539d09"
        ></nx-flip-card>
      </div>
      <span>天</span>
      <div class="card-spacing">
        <nx-flip-card
          :text="dh"
          direction="up"
          width="90rpx"
          height="90rpx"
          font-size="45rpx"
          fontColor="#ffffff"
          backgroundColor="#539d09"
        ></nx-flip-card>
      </div>
      <span>时</span>
      <div class="card-spacing">
        <nx-flip-card
          :text="dm"
          direction="up"
          width="90rpx"
          height="90rpx"
          font-size="45rpx"
          fontColor="#ffffff"
          backgroundColor="#539d09"
        ></nx-flip-card>
      </div>
      <span>分</span>
      <div class="card-spacing">
        <nx-flip-card
          :text="ds"
          direction="up"
          width="90rpx"
          height="90rpx"
          font-size="45rpx"
          fontColor="#ffffff"
          backgroundColor="#539d09"
        ></nx-flip-card>
      </div>
      <span>秒</span>
    </div>
    <div class="countdown-title">
      <span>又是元气满满的一天呢！</span>
    </div>
    <firework-effect ref="fireworkEffects"></firework-effect>
  </div>
</template>

<script>
import fireworkEffect from "@/components/firework-effect/firework-effect.vue";
import nxFlipCard from "../../../uni_modules/nx-flip-card/components/nx-flip-card/nx-flip-card.vue";
export default {
  components: {
    fireworkEffect,
    nxFlipCard,
  },
  data() {
    return {
      title: "Hello",
      dd: 0,
      dh: 0,
      dm: 0,
      ds: 0,
      timeInterval: null,
    };
  },
  onLoad(option) {
    this.getTime(option.time);
    this.timeInterval = setInterval(() => {
      this.getTime(option.time);
    }, 1000);
  },
  onUnload() {
    // 页面返回时清除定时器
		clearInterval(this.timeInterval)
    this.timeInterval = null
	},
  mounted() {
    setTimeout(() => {
      this.$refs.fireworkEffects.handleShowEffect({
        type: "stars", //snow fireworks schoolpride realistic stars all
      });
    }, 100);
  },
  methods: {
    handleShowEffect(type) {
      this.$refs.fireworkEffects.handleShowEffect({
        type, //snow fireworks schoolpride realistic stars all
      });
    },
    getTime(time) {
      const now = new Date();
      let nationalDay = new Date(time); // 注意月份是从0开始的，所以10月是9
      let distance = now - nationalDay;
      this.dd = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.dh = this.timeZeroFill(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      this.dm = this.timeZeroFill(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      this.ds = this.timeZeroFill(Math.floor((distance % (1000 * 60)) / 1000));
    },
    timeZeroFill(number) {
      return number < 10 ? "0" + number : number;
    },
  },
  watch: {
    dm: {
      handler(newVal, oldVal) {
        if (newVal == "00") {
          this.$refs.fireworkEffects.handleShowEffect({
            type: "all", //snow fireworks schoolpride realistic stars all
          });
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.time-page {
  height: 100vh;
  color: #ffffff;
  background: #666666;
  .button-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 340rpx;
    margin: 50rpx auto 0;
    .button-item {
      margin: 12rpx 0 0 12rpx;
      padding: 12rpx 24rpx;
      text-align: center;
      display: inline-block;
      border-radius: 12rpx;
      background: linear-gradient(to right, #feef3c, #f3cd34);
    }
  }
  .countdown-title {
    padding-left: 60rpx;
    line-height: 100rpx;
  }
  .countdown {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .card-spacing {
      margin: 0 10rpx;
    }
  }
}
</style>
