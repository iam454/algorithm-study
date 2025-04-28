class Solution {
    public:
        int lastRemaining(int n) {
            int head=1;
            int step=1; 
            bool direction=true;
            while(n>1){
                if(direction) head += step; 
                else head += (n&1) == 0 ? 0 : step; 
                step*=2;
                n/=2;
                direction^=true;
            }
    
            return head;
        }
    };