class Solution {
	public String decodeString(String s) {
		char[] arr = s.toCharArray();
		Stack<String> stack = new Stack<>();

		for(int i = 0; i < arr.length; i++){
			if(arr[i] != ']') stack.push(String.valueOf(arr[i]));
			else{
				StringBuilder sb = new StringBuilder();
				while(stack.size() > 0 && !stack.peek().equals("[")){
					sb.append(stack.pop());
				}

				if(stack.size() > 0 && stack.peek().equals("[")) {
					stack.pop();
					StringBuilder num = new StringBuilder();
					while(stack.size() > 0 && isNum(stack.peek())){
						num.append(stack.pop());
					}
					int k = Integer.parseInt(num.reverse().toString());
					stack.push(sb.toString().repeat(k));
				}
				else stack.push(sb.reverse().toString());
			}
		}

		StringBuilder ans = new StringBuilder();
		while(stack.size() > 0){
			ans.append(stack.pop());
		}
		return ans.reverse().toString();
	}

	public boolean isNum(String k){
		String[] nums = {"1","2","3","4","5","6","7","8","9","0"};
		for(String num : nums){
			if(k.equals(num)) return true;
		}
		return false;
	}
}