<template>
	<view>
		<view class="list-item">
			<image class="list-item-image" :src="data.envelopePic"></image>
			<view class="list-item-body">
				<text class="list-item-title" style="font-size: 28upx;">{{ data.title }}</text>
				<view class="list-item-info">
					<text class="list-item-info-author">{{ data.author }}</text>
					<text class="list-item-info-date">{{ data.niceDate }}</text>
					<!-- #ifndef APP-NVUE -->
					<image class="image-collect" @click.stop="changeCollect()" :class="[data.collect ? '' : 'image']" src="../../static/icon_collect_s.png"></image>
					<image class="image-collect" @click.stop="changeCollect()" :class="[data.collect ? 'image' : '']" src="../../static/icon_collect.png"></image>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="list-item-divider"></view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: function(e) {
				return {};
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		changeCollect() {
			this.$emit('clickCollect');
		}
	}
};
</script>

<style>
.list-item {
	flex-direction: row;
	display: flex;
	flex: 1;
	position: relative;
	margin: 20rpx;
	height: 160upx;
}
.list-item-image {
	width: 90upx;
	height: 160upx;
}
.list-item-body {
	display: flex;
	padding: 20upx;
	width: 100%;
	flex-direction: column;
	height: 160upx;
	flex: 1;
}
.list-item-title {
	font-size: 28upx;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	min-height: 100upx;
	overflow: hidden;
}
.image-collect {
	width: 48upx;
	height: 48upx;
}
.image {
	display: none;
}
.list-item-info {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	position: absolute;
	width: 620upx;
	bottom: 20rpx;
	padding-right: 20upx;
}
.list-item-info-author {
	font-size: 24upx;
}
.list-item-info-date {
	font-size: 24upx;
}
</style>
