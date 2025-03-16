<template>
	<view
		class="nx-flip-card" 
		:class="{
			flipping: flipping,
			down: isDown
		}" 
		:style="{
			'--background-color': backgroundColor,
			'--border-radius': borderRadius,
			backgroundColor: 'var(--background-color)',
			borderRadius: 'var(--border-radius)',
			height: height,
			minWidth: width,
			lineHeight: height,
			fontSize: fontSize,
			color: fontColor
		}"
	>
		<view class="text">{{ nextText }}</view>
		<view 
			class="half-card front-cord-top"
		>{{ isDown ? nextText : frontText }}</view>
		<view 
			class="half-card front-cord-bottom"
		>{{ isDown ? nextText : frontText }}</view>
		<view 
			class="half-card next-cord-top"
		>{{ isDown ? frontText : nextText }}</view>
		<view 
			class="half-card next-cord-bottom"
		>{{ isDown ? frontText : nextText }}</view>
	</view>
</template>
<script>
	export default {
		props: {
			backgroundColor: {
				type: String,
				default: '#d7d7d7'
			},
			height: {
				type: String,
				default: '200rpx'
			},
			width: {
				type: String,
				default: '200rpx'
			},
			borderRadius: {
				type: String,
				default: '10rpx'
			},
			fontSize: {
				type: String,
				default: '140rpx'
			},
			fontColor: {
				type: String,
				default: '#000'
			},
			text: {
				type: [String, Number],
				default: ''
			},
			direction: {
				type: String,
				default: 'up'
			}
		},
		data() {
			return {
				flipping: false,
				frontText: '',
				nextText: '',
			}
		},
		created() {
			this.nextText = this.text;
			this.frontText = this.text;
		},
		computed: {
			isDown() {
				return this.direction === 'down'
			}
		},
		watch: {
			text(val) {
				this.doFlipping(val);
			}
		},
		methods: {
			doFlipping(text) {
				if(this.flipping) {
					this.frontText = this.nextText;
					this.flipping = false;
				}
				this.nextText = text;
				// this.flipping = true;
				setTimeout(() => {
					this.flipping = true;
				}, 50)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.nx-flip-card {
		position: relative;
		background-color: var(--background-color);
		height: 200rpx;
		min-width: 200rpx;
		padding: 6rpx;
		box-sizing: border-box;
		line-height: 200rpx;
		display: inline-block;
		border-radius: var(--border-radius);
		text-align: center;
		font-size: 140rpx;
		perspective: 500rpx;
		box-shadow: 0px 0px 6px #888888;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 50%;
			height: 2px;
			width: 100%;
			background: linear-gradient(to bottom, #000, #000 1px, #fff 1px);
			margin-top: -1px;
			z-index: 99;
		}
		.text {
			width: 100%;
			height: 100%;
			visibility: hidden;
		}
		.half-card {
			position: absolute;
			width: 100%;
			height: 50%;
			left: 0;
			top: 0;
			overflow: hidden;
			background-color: var(--background-color);
			&.front-cord-top {
				left: 0;
				top: 0;
				z-index: 10;
				border-top-left-radius: var(--border-radius);
				border-top-right-radius: var(--border-radius);
			}
			&.front-cord-bottom {
				left: 0;
				top: 50%;
				z-index: 10;
				line-height: 0;
				border-bottom-left-radius: var(--border-radius);
				border-bottom-right-radius: var(--border-radius);
				transform: rotateX(0deg);
				transform-origin: center top;
				backface-visibility: hidden;
			}
			&.next-cord-top {
				z-index: 20;
				border-top-left-radius: var(--border-radius);
				border-top-right-radius: var(--border-radius);
				transform-origin: center bottom;
				transform: rotateX(-180deg);
				backface-visibility: hidden;
			}
			&.next-cord-bottom {
				left: 0;
				top: 50%;
				line-height: 0;
				border-bottom-left-radius: var(--border-radius);
				border-bottom-right-radius: var(--border-radius);
			}
		}
		&.flipping {
			.half-card {
				&.front-cord-bottom {
					transform: rotateX(180deg);
					transition: 0.5s;
				}
				&.next-cord-top {
					transform: rotateX(0deg);
					transition: 0.5s;
				}
			}
		}
		&.down {
			.half-card {
				&.front-cord-bottom {
					transform: rotateX(-180deg);
				}
				&.next-cord-top {
					transform: rotateX(0deg);
				}
			}
			&.flipping {
				.half-card {
					&.front-cord-bottom {
						transform: rotateX(-360deg);
					}
					&.next-cord-top {
						transform: rotateX(-180deg);
					}
				}
			}
		}
	}
</style>
