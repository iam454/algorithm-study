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
    int dfs(TreeNode *now, int mx){
        bool check = false;
        int value = now -> val;
        if(mx <= value) check = true;
        int ans = check; 
        if(now -> left) ans += dfs(now -> left, max(mx, value));
        if(now -> right) ans += dfs(now -> right, max(mx, value));
        return ans; 
    }
    int goodNodes(TreeNode* root) {
        return dfs(root, -12345);

    }
};