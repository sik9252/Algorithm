import sys
input=sys.stdin.readline

S = input().rstrip()
current = S[0]
zero = 1 if current == '0' else 0
one = 1 if current == '1' else 0

for i in range(1, len(S)):
    if S[i] != current:
        if S[i] == '0':
            zero += 1
        else:
            one += 1
        current = S[i]

print(min(zero, one))