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
    ListNode* oddEvenList(ListNode* head) {
        if(head == NULL ) return NULL;

        ListNode *oddHead=NULL,*odd=NULL;
        ListNode *evenHead=NULL,*even=NULL;

        int cnt=0;
        while(head!=NULL){
            
            if((cnt)%2==0){
                if (evenHead==NULL){
                    evenHead=head;
                    even=head;
                }
                else{
                    even->next=head;
                    even=head;
                }
            }
            else{
                if (oddHead==NULL){
                    oddHead=head;
                    odd=head;
                }
                else{
                    odd->next=head;
                    odd=head;
                }                
            }
            head=head->next;
            cnt++;
        }
        even->next=oddHead;
        if(odd!=NULL)
            odd->next=NULL;
        return evenHead;   
    }
};