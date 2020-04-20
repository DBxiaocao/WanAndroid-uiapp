<template>
	<view class="ceshi-continar">
		<view class="menu">
			menu
		</view>
		<view class="h-box" id="h-box">
			<swiper class="swiper">
				<swiper-item class="swiper-item">
					<list >
						<cell>
							<view class="test-title">编译成功。前端运行日志，请另行在小程序开发工具的控制台查看</view>
						</cell>
					</list>
					<!-- <scroll-view class="scroll-v list" enableBackToTop="true" scroll-y>
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						a <br>a <br>a <br>a <br>a <br>a <br>a <br>a 
						
					</scroll-view> -->
					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
page {
	height: 100%;
}
scroll-view {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	-webkit-flex-basis: auto;
	flex-basis: auto;
	-webkit-box-align: stretch;
	-webkit-align-items: stretch;
	align-items: stretch;
	-webkit-align-content: flex-start;
	align-content: flex-start;
}

.ceshi-continar {
	height: 100%;
	display: flex;
	flex-direction: column;
	.menu {
		height: 100rpx;
		background: red;;
	}
	.h-box {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.swiper {
			flex: 1;
		}
		.swiper-item {
			height: 100%;
			display: flex;
			flex-direction: column;
			.scroll-v {
				flex: 1;
				/* #ifndef MP-ALIPAY */
				flex-direction: column;
				/* #endif */
				width: 750rpx;
			}
			.test-title{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 20upx;
				font-size: 24upx;
			}
			overflow-y: auto;
		}
	}
}
</style>
