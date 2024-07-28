import sys
input=sys.stdin.readline

n, m = map(int, input().split())
cards = sorted(list(map(int, input().split())))

for _ in range(m):
    a, b = cards[0], cards[1]
    cards[0], cards[1] = a+b, a+b
    cards = sorted(cards)

print(sum(cards))