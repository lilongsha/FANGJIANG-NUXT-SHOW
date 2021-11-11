<template>
	<div class="w-screen h-screen">
		<!-- title -->
		<div class="head">
			<div class="items" :class="type === 0 ? 'on' : 'text-black'" @click="checkType(0)">
				<span class="">等额本息</span>
				<div class=""></div>
			</div>
			<div class="items" :class="type !== 0 ? 'on' : 'text-black'" @click="checkType(1)">
				<span>等额本金</span>
				<div class=""></div>
			</div>
		</div>
		<div class="w-full h-[1px] bg-[#EDEDED]"></div>
		<div v-if="type === 0">
			<div class="w-full px-10 pt-4">
				<div class="info">
					<div class="first">
						<div class="top">月均还款（元）</div>
						<div class="bottom">{{getFixed2(info.param5)}}</div>
					</div>
					<div class="second">
						<div class="item">
							<div class="v1">贷款总额（万）</div>
							<div class="v2">{{((param1 || 0) + (param5 || 0)) / 10000}}</div>
						</div>
						<div class="line1"></div>
						<div class="item">
							<div class="v1">利息总额（万）</div>
							<div class="v2">{{(info.param7 / 10000).toFixed(2)}}</div>
						</div>
						<div class="line1"></div>
						<div class="item">
							<div class="v1">贷款年限(期)</div>
							<div class="v2">{{(param2 || 0) > (param6 || 0) ? param2 : param6}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-[#333] w-full px-2 mt-4 text-[12px] font-medium" >
				<div>等额本息还款方式：<span style="color: #015EEA;">每月还款金额不变（包括本金和利息）。</span></div>
				<div style="color: #666;">这样由于每月的还款额固定，可以有计划地控制家庭收入的支出，也便于每个家庭根据自己的收情况，确定还贷能力</div>
			</div>
			<div class="w-[90%] h-[1px] mx-[5%] mt-4 bg-[#EDEDED]"></div>
			<div class="hint">备注：以上结果仅供参考，具体金额以办理贷款的银行计算为准</div>
			<div v-if="param4 === ''" class="list_title">
				<div class="w">期数</div>
				<div class="w1">月供总额</div>
				<div class="w2">月供本金</div>
				<div class="w3">月供利息</div>
				<div class="w4">剩余本金</div>
			</div>
			<div v-if="param4 === ''" class="list">
				<div v-for="(item,index) in info.param6" :key="index" class="item">
					<div class="w">第{{index + 1}}期</div>
					<div class="w1">{{info.param5}}</div>
					<div class="w2">{{getFixed2(info.param5 - item)}}</div>
					<div class="w3">{{getFixed2(item)}}</div>
					<div class="w4">{{getFixed2(param1 - info.param5 + item)}}</div>
				</div>
			</div>
			<div v-if="param4 !== ''" class="list_title">
				<div class="w">期数</div>
				<div class="w1">月供总额</div>
				<div class="w2">商贷还款</div>
				<div class="w3">公积金还款</div>
			</div>
			<div v-if="param4 !== '' && info.param6 && info.param6.length > 0" class="list">
				<div v-for="(item,index) in info.param6" :key="index" class="item">
					<div class="w">第{{index + 1}}期</div>
					<div class="w1">{{ getPay(index) }}</div>
					<div v-if="index + 1 <= param6" class="w2">{{ monthPay2 }}</div>
					<div v-else class="w2">0</div>
					<div v-if="index + 1 <= param2" class="w3">{{ monthPay1 }}</div>
					 <div v-else class="w3">0</div>
				</div>
			</div>
		</div>
		<div v-if="type !== 0">
			<div class="w-full px-10 pt-4">
				<div class="info">
					<div class="first">
						<div class="top">首月还款（元）</div>
						<div class="bottom">{{getFixed2(info.param5)}}</div>
						<div class="dijian">每月递减约{{getFixed2(info.param6)}}元</div>
					</div>
					<div class="second">
						<div class="item">
							<div class="v1">贷款总额（万）</div>
							<div class="v2">{{(param1 + param5) / 10000}}</div>
						</div>
						<div class="line1"></div>
						<div class="item">
							<div class="v1">利息总额（万）</div>
							<div class="v2">{{(info.param8 / 10000).toFixed(2)}}</div>
						</div>
						<div class="line1"></div>
						<div class="item">
							<div class="v1">贷款年限(期)</div>
							<div class="v2">{{param2 > param6 ? param2 : param6}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-[#333] w-full px-2 mt-4 text-[12px] font-medium" >
				<div>等额本金还款方式：<span style="color: #015EEA;">每月还款金额递减{{ getFixed2(info.param6) }}元。</span></div>
				<div style="color: #666;">其中每月还款的本金不变，利息逐月减少。计算结果仅供参考。</div>
			</div>
			<div class="w-[90%] h-[1px] mx-[5%] mt-4 bg-[#EDEDED]"></div>
			<div class="hint">备注：以上结果仅供参考，具体金额以办理贷款的银行计算为准</div>
			<div v-if="param4 === ''" class="list_title">
				<div class="w">期数</div>
				<div class="w1">月供总额</div>
				<div class="w2">月供本金</div>
				<div class="w3">月供利息</div>
				<div class="w4">剩余本金</div>
			</div>
			<div v-if="param4 === '' && info.param7 && info.param7.length > 0" class="list">
				<div v-for="(item,index) in info.param7" :key="index" class="item">
					<div class="w">第{{index + 1}}期</div>
					<div class="w1">{{getFixed2(info.param5 - (index * info.param6))}}</div>
					<div class="w2">{{getFixed2(info.param5 - info.param7[0])}}</div>
					<div class="w3">{{getFixed2(item)}}</div>
					<div class="w4">{{getFixed2(param1 - ((info.param5 - info.param7[0]) * (index + 1)))}}</div>
				</div>
			</div>
			<div v-if="param4 !== ''" class="list_title">
				<div class="w">期数</div>
				<div class="w1">月供总额</div>
				<div class="w2">商贷还款</div>
				<div class="w3">公积金还款</div>
			</div>
			<div v-if="param4 !== '' && info.param7 && info.param7.length > 0" class="list">
				<div v-for="(item,index) in info.param7" :key="index" class="item">
					<div class="w">第{{index + 1}}期</div>
					<div class="w1">{{ getPay1(index) }}</div>
					<div v-if="index + 1 <= param6" class="w2">{{ getFixed2(monthPay2 - (index * dijian2)) }}</div>
					<div v-else class="w2">0</div>
					<div v-if="index + 1 <= param2" class="w3">{{ getFixed2(monthPay1 - (index * dijian1)) }}</div>
					<div v-else class="w3">0</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import calculator from '@/utils/calculator.js';
	export default {
		data() {
			return {
				type: 0,
				param1: 0,
				param2: 0,
				param3: 0,
				param4: '',	// 组合贷款
				param5: 0,
				param6: 0,
				param7: 0,
				info: {
					
				},
				monthPay1: 0,
				monthPay2: 0,
				dijian1: 0,
				dijian2: 0
			}
		},
		mounted() {
			const option = this.$route.query;
			this.param1 = parseFloat(option.param1 || 0) * 10000;
			this.param2 = parseFloat(option.param2 || 0);
			this.param3 = parseFloat(option.param3 || 0) / 100.00;
			this.param4 = option.param4 || '';
			this.param5 = parseFloat(option.param5 || 0) * 10000;
			this.param6 = parseFloat(option.param6 || 0);
			this.param7 = parseFloat(option.param7 || 0) / 100.00;
			this.getInfo();
		},
		methods: {
			getPay1(index){
				const t1 = index + 1 <= this.param2 ? (this.monthPay1 - (index * this.dijian1)) : 0;
				const t2 = index + 1 <= this.param6 ? (this.monthPay2 - (index * this.dijian2)) : 0;
				return (parseFloat(t1) + parseFloat(t2)).toFixed(2);
			},
			getPay(index){
				const t1 = index + 1 <= this.param2 ? this.monthPay1 : 0;
				const t2 = index + 1 <= this.param6 ? this.monthPay2 : 0;
				return (parseFloat(t1) + parseFloat(t2)).toFixed(2);
			},
			getFixed2(v){
				return parseFloat(v).toFixed(2)
			},
			getInfo(){
				this.info = {}
				if(this.param4 !== ''){
					if(this.type === 0){
						const t = calculator.dengEBenXi(this.param1, this.param2, this.param3);
						const t1 = calculator.dengEBenXi(this.param5, this.param6, this.param7);
						this.monthPay1 = t.param5;
						this.monthPay2 = t1.param5;
						t.param5 = (parseFloat(t.param5) + parseFloat(t1.param5)).toFixed(2);
						t.param7 = (parseFloat(t.param7) + parseFloat(t1.param7)).toFixed(2);
						// 组合贷款数据
						const tt = []
						if(t.param6.length > t1.param6.length){
							for(let i = 0; i< t.param6.length; i++){
								tt.push({t: t.param6[i], t1: t1.param6[i] || 0})
							}
						}else{
							for(let i = 0; i< t1.param6.length; i++){
								tt.push({t: t.param6[i] || 0, t1: t1.param6[i]})
							}
						}
						t.param6 = tt;
						Object.assign(this.info,{}, t)
					}else{
						const t = calculator.dengEBenJin(this.param1, this.param2, this.param3);
						const t1 = calculator.dengEBenJin(this.param5, this.param6, this.param7);
						this.monthPay1 = parseFloat(t.param5);
						this.monthPay2 = parseFloat(t1.param5);
						this.dijian1 = parseFloat(t.param6);
						this.dijian2 = parseFloat(t1.param6);
						t.param5 = (parseFloat(t.param5) + parseFloat(t1.param5)).toFixed(2);
						t.param6 = (parseFloat(t.param6) + parseFloat(t1.param6)).toFixed(2);
						t.param8 = (parseFloat(t.param8) + parseFloat(t1.param8)).toFixed(2);
						const tt = [];
						if(t.param7.length > t1.param7.length){
							for(let i = 0; i< t.param7.length; i++){
								tt.push({t: t.param7[i], t1: t1.param7[i] || 0})
							}
						}else{
							for(let i = 0; i< t1.param7.length; i++){
								tt.push({t: t.param7[i] || 0, t1: t1.param7[i]})
							}
						}
						t.param7 = tt;
						Object.assign(this.info,{}, t)
					}
				}else if(this.type === 0){
						const t = calculator.dengEBenXi(this.param1, this.param2, this.param3);
						Object.assign(this.info,{}, t)
					}else{
						const t = calculator.dengEBenJin(this.param1, this.param2, this.param3);
						Object.assign(this.info, {}, t);
					}
			},
			checkType(v){
				if(this.type !== v){
					this.type = v;
					this.getInfo();
				}
			}
		}
	}
</script>

<style scoped>
.head {
	@apply w-full h-16 flex flex-row justify-around px-2 border-b;
}
.head .items {
	@apply w-1/3 flex flex-col justify-center items-center;
}
.head .items span{
	@apply text-base font-bold;
}
.on{
	@apply text-fjBlue-100;
}

.info {
	@apply w-full bg-fjBlue-100 rounded-md text-white;
}

.info .first {
	@apply w-full text-center;
}

.info .first .top {
	@apply pt-4 text-xs font-medium;
}

.info .first .bottom {
	@apply pb-1 text-[24px] font-medium;
}

.second {
	@apply w-full pb-4 flex flex-row justify-between items-center font-medium;
}

.second .item {
	@apply w-1/3 flex flex-col justify-center text-center;
}

.second .v1 {
	@apply text-[12px];
}

.second .v2 {
	@apply text-[16px];
}
.hint {
	@apply w-full px-[5%] text-[12px] text-[#999] font-normal;
}

.list_title {
	@apply px-4 h-8 leading-8 flex flex-row justify-between text-[12px] font-medium text-[#333] mt-5 bg-[#DDD];
}

.list {
	@apply h-48 overflow-hidden overflow-y-auto;
}

.list .item {
	@apply px-4 h-8 leading-8 flex flex-row justify-between items-center text-[12px] text-[#666] bg-[#FFF];
}

.line1 {
	@apply w-[2px] h-4 bg-[#DDD];
}
</style>