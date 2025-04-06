import sys
input = sys.stdin.readline

word = list(input().rstrip())

circle_word = word + word

answer = []
a_cnt = word.count('a')

for i in range(len(word)):
    b_cnt = circle_word[i:i+a_cnt].count('b')
    answer.append(b_cnt)

print(min(answer))
