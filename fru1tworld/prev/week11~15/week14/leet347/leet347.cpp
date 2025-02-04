class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int>map;
        for(int i = 0;i<nums.size();i++){
            map[nums[i]]++;
        }
        priority_queue<pair<int,int>>pq;
        for(auto i:map){
            pq.push({i.second,i.first});
        }
        vector<int>ans;
        while(!pq.empty() && k>0){
            auto ele = pq.top();
            pq.pop();
            ans.push_back(ele.second);
            k--;
        }
        return ans;
    }
};