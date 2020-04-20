<template>
	<view>
		<view class="app-main">
			<image src="../../static/user_bg.png" mode="aspectFill" class="user-head-image"></image>
			<view class="user-name" :class="[isLogin ? '' : 'btn-login']">
				<text>欢迎您</text>
				<text>{{ nickname ? nickname : '' }}</text>
			</view>
			<view @click="login()" :class="[isLogin ? 'btn-login' : '']">登录</view>
			<view @click="jumpToCollcotion()">我的收藏</view>
			<view @click="jumpToAbout()">关于我们</view>
			<view @click="logout()" :class="[isLogin ? '' : 'btn-login']">退出登录</view>
		</view>
	</view>
</template>

<script>
import common from '../../common/common.js';
var _this;
export default {
	data() {
		return {
			isLogin: false,
			nickname: ''
		};
	},
	methods: {
		login() {
			uni.navigateTo({
				url: './login/login'
			});
		},
		jumpToCollcotion() {
			let info = this.$store.state.login;
			if (info.length == 0) {
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
				uni.navigateTo({
					url: './collect/collect'
				});
			}
		},
		jumpToAbout() {
			uni.navigateTo({
				url: './about/about'
			});
		},
		logout() {
			uni.showModal({
				title: '系统提示',
				content: '是否需要退出登录？',
				success: res => {
					if (res.confirm) {
						uni.setStorageSync(common.user_login, '');
						this.isLogin = false;
						this.nickname = null;
						this.$store.state.login = '';
					} else if (res.cancel) {
					}
				}
			});
		}
	},
	onLoad() {},
	onShow() {
		let info = this.$store.state.login;
		console.log(info);
		if (info.length > 0) {
			this.isLogin = true;
			this.nickname = JSON.parse(info).nickname;
		}
	}
};
</script>

<style>
.app-main {
	flex-direction: column;
	flex: 1;
	display: flex;
}

.user-head-image {
	width: 100%;
	height: 400upx;
}
.user-name {
	flex-direction: row;
	justify-content: space-between;
	display: flex;
}
.app-main view {
	padding: 20upx;
	background-color: #ffffff;
	margin-top: 10upx;
	font-size: 30upx;
}
.btn-login {
	/* visibility: hidden; */
	display: none;
}
</style>
