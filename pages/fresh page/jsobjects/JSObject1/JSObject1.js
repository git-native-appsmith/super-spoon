export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return "foo r-ee" + appsmith.user.email
	},
	async myFun2 () {
		return manual_query.data
	}
}