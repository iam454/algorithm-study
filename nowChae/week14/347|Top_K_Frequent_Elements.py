class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        cnt = dict()

        for n in nums:
            if n not in cnt:
                cnt[n] = 1
            else:
                cnt[n] += 1
        
        sorted_cnt = sorted(cnt.items(), key=lambda x:x[1], reverse=True)
        
        result = []
        for i in range(k):
            result.append(sorted_cnt[i][0])

        return result