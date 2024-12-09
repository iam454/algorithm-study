class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int min1 = 0x3f3f3f3f; 
        int min2 = 0x3f3f3f3f;
        for(auto x : nums){
            if(x <= min1) min1 = x;
            else if(x <= min2) min2 = x; 
            else return true; 
        }   
        return false;
    }
};