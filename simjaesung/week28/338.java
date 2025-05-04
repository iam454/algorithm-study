class Solution {
	public int[] countBits(int n) {
		int[] arr = new int[n + 1];
		for(int i = 0; i <=n; i++){
			arr[i] = cntOne(i);
		}
		return arr;
	}

	public int cntOne(int k){
		String binary = Integer.toBinaryString(k);
		return (int)binary.chars().filter(c -> c == '1').count();
	}
}