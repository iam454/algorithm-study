/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void dfs(TreeNode* now, vector<int> &leaf){
        if(!(now-> left) && !(now-> right)){ 
            leaf.push_back(now -> val);  
        }else{
            if(now -> left) dfs(now -> left, leaf);
            if(now -> right) dfs(now -> right, leaf); 
        }
    }
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
         vector<int> leaf1, leaf2;
         dfs(root1, leaf1);
         dfs(root2, leaf2);

        int len1 = leaf1.size();
        int len2 = leaf2.size();
        if(len1 != len2 ) return false;
        for(int i=0; i<len1; i++){
            if(leaf1[i] != leaf2[i]) return false; 
        }
         return true;
    }
};