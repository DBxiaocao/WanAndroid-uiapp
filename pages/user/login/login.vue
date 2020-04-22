<template>
	<view>
		<image src="../../../static/user_bg.png" class="user-head-image" mode="aspectFill"></image>
		<input class="input-view" v-model="username" type="text" placeholder="请输入账号" maxlength="11" />
		<input class="input-view" v-model="password" type="text" password="true" placeholder="请输入密码" maxlength="16" />

		<view class="view-register">
			<text class="text-none">没有账号?</text>
			<text class="text-register" @click="jumpUrl()">立即注册</text>
		</view>

		<button class="btn-login" form-type="submit" @click="login()">登录</button>
	</view>
</template>

<script>
import common from '../../../common/common.js';
var mThis;
export default {
	data() {
		return {
			username: '',
			password: ''
		};
	},
	methods: {
		jumpUrl() {
			uni.navigateTo({
				url: '../register/register'
			});
		},
		login() {
			if (this.username.length == 0) {
				this.showMessage('请输入账号');
				return;
			}
			if (this.password.length == 0) {
				this.showMessage('请输入密码');
				return;
			}
			uni.showLoading({
				complete() {
					uni.request({
						method: 'POST',
						data: {
							username: mThis.username,
							password: mThis.password
						},
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						},
						dataType: 'json',
						url: 'https://www.wanandroid.com/user/login',
						success: res => {
							console.log(res);
							if (res.data.data != null) {
								mThis.saveLoginInfo(res);
								mThis.onBackLastPage();
							} else {
								mThis.showMessage(res.data.errorMsg);
							}
						},
						fail: error => {
							console.error(error);
						},
						complete() {
							uni.hideLoading();
						}
					});
				}
			});
		},
		showMessage(title) {
			uni.showToast({
				title: title,
				icon: 'none',
				duration: 2000
			});
		},
		saveLoginInfo(res) {
			uni.setStorageSync(common.user_login, JSON.stringify(res.data.data));
			this.$store.state.login = JSON.stringify(res.data.data);
		},
		onBackLastPage() {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	onLoad() {
		mThis = this;
	}
};
</script>

<style>
.user-head-image {
	width: 100%;
	height: 400upx;
}
.input-view {
	display: flex;
	margin: 20upx;
	height: 48upx;
	padding: 20upx;
	background-color: #ffffff;
	border-radius: 10upx;
}
.view-register {
	flex-direction: row;
	flex: 1;
	margin-right: 20upx;
	text-align: right;
}
.text-none {
	color: #555555;
	font-size: 26upx;
}
.text-register {
	color: #fe715e;
	font-size: 26upx;
}
.btn-login {
	margin-left: 20upx;
	margin-right: 20upx;
	margin-top: 40upx;
	font-size: 30upx;
}
</style>
