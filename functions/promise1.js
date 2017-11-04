function promise1(file) {
	return new Promise(function(resolve, reject){
		// fakeAjax(file, function(data){
		// 	resolve(data)
		// });
		resolve('promise resolved')
	});
}