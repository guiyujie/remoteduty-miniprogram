<template>
	<view>
		<sl-filter :themeColor="themeColor" :topFixed="true" :menuList="menuList" ></sl-filter>
		<NAUIcard listData="detail"></NAUIcard>
	</view>
</template>

<script>
	
//过滤检索
import slFilter from '@/components/sl-filter/sl-filter.vue';
//卡片
import NAUIcard from '@/components/NAUI-card/NAUI-card.vue'

export default {
	components: {
		slFilter,
		NAUIcard
	},

	data() {
		return {
			themeColor: '#000000',
			filterResult: '',
			menuList: [
				{
					title: '菜单1',
					detailTitle: '子标题1',
					isMutiple: true,
					key: 'key_1',
					detailList: [
						{
							title: '不限',
							value: ''
						},
						{
							title: '条件_1_1',
							value: 'val_1_1'
						},
						{
							title: '条件1_2',
							value: 'val_1_2'
						}
					]
				},
				{
					title: '菜单2',
					detailTitle: '子标题2',
					key: 'key_2',
					isMutiple: false,
					detailList: [
						{
							title: '不限',
							value: ''
						},
						{
							title: '条件_2_1',
							value: 'val_2_1'
						},
						{
							title: '条件_2_2',
							value: 'val_2_2'
						}
					]
				},
				{
					title: '菜单3',
					detailTitle: '子标题3',
					key: 'key_3',
					isSort: true,
					isMutiple: false,
					detailList: [
						{
							title: '条件_3_1',
							value: 'val_3_1'
						},
						{
							title: '条件_3_2',
							value: 'val_3_2'
						},
						{
							title: '条件_3_3',
							value: 'val_3_3'
						}
					]
				}
			],
			detail: {
		        "id": "12",
		        "content": "卡片文字内容",
		        "user_name": "南审空间",
		        "mark":true,
		        "type": "表白墙",
		        "points": "0",
		        "show_times": "0",
		        "anony": false,
		        "avatarurl": "http://img.nauzone.cn/favicon11.png"
		    },
		};
	},
	created(){
		/*
		uniCloud.callFunction({
		    name: 'test',
		    data: { a: 1 }
		  })
		  .then(res => {
			  console.log(res);
		  });
		*/
	},
};
</script>

<style lang="scss"></style>
