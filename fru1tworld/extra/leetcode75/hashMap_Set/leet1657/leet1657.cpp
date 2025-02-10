class Solution {
public:
    bool closeStrings(string word1, string word2) {
        map<int, int> mp1, mp2;
        vector<int> cnt1, cnt2; 
        vector<bool> check1(26), check2(26);
        for(auto x : word1){
            int alphabet = x - 'a';
            mp1[alphabet]++;
            check1[alphabet] = true; 
        } 
        for(auto x : word2){
            int alphabet = x - 'a';
            mp2[alphabet]++;
            check2[alphabet] = true; 
        }

        for(int i=0; i<26; i++){
            if(check1[i] != check2[i]) return false; 
        }

        for(auto x : mp1) cnt1.push_back(x.second);
        for(auto x : mp2) cnt2.push_back(x.second);
        sort(cnt1.begin(), cnt1.end());
        sort(cnt2.begin(), cnt2.end());
        if(cnt1.size() != cnt2.size()) return false; 

        for(int i=0; i<cnt1.size(); i++){
            if(cnt1[i] != cnt2[i]) return false; 
        }
        


        return true; 
    }
};