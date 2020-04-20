<template>
	<view>
		<view class="list-item" v-for="(item,index) in mItems" :key="index" @click="jumpUrl(item.link)">
			<article-item :item="item" @clickCollect="updateCollect(item)"></article-item>
			<view class="list-item-divider"></view>
		</view>
		<uni-load-more :status="status" :iconSize="16" :contentText="loading_text"></uni-load-more>
	</view>
</template>

<script>
	var _this;
	import articleItem from '@/pages/home/article_item.vue';
	export default {
		data() {
			return {
				mItems: [],
				page: 0,
				cid: 0,
				status: 'more',
				loading_text: {
					loading_down: '上拉加载更多',
					loading_refresh: '加载中',
					loading_nomore: '没有更多'
				}
			}
		},
		methods: {
			getItems() {
				uni.request({
					url: "https://www.wanandroid.com/article/list/" + _this.page + "/json?cid=" + _this.cid,
					success: (res) => {
						if (_this.page == 0) {
							_this.mItems = res.data.data.datas
						} else {
							_this.mItems=_this.mItems.concat(res.data.data.datas)
						}
						_this.page = res.data.data.curPage
						uni.stopPullDownRefresh()
						console.log(res)
					}
				})
			},
			jumpUrl(url) {
				uni.navigateTo({
					url: '../article_detail/article_detail?url=' + url,
					animationType: 'slide-in-bottom'
				})
			},
			log: function(e) {
				console.log("调用了")
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
							method: 'GET',
							success() {
								res.collect = !res.collect;
							}
						});
					} else {
						uni.request({
							url: 'https://www.wanandroid.com/lg/collect/' + res.id + '/json',
							method: 'GET',
							success() {
								res.collect = !res.collect;
							}
						});
					}
				}
			}
		},
		onLoad(res) {
			_this = this;
			_this.cid = res.cid;
			uni.setNavigationBarTitle({
				title: res.title
			});
			_this.getItems();
		},
		onPullDownRefresh() {
			_this.page = 0;
			this.getItems();
		},
		onReachBottom() {
			_this.getItems();
		},
		components: {
			articleItem
		},
		onShow() {
			let info = uni.getStorageSync(common.user_login);
			this.$store.state.login = info;
		}
	}
</script>

<style>
</style>
