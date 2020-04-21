<template>
	<view>
		<!-- <uni-nav-bar :statusBar="true" :fixed="true" :shadow="false" title="首页" rightText="搜索"/> -->
		<view class="banner">
			<swiper class="swiper-banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1500">
				<swiper-item class="swiper-banner-item" v-for="(item, index) in home_page_banner" :key="index" @click="jumpUrl(item.url)">
					<image :src="item.imagePath" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="list-item-divider"></view>

		<view class="list">
			<view class="list-item" v-for="(item, index) in home_page_list" :key="index" @click="jumpUrl(item.link)">
				<article-item :item="item" @clickCollect="updateCollect(item)"></article-item>
				<view class="list-item-divider"></view>
			</view>
		</view>
		<uni-load-more :status="status" :iconSize="16" :contentText="loading_text"></uni-load-more>
	</view>
</template>

<script>
import uniLoadMore from '@/common/uni-load-more/uni-load-more.vue';
import articleItem from '@/pages/home/article_item.vue';
import uniNavBar from '@/common/uni-nav-bar/uni-nav-bar.vue';
import common from '../../common/common.js';
export default {
	data() {
		return {
			home_page_banner: [],
			home_page_list: [],
			home_page_cur: 0,
			status: 'more',
			reload: false,
			loading_text: {
				loading_down: '上拉加载更多',
				loading_refresh: '加载中',
				loading_nomore: '没有更多'
			}
		};
	},
	methods: {
		getHomeBanner() {
			//获取banner
			var _banner = this;
			uni.request({
				url: 'https://www.wanandroid.com/banner/json',
				success: res => {
					_banner.home_page_banner = res.data.data;
				},
				fail: e => {
					console.error(e);
				}
			});
		},
		getHomeList() {
			//获取列表数据
			var _list = this;
			if (this.reload) {
				this.home_page_cur = 0;
			}
			uni.request({
				url: 'https://www.wanandroid.com/article/list/' + this.home_page_cur + '/json',
				success: res => {
					if (this.reload) {
						_list.home_page_list = res.data.data.datas;
					} else {
						_list.home_page_list = this.home_page_list.concat(res.data.data.datas);
					}
					_list.home_page_cur = res.data.data.curPage;
					uni.stopPullDownRefresh();
				},
				fail: e => {
					console.error(e);
				}
			});
		},
		getProjectTabs() {
			uni.request({
				url: 'https://www.wanandroid.com/project/tree/json',
				success: res => {
					uni.setStorage({
						key: 'project_tab',
						data: JSON.stringify(res.data.data)
					});
				}
			});
		},
		jumpUrl(url) {
			uni.navigateTo({
				url: '../article_detail/article_detail?url=' + url,
				animationType: 'slide-in-bottom'
			});
		},
		updateCollect(res) {
			let login = this.$store.state.login;
			if (login.length == 0) {
				uni.showModal({
					title:"提示",
					content:"您还未登录，请登录后重试～",
					success: (res) => {
						if(res.confirm){
							uni.navigateTo({
								url:'../user/login/login'
							})
						}
					}
				})
			} else {
				if (res.collect) {
					uni.request({
						url: 'https://www.wanandroid.com/lg/uncollect_originId/' + res.id + '/json',
						method: 'POST',
						success() {
							res.collect = !res.collect;
						}
					});
				} else {
					uni.request({
						url: 'https://www.wanandroid.com/lg/collect/' + res.id + '/json',
						method: 'POST',
						success() {
							res.collect = !res.collect;
						}
					});
				}
			}
		}
	},
	onPullDownRefresh() {
		this.reload = true;
		this.getHomeBanner();
		this.getHomeList();
	},
	onReachBottom() {
		this.reload = false;
		this.getHomeList();
	},
	onLoad() {
		this.getHomeBanner();
		this.getHomeList();
		this.getProjectTabs();
	},
	components: {
		articleItem,
		uniNavBar
	},
	onShow() {
		let info = uni.getStorageSync(common.user_login);
		this.$store.state.login = info;
	}
};
</script>

<style>
.banner {
	height: 300upx;
}

.swiper-banner {
	width: 100%;
	height: 300upx;
}

.swiper-banner-item {
	width: 100%;
	height: 300upx;
}

.list {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
}

.list-item {
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
</style>
