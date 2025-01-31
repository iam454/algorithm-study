class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ''
        max_idx = max(len(word1), len(word2))

        for i in range(max_idx):
            if len(word1) > i:
                result += word1[i]
            if len(word2) > i:
                result += word2[i]
        
        return result