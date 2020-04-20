<template>
	<view>
		<!-- <uni-nav-bar :statusBar="true" :fixed="true" :shadow="false" title="分类" rightText="搜索"/> -->
		
		<view class="list">
			<view  v-for="(item,index) in sorts" :key="index">
				<view class="list-item">
					<view class="list-item-title">{{item.name}}</view>
					<view class="list-item-content">
						<text v-for="(subitem,index) in item.children" :key="index" @click="jumpUrl(subitem)">
							{{subitem.name}}
						</text>
					</view>
				</view>
				<view class="list-item-divider"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/common/uni-nav-bar/uni-nav-bar.vue";
	export default {
		data() {
			return {
				sorts:[]
			}
		},
		components:{
			uniNavBar
		},
		methods: {
			getSorts(){
				uni.request({
					url:"https://www.wanandroid.com/tree/json",
					success: (res) => {
						this.sorts=res.data.data
					}
				})
			},
			jumpUrl(item){
				console.log(".....")
				uni.navigateTo({
					url:"../sort/sort_list?cid="+item.id+"&title="+item.name
				})
			}
		},
		onLoad() {
			this.getSorts();
		}
	}
</script>

<style>
@import url("./sort_page.css");
</style>
