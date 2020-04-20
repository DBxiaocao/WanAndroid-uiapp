<template>
	<view>
		<view class="list-item-body">
			<view class="list-item-title-view">
				<text class="list-item-title">{{item.title}}</text>
				<image class="image-collect" @click.stop="changeCollect()" :class="[item.collect?'':'image']" src="../../static/icon_collect_s.png"></image>
				<image class="image-collect" @click.stop="changeCollect()" :class="[item.collect?'image':'']" src="../../static/icon_collect.png"></image>
			</view>
			<view class="list-item-info">
				<text class="list-item-sort">{{item.superChapterName}}</text>
				<text>{{item.author?item.author:''}}</text>
				<text>{{item.niceDate}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props:{
			item:{
				type:Object
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeCollect() {
				this.$emit("clickCollect");
			}
		},
		onLoad() {
			console.log(this.item.collect+".........")
		}
	}
</script>

<style>
.list-item-body{
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 20upx;
	background-color: #FFFFFF;
}
.list-item-title-view{
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
}
.list-item-title{
	min-height: 80rpx;
	font-size: 28upx;
	width: calc(100% - 58upx);
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.image-collect{
	width: 48upx;
	height: 48upx;
}
.image{
	display: none;
}
.list-item-info{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20rpx;
	font-size: 24upx;
}
.list-item-sort{
	padding-left: 20rpx;
	padding-right: 20rpx;
	padding-top: 2rpx;
	padding-bottom: 2rpx;
	border-radius: 20rpx;
	border-style: solid;
	border-width: 1rpx;
	border-color: #2C405A;
	text-align: center;
}
</style>
