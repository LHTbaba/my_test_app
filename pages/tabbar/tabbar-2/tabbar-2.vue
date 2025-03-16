<template>
  <div>
    <view class="button-list">
      <view class="button-item" @click="handleShowEffect('snow')">
        雪花特效
      </view>
      <view class="button-item" @click="handleShowEffect('fireworks')">
        烟花特效
      </view>
      <view class="button-item" @click="handleShowEffect('schoolpride')">
        礼花特效
      </view>
      <view class="button-item" @click="handleShowEffect('realistic')">
        喜庆特效
      </view>
      <view class="button-item" @click="handleShowEffect('stars')">
        星星特效
      </view>
      <view class="button-item" @click="handleShowEffect('all')">
        全部特效
      </view>
    </view>
    <firework-effect ref="fireworkEffects"></firework-effect>
  </div>
</template>

<script>
import fireworkEffect from '@/components/firework-effect/firework-effect.vue'
export default {
	components: {
		fireworkEffect
	},
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    handleShowEffect(type) {
      this.$refs.fireworkEffects.handleShowEffect({
        type, //snow fireworks schoolpride realistic stars all
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.button-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 340rpx;
  margin: 50rpx auto 0;
}

.button-item {
  margin: 12rpx 0 0 12rpx;
  padding: 12rpx 24rpx;
  text-align: center;
  display: inline-block;
  border-radius: 12rpx;
  background: linear-gradient(to right, #feef3c, #f3cd34);
}
</style>
