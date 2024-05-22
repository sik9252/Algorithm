import sys
input=sys.stdin.readline

a = [0] * 26
b = [0] * 26
diff = 0

fir = input().rstrip()
sec = input().rstrip()

for i in fir:
    a[ord(i) - 97] += 1

for j in sec:
    b[ord(j) - 97] += 1

for i in range(len(a)):
    diff += abs(a[i] - b[i])

print(diff)