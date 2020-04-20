<template>
	<view>
		<web-view :webview-styles="webViewStyle" :src="url"></web-view>
		<!-- <uni-fab horizontal="right"
				vertical="bottom"
				:pattern="mFabStyle"
				direction="vertical"
				:content="mFabMenus"></uni-fab> -->
	</view>
</template>

<script>
import uniFab from '../../common/uni-fab/uni-fab.vue';
import uniNavBar from '@/common/uni-nav-bar/uni-nav-bar.vue';
import uniPopup from '@/common/uni-popup/uni-popup.vue';
export default {
	data() {
		return {
			webViewStyle: {
				progress: {
					color: '#FE715E'
				}
			},
			url: '',
			mFabMenus: [
				{
					text: '分享'
				},
				{
					text: '收藏'
				}
			],
			mFabStyle: {}
		};
	},
	methods: {
		openPopup(){
			this.$refs.popup.open()
		}
	},
	components: {
		uniFab,
		uniNavBar,
		uniPopup
	},
	onLoad(bundler) {
		this.url = bundler.url;
	}
};
</script>

<style></style>
