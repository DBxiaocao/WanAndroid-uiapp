<template>
	<view>
		<view class="about-head">
			<view class="app-name">玩Android</view>
			<view class="app-version">v1.0</view>
		</view>

		<view class="about-help">介绍与帮助</view>

		<view style="flex-direction: column; padding: 20upx;">
			<view class="about-content">网站内容</view>
			<view class="about-content-1" style="margin-top: 20upx;">
				本网站每天新增20~30篇优质文章，并加入到现有分类中，力求整理出一份优质而又详尽的知识体系，闲暇时间不妨上来学习下知识；除此以外，并为大家提供平时开发过程中常用的工具以及常用的网址导航。
			</view>
			<view class="about-content-1">当然这只是我们目前的功能，未来我们将提供更多更加便捷的功能…</view>
			<view class="about-content-1">如果您有任何好的建议：</view>
			<view class="about-content-1">1,关于网站排版</view>
			<view class="about-content-1">2,关于新增常用网址以及工具</view>
			<view class="about-content-1">3,未来你希望增加的功能等</view>
			<view class="about-content-1">可以在 https://github.com/hongyangAndroid/xueandroid项目中以issue的形式提出，我将及时跟进。</view>
			<view class="about-content-1">如果您希望长期关注本站，可以加入我们的QQ群：</view>
			<view class="about-content-1" style="font-weight: bold;">591683946</view>
			<view class="about-content" style="margin-top: 20upx;">源码位置</view>
			<view class="about-content-1" style="margin-top: 20upx;">本软件开源，开源地址https://github.com/DBxiaocao/wanAndroid</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.about-head {
	background-color: #fe715e;
	width: 100%;
	height: 300upx;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
}
.app-name {
	color: #ffffff;
	font-size: 30upx;
}
.app-version {
	color: #ffffff;
	margin-top: 20upx;
	font-size: 28upx;
}
.about-help {
	margin: 20upx;
	font-size: 30upx;
}
.about-help-title {
	font-size: 38upx;
	font-weight: bold;
}
.about-content-1 {
	text-indent: 2em;
	font-size: 28upx;
	margin-top: 5upx;
}
</style>
