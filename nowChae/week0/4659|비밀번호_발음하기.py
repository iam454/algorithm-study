import sys
input = sys.stdin.readline

def password(word):
    condi1, condi2, condi3 = False, True, True
    vowels = 'aeiou'

    for w in word:
        if w in vowels:
            condi1 = True
    
    for i in range(len(word)-2):
        if word[i] in vowels and word[i+1] in vowels and word[i+2] in vowels:
            condi2 = False
        elif word[i] not in vowels and word[i+1] not in vowels and word[i+2] not in vowels:
            condi2 = False

    for i in range(len(word)-1):
        if word[i] == word[i+1]:
            if word[i] == "e" or word[i] =="o":
                continue
            else:
                condi3 = False

    result =condi1 and condi2 and condi3
    return result

while True:
    word = input().strip()

    if word == "end":
        break

    if password(word):
        print("<"+word+"> is acceptable.")
    else:
         print("<"+word+"> is not acceptable.")
