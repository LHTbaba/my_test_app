<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		setTimeout(() => {
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: '99+'
			// });
			// uni.showTabBarRedDot({
			// 	index: 3
			// });
		}, 100);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */ 
</style>
