import sys
input=sys.stdin.readline

def dfs(words, start, c_vowel, c_consonant):
    st = start + 1
    
    if len(password) == L:
        if c_vowel >= 1 and c_consonant >= 2:
            print(''.join(map(str, password)))
            return

    for i in range(st, C):
        password.append(words[i])
        if words[i] in ['a', 'e', 'i', 'o', 'u']:
            dfs(words, i, c_vowel+1, c_consonant)
        else:
            dfs(words, i, c_vowel, c_consonant+1)
        password.pop()

L, C = map(int, input().split())
words = sorted(list(map(str, input().split())))
password = []
c_vowel, c_consonant = 0, 0

dfs(words, -1, c_vowel, c_consonant)