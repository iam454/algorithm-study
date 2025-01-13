class Solution {
    public List<String> ans = new ArrayList<>();
    public int n;
    public char[] digitsArr;
    public String[] arr = {"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    public List<String> letterCombinations(String digits) {
        n = digits.length();
        if(n == 0) return ans;
        digitsArr = digits.toCharArray();
        go(0,new StringBuilder());
        return ans;
    }

    public void go(int depth, StringBuilder sb){
        if(depth == n){
            ans.add(sb.toString());
            return;
        }

        int digitsArrIdx =  Integer.parseInt(Character.toString(digitsArr[depth])) - 2;
        char[] tmpArr = arr[digitsArrIdx].toCharArray();
        for(int i = 0; i < tmpArr.length; i++){
            sb.append(tmpArr[i]);
            go(depth + 1, sb);
            sb.deleteCharAt(depth);
        }
    }
}