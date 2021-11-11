<template>
	<div class="w-screen h-screen overflow-hidden overflow-y-auto">
		<!-- head -->
		<div class="head">
			<div class="items" :class="current === 0 ? 'on' : 'text-[#999]'" @click="changeCurrent(0)">
				<span class="">商业贷款</span>
				<div class=""></div>
			</div>
			<div class="items" :class="current === 1 ? 'on' : 'text-[#999]'" @click="changeCurrent(1)">
				<span>公积金贷款</span>
				<div class=""></div>
			</div>
			<div class="items" :class="current === 2 ? 'on' : 'text-[#999]'" @click="changeCurrent(2)">
				<span>组合贷款</span>
				<div class=""></div>
			</div>
		</div>
		<!-- body -->
		<div class="body">
			<div v-if="current === 0" class="items">
				<div class="item">
					<div class="left">计算方式</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type" type="radio" name="type" :value="0" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType(0)">按贷款总额</label >
						</div>
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type" type="radio" name="type" :value="1" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType(1)">按按揭成数</label >
						</div>
					</div>
				</div>
				<div v-if="type === 0" class="item">
					<div class="left">贷款总额</div>
					<div class="right">
						<input v-model="money" type="number" placeholder="请输入金额（单位：万）" />
						<label class="inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">房屋总价</div>
					<div class="right">
						<input v-model="houseMoney" type="number" placeholder="请输入房屋总价（单位：万）" />
						<label class="text-gray-300 inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">按揭成数</div>
					<div class="right">
						<input v-model="percent" maxlength="1" type="number" placeholder="请输入金额（单位：万）" />
						<label class="text-gray-300 inline-block whitespace-nowrap">成</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">按揭金额</div>
					<div class="right">
						<span>{{ percentMoney }}</span>
						<label class="text-gray-300 inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div class="item">
					<div class="left">贷款年限</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="year" style="width: 180px">
								<a-select-option v-for="index in years" :key="index">
									{{ `${index}年(${index * 12}期)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="left">利率方式</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type1" type="radio" name="type1" :value="0" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType1(0)">按旧版利率</label >
						</div>
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type1" type="radio" name="type1" :value="1" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType1(1)">按最新LPR</label >
						</div>
					</div>
				</div>
				<div v-if="type1 === 0" class="item">
					<div class="left">商贷利率</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="rate" style="width: 180px">
								<a-select-option v-for="(item,index) in rates" :key="index">
									{{ `旧版基准利率(${item}%)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">LPR</div>
					<div class="right">
						<input v-model="lpr"  type="number" placeholder="请输入" />
						<label class="text-gray-300 inline-block whitespace-nowrap">%</label >
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">基点</div>
					<div class="right">
						<input v-model="bp"  type="number" placeholder="请输入" />
						<label class="text-gray-300 inline-block whitespace-nowrap">BP(‰)</label >
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">商贷利率</div>
					<div class="right">
						<span>{{ lprBp }}</span>
					</div>
				</div>
			</div>
			<div v-if="current === 1" class="items">
				<div class="item">
					<div class="left">计算方式</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type" type="radio" name="type" :value="0" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType(0)">按贷款总额</label >
						</div>
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type" type="radio" name="type" :value="1" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType(1)">按按揭成数</label >
						</div>
					</div>
				</div>
				<div v-if="type === 0" class="item">
					<div class="left">贷款总额</div>
					<div class="right">
						<input v-model="money" type="number" placeholder="请输入金额（单位：万）" />
						<label class="inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">房屋总价</div>
					<div class="right">
						<input v-model="houseMoney" type="number" placeholder="请输入房屋总价（单位：万）" />
						<label class="text-gray-300 inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">按揭成数</div>
					<div class="right">
						<input v-model="percent" maxlength="1" type="number" placeholder="请输入金额（单位：万）" />
						<label class="text-gray-300 inline-block whitespace-nowrap">成</label >
					</div>
				</div>
				<div v-if="type !== 0" class="item">
					<div class="left">按揭金额</div>
					<div class="right">
						<span>{{ percentMoney }}</span>
						<label class="text-gray-300 inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div class="item">
					<div class="left">贷款年限</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="year" style="width: 180px">
								<a-select-option v-for="index in years" :key="index">
									{{ `${index}年(${index * 12}期)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="left">公积金利率</div>
					<div class="right">
						<span>最新基准利率（3.25%）</span>
					</div>
				</div>
			</div>
			<div v-if="current === 2" class="items">
				<div class="item">
					<div class="left">公积金贷款</div>
					<div class="right">
						<input v-model="money1" type="number" placeholder="请输入金额（单位：万）" />
						<label class="inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div class="item">
					<div class="left">公积金年限</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="year1" style="width: 180px">
								<a-select-option v-for="index in years" :key="index">
									{{ `${index}年(${index * 12}期)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="left">公积金利率</div>
					<div class="right">
						<span>最新基准利率（3.25%）</span>
					</div>
				</div>
				<div class="w-full h-1 bg-[#EDEDED]"></div>
				<div class="item">
					<div class="left">商贷金额</div>
					<div class="right">
						<input v-model="money2" type="number" placeholder="请输入金额（单位：万）" />
						<label class="inline-block whitespace-nowrap">万</label >
					</div>
				</div>
				<div class="item">
					<div class="left">贷款年限</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="year2" style="width: 180px">
								<a-select-option v-for="index in years" :key="index">
									{{ `${index}年(${index * 12}期)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="left">利率方式</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type1" type="radio" name="type1" :value="0" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType1(0)">按旧版利率</label >
						</div>
						<div class="flex flex-row items-center whitespace-nowrap">
							<input v-model="type1" type="radio" name="type1" :value="1" class="w-3 h-4 mr-1" />
							<label class="inline-block whitespace-nowrap" @click="changeType1(1)">按最新LPR</label >
						</div>
					</div>
				</div>
				<div v-if="type1 === 0" class="item">
					<div class="left">商贷利率</div>
					<div class="right">
						<div class="flex flex-row items-center whitespace-nowrap">
							<a-select v-model="rate1" style="width: 180px">
								<a-select-option v-for="(item,index) in rates" :key="index">
									{{ `旧版基准利率(${item}%)` }}
								</a-select-option>
							</a-select>
						</div>
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">LPR</div>
					<div class="right">
						<input v-model="lpr"  type="number" placeholder="请输入" />
						<label class="text-gray-300 inline-block whitespace-nowrap">%</label >
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">基点</div>
					<div class="right">
						<input v-model="bp"  type="number" placeholder="请输入" />
						<label class="text-gray-300 inline-block whitespace-nowrap">BP(‰)</label >
					</div>
				</div>
				<div v-if="type1 !== 0" class="item">
					<div class="left">商贷利率</div>
					<div class="right">
						<span>{{ lprBp }}</span>
					</div>
				</div>
			</div>
			<div class="w-full px-2">
				<div class="mt-1 text-xs text-[#999]">以上为央行公布的贷款基准利率，结果仅供参考</div>
				<div class="w-full "></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			const years = []
			const rates = [4.165, 4.41, 4.655, 4.9, 5.39, 5.88, 6.37]
			for(let i = 1; i <= 30; i ++){
				years.push(i);
			}
			return {
				indicatorStyle: 'height: 80px;width: 750px;',
				current: 0,
				type: 0, // 贷款计算方式
				type1: 0, // 利率方式
				years,
				money: null,	// 贷款金额
				money1: null,	// 组合贷款公积金
				money2: null,	// 组合贷款商贷款
				houseMoney: null,	// 房屋总价
				year: 30,
				year1: 30,
				year2: 30,
				percent: 3,		// 按揭成数
				rates,
				rate: 3, // 0: 4.9
				rate1: 3, //
				percentMoney: 0, // 按揭金额
				lpr: 4.65,
				bp: null,
			}
		},
		computed:{
			lprBp(){
				const lpr = parseFloat(this.lpr) || 0;
				const bp = parseFloat(this.bp) || 0;
				const t = (lpr + (bp / 100)).toFixed(2);
				return `${lpr}% + ${bp}‱ = ${t}%`;
			},
		},
		watch:{
			money(){
			},
			houseMoney(){
				if(this.houseMoney > 0 && this.percent > 0){
					this.percentMoney = this.houseMoney - (this.houseMoney * (this.percent / 10))
				}else{
					this.percentMoney = 0;
				}
			},
			percent(){
				if(this.percent > 10){
					// 按揭成数请输入小于10
				}
				if(this.houseMoney > 0 && this.percent > 0 && this.percent <= 10){
					this.percentMoney = this.houseMoney - (this.houseMoney * (this.percent / 10))
				}else{
					this.percentMoney = 0;
				}
			}
		},
		mounted(){
			
		},
		methods: {
			isNumber(n){
				if(n && !isNaN(parseInt(n)) && parseInt(n) > 0){
					return true
				}
				return false
			},
			isFloatNumber(n){
				if(n && !isNaN(parseFloat(n)) && parseFloat(n) > 0){
					return true
				}
				return false
			},
			// 计算
			calculator(){
				let param1 = 0;	// 贷款金额
				let param2 = 0; // 贷款月数
				let param3 = 0; // 贷款年利率
				// 商业贷款
				if(this.current === 0){
					// 
					if(this.type1 === 0){
						// 旧版
						param3 = this.rates[this.rate];
					}else{
						// LPR
						if(!this.isFloatNumber(this.lpr) || !this.isFloatNumber(this.bp)){
							uni.showToast({
								title:'请输入正确的基点或加点',
								icon:'none'
							})
							return ;
						}
						param3 = (parseFloat(this.lpr) + (parseFloat(this.bp) / 100)).toFixed(2);
					}
					param2 = this.year * 12;
					if(this.type === 0){
						// 校验总价贷款计算器
						if(!this.isNumber(this.money)){
							uni.showToast({
								title:'请输入正确的贷款金额',
								icon:'none'
							})
							return;
						}
						// 总价
						param1 = this.money;
					}else{
						// 校验按揭贷款计算器
						if(!this.isNumber(this.houseMoney) || !this.isNumber(this.percent)){
							uni.showToast({
								title:'请输入正确的贷款比例或贷款总额',
								icon:'none'
							})
							return;
						}
						// 按揭
						param1 = this.houseMoney - (this.houseMoney * this.percent / 10);					
					}
				}
				// 公积金贷款
				if(this.current === 1){
					param3 = 3.25;
					param2 = this.year * 12;
					if(this.type === 0){
						// 校验总价贷款计算器
						if(!this.isNumber(this.money)){
							uni.showToast({
								title:'请输入正确的贷款金额',
								icon:'none'
							})
							return;
						}
						// 总价
						param1 = this.money;
					}else{
						// 校验按揭贷款计算器
						if(!this.isNumber(this.houseMoney) || !this.isNumber(this.percent)){
							uni.showToast({
								title:'请输入正确的贷款比例或贷款总额',
								icon:'none'
							})
							return;
						}
						// 按揭
						param1 = this.houseMoney - (this.houseMoney * this.percent / 10);					
					}
				}
				// 组合贷款
				if(this.current === 2){
					const p1 = this.money1;	// 公积金总额
					const p2 = this.year1 * 12;	// 公积金贷款月数
					const p3 = 3.25;	// 公积金利率
					const p4 = this.money2;	// 商贷总额
					const p5 = this.year2 * 12;	// 商贷月数
					let p6 = 0;	// 商贷利率
					if(this.type1 === 0){
						p6 = this.rates[this.rate1];
					}else {
						p6 = (parseFloat(this.lpr) + (parseFloat(this.bp) / 100)).toFixed(2);
					}
					uni.navigateTo({
						url:`/mycomponents/calculator/result?param1=${p1}&param2=${p2}&param3=${p3}&param4=1&param5=${p4}&param6=${p5}&param7=${p6}`,
					})
					return ;
				}
				uni.navigateTo({
					url: `/mycomponents/calculator/result?param1=${param1}&param2=${param2}&param3=${param3}`
				})
			},
			showYearPopup2(){
				this.$refs.popup2.open()
			},
			showYearPopup3(){
				this.$refs.popup3.open()
			},
			changeRate(e){
				this.rate = e.detail.value[0]
			},
			showRates(){
				this.$refs.popup1.open()
			},
			showRates0(){
				this.$refs.popup0.open()
			},
			clear(){
				this.type = 0;
				this.type1 = 0;
				this.money = null;
				this.money1 = null;
				this.money2 = null;
				this.houseMoney = null;
				this.year = 30;
				this.year1 = 30;
				this.year2 = 30;
				this.percent = 3;
				this.rate = 3;
				this.lpr = null;
				this.bp = null;
			},
			showYearPopup(){
				this.$refs.popup.open()
			},
			changeType1(v) {
				if (this.type1 === v) {
					return;
				}
				this.type1 = 1 - this.type1;
			},
			changeType(v) {
				if (this.type === v) {
					return;
				}
				this.type = 1 - this.type;
			},
			changeCurrent(v) {
				this.current = v;
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
.on div{
	@apply w-1/2 h-[2px] bg-fjBlue-100;
}

.body {
	@apply w-full;
}
.body .items {
	@apply w-full;
}
.body .items .item {
	@apply w-full h-12 border-b flex flex-row items-center;
}
.item .left {
	@apply w-1/3 text-center text-base;
}
.item .right {
	@apply w-2/3 flex flex-row justify-between text-sm px-4;
}
</style>