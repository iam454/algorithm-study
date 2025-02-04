class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        make_heap(nums.begin(),nums.end());
        if(k==1) return nums.front();
        k--;
        while(k--){
           pop_heap(nums.begin(),nums.end());
            nums.pop_back();
        }

        return nums.front();
    }
};