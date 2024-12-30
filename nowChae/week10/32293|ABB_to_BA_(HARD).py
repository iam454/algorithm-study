import sys
input = sys.stdin.readline

test = int(input())


def change(stack):
    if stack[-3:] == ['A', 'B', 'B']:
        stack.pop()
        stack.pop()
        stack.pop()
        stack.append('B')
        change(stack)
        stack.append('A')

for _ in range(test):
    length = int(input())
    word = list(map(str,input().strip()))
    
    stack = []

    for w in word: 
        stack.append(w)

        if len(stack) > 2:
            change(stack)
    print("".join(stack))


