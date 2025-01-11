class Solution {
    public int solution(int storey) {
        int answer = 0;

        while(storey > 0){
            int val = storey % 10;
            if(val > 5) {
                storey += 10 - val;
                answer += 10 - val;
            } else if(val < 5) {
                storey -= val;
                answer += val;
            } else{
                int vval = (storey % 100) / 10;
                if(vval >= 5) {
                    storey += 10 - val;
                    answer += 10 - val;
                }else{
                    storey -= val;
                    answer += val;
                }
            }

            storey /= 10;
        }
        return answer;
    }
}