class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        result = ""
        
        def find(str1, str2):
            rst = str1
            while len(rst) > 0:
                if str2.replace(rst,"") == "" and str1.replace(rst,"") == "":
                    return rst
                rst = rst[:-1]
            return rst


        if len(str1) <= len(str2):
            result = find(str1, str2)
        else:
            result = find(str2, str1)
        return result
            