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
    int dfs(TreeNode* now, int dir, int zig){
        int res = zig;
        int next = 0; 
        if(now -> left){
            if(dir == 1) next += zig; 
            res = max(res, dfs(now -> left, -1, next+1));
            if(dir == 1) next -= zig;
        }
        if(now -> right){
            if(dir == -1) next += zig; 
            res = max(res, dfs(now -> right, 1, next+1));
            if(dir == -1) next -= zig; 
        }
        return res; 
    }
    int longestZigZag(TreeNode* root) {
        return dfs(root, 0, 0); 
    }
};