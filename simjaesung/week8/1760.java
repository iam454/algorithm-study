class Solution {
    public int minimumSize(int[] nums, int maxOperations) {
        int l = 1;
        int r = 1;
        for(int num : nums) r = Math.max(r,num);

        int ans = r;

        while(l < r){
            int mid = (l + r) / 2;
            long cnt = 0;
            for(int num : nums){
                cnt += (num - 1) / mid;
            }
            if(cnt > maxOperations){
                l = mid + 1;
            }else{
                ans = mid;
                r = mid;
            }
        }
        return ans;
    }
}