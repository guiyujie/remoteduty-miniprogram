<template>
	<view>
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="text-center bg-white wuc-tab fixed"  select-class="text-blue" @change="tabChange"></wuc-tab>
		
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	
	export default {
		components: { WucTab },
		data() {
			return {
				tabList: [
				    { name: '选项卡一' },
				    { name: '选项卡二' },
				    { name: '选项卡三' },
				    { name: '选项卡四' },
				    { name: '选项卡五' },
				    { name: '选项卡六' },
				    { name: '选项卡七' },
				    { name: '选项卡八' }
				],
				TabCur: 0,
			};
		},
		methods: {
		    tabChange(index) {
		        this.TabCur = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
div,
scroll-view,
swiper {
	box-sizing: border-box;
}

.swiper {
    height: 140upx;
}

.cu-bar {
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100upx;
	justify-content: space-between;
}

.cu-bar .action {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	max-width: 100%;
  background-color: #ffffff;
}

.cu-bar .action:first-child {
	margin-left: 30upx;
	font-size: 30upx;
}

.solid,
.solid-bottom {
	position: relative;
}

.solid::after,
.solid-bottom::after{
	content: " ";
	width: 200%;
	height: 200%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: inherit;
	transform: scale(0.5);
	transform-origin: 0 0;
	pointer-events: none;
	box-sizing: border-box;
}

.solid::after {
	border: 1upx solid rgba(0, 0, 0, 0.1);
}

.solid-bottom::after {
	border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
}

.text-orange{
  color:#f37b1d
}
.text-black{
  color:#333333;
}
.bg-white{
    background-color: #ffffff;
}

.padding {
	padding: 30upx;
}

.margin {
	margin: 30upx;
}

.margin-top {
	margin-top: 30upx;
}
.text-center {
    text-align: center;
}
</style>
