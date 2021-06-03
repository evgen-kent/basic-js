// const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
	let newArr;
	if (members.constructor === Array) {
		newArr = members;

		newArr = newArr.map(function (item, index, array) {
			if (typeof (item) === 'string') {
				return (item.slice(0, 1).toUpperCase());
			}
		});

	} else {
		return members = 'false';
	}


	return (newArr.sort().join(''));
};




// let arr = ['Bobby', 'Kevin', 'tere sa', null,1,1,'Betty', 'Lori', 'Joyce', 'Scott', 'Johnny', 'Cheryl', 'Ronald'];
// function createDreamTeam(members) {
// 	let newArr;
// 	if (members.constructor === Array) {
// 		newArr = members;
		
// 		newArr = newArr.map(function (item, index, array) {
// 			if (typeof (item) === 'string') {
// 				return(item.slice(0, 1).toUpperCase());
// 			}
// 		});
	
// 	} else {
// 		return false;
// 	}
	
	
// 	console.log(newArr.sort().join(''));
// }
// createDreamTeam(arr);
