<template>
  <div class="health-page">
    <div class="countdown-title">
      <span>请选择你的出生年月日：</span>
    </div>
    <div class="time-select">
      <uni-datetime-picker
        type="date"
        :clear-icon="true"
        v-model="birthday"
      />
    </div>
    <div class="button-panel">
      <button class="button" type="primary" buttonColor="#1296db" @click="clickButton">
        确认
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      birthday: "",
    };
  },
  onLoad() {},
  onShow() {},
  mounted() {},
  methods: {
    clickButton() {
      uni.navigateTo({
        url: `timeCalc?time=${this.birthday}`
      })
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.health-page {
  height: 100vh;
  .countdown-title {
    padding: 30rpx 0 0 60rpx;
    line-height: 100rpx;
  }
  .time-select {
    padding: 30rpx 60rpx;
  }
  .button-panel {
    padding: 50rpx 60rpx;
  }
}
</style>
