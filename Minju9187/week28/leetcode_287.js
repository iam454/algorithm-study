/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // solution1
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = nums[0];

  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;

  // solution2
  // let left = 0;
  // let right = nums.length -1;

  // while(left <= right){
  //     const mid = Math.floor((left + right) / 2);

  //     if(count(nums, mid) > mid){
  //         right = mid - 1;
  //     }else{
  //         left = mid + 1;
  //     }
  // }

  // return left;

  // function count(nums, pivot){
  //     return nums.filter((v)=>v <= pivot).length;
  // }

  // solution3
  // const max = Math.max(...nums);
  // const arr = new Array(max + 1).fill(false);

  // for(let i = 0 ; i < nums.length ; i++){
  //     if(arr[nums[i]]){
  //         return nums[i];
  //     }
  //     arr[nums[i]] = true;
  // }
};
