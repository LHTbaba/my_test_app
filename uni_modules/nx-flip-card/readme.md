# nx-flip-card
# 使用须知

* 1、这是一个翻动卡片插件，可以用它实现时钟、倒计时等效果
* 2、仅为翻动卡片插件，时钟、倒计时等效果需要用户自行实现

#props属性
| 属性名称 | 类型 | 默认值 | 可选值 | 说明 |
| :----- | :----: | :----: | :----: | :---- |
| backgroundColor | String | #d7d7d7 | - | 卡片背景色 |
| height | String | 200rpx | - | 卡片高度 |
| width | String | 200rpx | - | 卡片宽度 |
| borderRadius | String | 10rpx | - | 卡片圆角 |
| fontSize | String | 140rpx | - | 字体大小 |
| fontColor | String | #000000 | - | 字体颜色 |
| text | String, Number | - | - | 显示文字 |
| direction | String | up | up，down | 翻动方向，向上翻动和向下翻动 |

# 完整示例
```html
<view class="content">
	<view class="content-item">
		<nx-flip-card
			:text="text"
		></nx-flip-card>
	</view>
	<view class="content-item">
		<view class="clock">
			<nx-flip-card
				:text="h"
			></nx-flip-card>
			<text>:</text>
			<nx-flip-card
				:text="m"
			></nx-flip-card>
			<text>:</text>
			<nx-flip-card
				:text="s"
			></nx-flip-card>
		</view>
	</view>
	<view class="content-item">
		<view class="clock clock-2">
			<view class="card-spacing">
				<nx-flip-card
					:text="sh"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
			<view class="card-spacing">
				<nx-flip-card
					:text="gh"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
			<text>:</text>
			<view class="card-spacing">
				<nx-flip-card
					:text="sm"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
			<view class="card-spacing">
				<nx-flip-card
					:text="gm"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
			<text>:</text>
			<view class="card-spacing">
				<nx-flip-card
					:text="ss"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
			<view class="card-spacing">
				<nx-flip-card
					:text="gs"
					width="90rpx"
					height="180rpx"
					font-size="120rpx"
				></nx-flip-card>
			</view>
		</view>
	</view>
	<view class="content-item">
		<view class="countdown-title">
			<text>距离国庆还有</text>
		</view>
		<view class="countdown">
			<view class="card-spacing">
				<nx-flip-card
					:text="dd"
					direction="down"
					width="100rpx"
					height="100rpx"
					font-size="70rpx"
				></nx-flip-card>
			</view>
			<text>天</text>
			<view class="card-spacing">
				<nx-flip-card
					:text="dh"
					direction="down"
					width="100rpx"
					height="100rpx"
					font-size="70rpx"
				></nx-flip-card>
			</view>
			<text>时</text>
			<view class="card-spacing">
				<nx-flip-card
					:text="dm"
					direction="down"
					width="100rpx"
					height="100rpx"
					font-size="70rpx"
				></nx-flip-card>
			</view>
			<text>分</text>
			<view class="card-spacing">
				<nx-flip-card
					:text="ds"
					direction="down"
					width="100rpx"
					height="100rpx"
					font-size="70rpx"
				></nx-flip-card>
			</view>
			<text>秒</text>
		</view>
	</view>
</view>
```

```javascript
export default {
	data() {
		return {
			text: 1,
			h: 0,
			m: 0,
			s: 0,
			sh: 0,
			gh: 0,
			sm: 0,
			gm: 0,
			ss: 0,
			gs: 0,
			dd: 0,
			dh: 0,
			dm: 0,
			ds: 0,
		};
	},
	created() {
		setInterval(() => {
			this.text++;
		}, 1000);
		this.getTime();
		setInterval(() => {
			this.getTime();
		}, 17);
	},
	methods: {
		getTime() {
			const now = new Date();
			this.h = this.timeZeroFill(now.getHours());
			this.m = this.timeZeroFill(now.getMinutes());
			this.s = this.timeZeroFill(now.getSeconds());
			this.sh = Math.floor(now.getHours() / 10);
			this.gh = now.getHours() % 10;
			this.sm = Math.floor(now.getMinutes() / 10);
			this.gm = now.getMinutes() % 10;
			this.ss = Math.floor(now.getSeconds() / 10);
			this.gs = now.getSeconds() % 10;
			let nationalDay = new Date(now.getFullYear(), 9, 1); // 注意月份是从0开始的，所以10月是9
			let distance = nationalDay - now;
			if(distance <= 0) {
				nationalDay = new Date(now.getFullYear() + 1, 9, 1); // 注意月份是从0开始的，所以10月是9
				distance = nationalDay - now;
			}
			this.dd = Math.floor(distance / (1000 * 60 * 60 * 24));
			this.dh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.dm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			this.ds = Math.floor((distance % (1000 * 60)) / 1000);
		},
		timeZeroFill(number) {
			return number < 10 ? '0' + number : number;
		}
	}
}
```
```css
page {
	height: 100%;
	/* #ifdef MP-ALIPAY */
	height: 100vh;
	/* #endif */
}
.content {
	&-item {
		padding: 20rpx;
		// background-color: #000;
		.clock {
			font-size: 140rpx;
			display: flex;
			align-items: center;
			.card-spacing {
				margin: 0 4px;
			}
			&.clock-2 {
				font-size: 120rpx;
			}
		}
		.countdown-title {
			margin: 10px 4px;
		}
		.countdown {
			display: flex;
			align-items: flex-end;
			.card-spacing {
				margin: 0 4px;
			}
		}
	}
}
```
