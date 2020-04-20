<template>
	<view>
		<image src="../../../static/user_bg.png" class="user-head-image" mode="aspectFill"></image>
		<input class="input-view" v-model="username"  type="text" placeholder="请输入账号" maxlength="11" />
		<input class="input-view" v-model="password" type="text" password="true" placeholder="请输入密码" maxlength="16"/>
		<input class="input-view" v-model="repassword" type="text" password="true" placeholder="确认密码" maxlength="16"/>
		
		<view class="view-register">
			<text class="text-none">已有账号?</text>
			<text class="text-register" @click="jumpUrl()">立即登录</text>
		</view>
		
		<button class="btn-register" @click="register()" form-type="submit">注册</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:"",
				repassword:""
			}
		},
		methods: {
			jumpUrl(){
				uni.navigateBack({
					delta:1
				})
			},
			register(){
				if(this.username.length==0){
					this.showMessage("请输入用户名")
					return
				}
				if(this.password.length==0 || this.repassword.length==0){
					this.showMessage("请输入密码")
					return
				}
				if(this.password!=this.repassword){
					this.showMessage("两次密码不相同，请重新输入")
					return
				}
				uni.request({
					url:'https://www.wanandroid.com/user/register',
					method:'POST',
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					dataType:"json",
					data:{
						username:this.username,
						password:this.password,
						repassword:this.repassword
					},
					success: (res) => {
						if(res.data.errorCode==-1){
							this.showMessage(res.data.errorMsg)
						}else{
							uni.showModal({
								title:'系统提示',
								content:'注册成功，是否立即登录？',
								success: (dialog) => {
									if(dialog.confirm){
										this.jumpUrl()
										// uni.setStorage({
										// 	key:'user_login',
										// 	data:JSON.stringify(res.data.data)
										// })
									}else if(dialog.cancel){
										this.showMessage("那就下次登录吧！")
									}
								}
							})
						}
						console.log(res)
					},
					fail: (error) => {
						this.showMessage(error.errMsg)
					}
				})
			},
			showMessage(title){
				uni.showToast({
					title:title,
					duration:2000,
					icon:'none'
				})
			}
		}
	}
</script>

<style>
.user-head-image{
	width: 100%;
	height: 400upx;
}
.input-view{
	display: flex;
	margin: 20upx;
	height: 48upx;
	padding: 20upx;
	background-color: #FFFFFF;
}
.view-register{
	flex-direction: row;
	flex: 1;
	margin-right: 20upx;
	text-align: right;
}
.text-none{
	color: #555555;
	font-size: 26upx;
}
.text-register{
	color: #FE715E;
	font-size: 26upx;
}
.btn-register{
	margin-left: 20upx;
	margin-right: 20upx;
	margin-top: 40upx;
	font-size: 30upx;
}
</style>
