import sys
input = sys.stdin.readline
import math

N = int(input())

def palindrome(number):
    number = str(number)

    for i in range(len(number)//2):
        if number[i] != number[len(number)-1-i]:
            return False
    return True

def prime(number):
    if number == 1:
        return False
    
    for i in range(2, int(math.sqrt(number))+ 1):
        if number % i == 0:
            return False
    return True

while True:
    if palindrome(N) and prime(N):
        print(N)
        break
    N += 1