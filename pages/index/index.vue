<template>
	<view>
		<mine    v-if="PageCur==='mine'"></mine>
		<message v-if="PageCur==='message'"></message>
		<friends v-if="PageCur==='friends'"></friends>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="message">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/msg' + [PageCur==='message'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur==='message'?'text-green':'text-gray'">信息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="friends">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/friend' + [PageCur === 'friends'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur==='friends'?'text-green':'text-gray'">好友</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mine' + [PageCur === 'mine'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur==='mine'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'message'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
