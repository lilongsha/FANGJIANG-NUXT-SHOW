/** 等额本息
 * @param {Object} param1 贷款金额
 * @param {Object} param2 贷款月数
 * @param {Object} param3 贷款年利率
 */
const dengEBenXi = function(param1, param2, param3){
	// 月利率
	const param4 = param3 / 12;
	// 每月月供额
	const param5 = ((param1 * param4 * (1 + param4) ** param2 ) / ((1 + param4) ** param2 - 1)).toFixed(2)
	// 每月应还本金数组
	const param6 = []
	for(let i = 1; i <= param2; i++){
		// 每月应还本金
		const t = ((param1 * param4 * (1 + param4) ** (i - 1)) / ((1 + param4) ** param2 - 1)).toFixed(2)
		param6.push(t)
	}
	// 总利息
	const param7 = param2 * param5 - param1;
	
	return {
		param5,
		param6,
		param7
	}
}

/**
 * @param {Object} param1 贷款金额
 * @param {Object} param2 贷款月数
 * @param {Object} param3 贷款年利率
 */
const dengEBenJin = function(param1, param2, param3){
	// 月利率
	const param4 = param3 / 12.0;
	// 首月还本付息金额
	const param5 = param1 / param2 + (param1 * param4);
	// 每月递减利息
	const param6 = ((param1 / param2) * param4).toFixed(2);
	// 每月利息
	const param7 = [];
	// 总利息
	let param8 = 0.0;
	for(let i = 0; i < param2; i++){
		const t = (param1 - (param1 / param2) * i) * param4;
		param7.push(t);
		param8 = param8 + t;
	}
	
	return {
		param5,
		param6,
		param7,
		param8
	}
}
export default{
	dengEBenXi,
	dengEBenJin
}
