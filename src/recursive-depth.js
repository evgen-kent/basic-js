
  class DepthCalculator {
  calculateDepth(arr) {    
   return Array.isArray(arr) ?
    1 + Math.max(...arr.map(t => this.calculateDepth(t))) :
    0;
  }   
};

function calculateDepth(arr) {
  let rec = 1;
  for (let i = 0; i < arr.length; i++) {
    let res=1;
    if (Array.isArray(arr[i])) {
      
      res = res + calculateDepth(arr[i])


    }
    // console.log(res);
    rec = rec < res ? res : rec;
  }
  return rec;
}


const arr = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]];

const res = calculateDepth(arr);
console.log(res);
// function depth(array, rec) {
// if (!Array.isArray(array)) throw new Exception('not an array');

// var res = rec;
// for(var i = 0; i < array.length; ++i) {
//     if (Array.isArray(array[i])) {
//     var subDepth = depth(array[i], rec + 1);
//     if (subDepth > res) {
//         res = subDepth;
//     }
//   }
// }
// return res;
// }

// console.log(depth(arr, 1));

// // const arr = [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];
// const arr = [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];

// console.log(calculateDepth(arr));
// const Depth = new DepthCalculator();
// const r = Depth.calculateDepth(arr);
// console.log(r);