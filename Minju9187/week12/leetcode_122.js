var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const profit = prices[i + 1] - prices[i];
    if (profit > 0) {
      result += profit;
    }
  }
  return result;
};

// var maxProfit = function(prices) {
//     let result = 0;
//     let key = false;
//     let min = 0;
//     let max = 0;
//     for(let i = 0 ; i < prices.length-1;i++){
//         const profit = prices[i+1] - prices[i];
//         if(profit >= 0) {
//             if(!key){
//                 key = true;
//                 min = prices[i];
//                 max = prices[i+1];
//             }
//             else{
//                 max = prices[i+1];
//             }

//         }
//         else{
//             key = false;
//             result += max - min;
//             max = 0;
//             min = 0;
//         }
//     }
//     result += max - min;
//     return result;
// };
