/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverse(ListNode* head) {
        ListNode* temp = head;
        ListNode* prev = nullptr;
        
        while (temp != nullptr) {
            ListNode* curr = temp->next;  
            temp->next = prev;            
            prev = temp;                  
            temp = curr;                  
        }
        return prev;  
    }
    
    int pairSum(ListNode* head) {
        ListNode* temp = head;
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;    
            fast = fast->next->next;
        }
        
        ListNode* reversed = reverse(slow);
        
        int maxi = 0;
        while (reversed != nullptr) {
            maxi = max(maxi, reversed->val + temp->val);
            temp = temp->next;
            reversed = reversed->next;
        }
        
        return maxi;
    }
};