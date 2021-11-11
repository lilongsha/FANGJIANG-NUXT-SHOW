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
		mounted(){
			// #ifdef H5
			uni.setNavigationBarTitle({
				title:"房匠|贷款计算结果"
			})
			// #endif
		},
		onLoad(option) {
			this.param1 = parseFloat(option.param1) * 10000;
			this.param2 = parseFloat(option.param2);
			this.param3 = parseFloat(option.param3) / 100.00;
			this.param4 = option.param4 || '';
			this.param5 = parseFloat(option.param5) * 10000;
			this.param6 = parseFloat(option.param6);
			this.param7 = parseFloat(option.param7) / 100.00;
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




