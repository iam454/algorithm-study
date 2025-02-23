class Solution:
    def decodeString(self, s: str) -> str:
        num = 0
        stack = []
        cur_string = ''

        for c in s:
            if c.isdigit():
                num = num*10 + int(c)
            elif c == '[':
                stack.append((num, cur_string))
                num = 0
                cur_string = ''

            elif c == ']':
                tmp_num, last_word = stack.pop()
                cur_string = last_word + cur_string * tmp_num

            else:
                cur_string += c
            print(stack)
        
        return cur_string