import sys
import heapq
input=sys.stdin.readline

n, m = map(int, input().split())

cards = list(map(int, input().split()))
heapq.heapify(cards)

for _ in range(m):
    card1 = heapq.heappop(cards)
    card2 = heapq.heappop(cards)

    heapq.heappush(cards, card1 + card2)
    heapq.heappush(cards, card1 + card2)

print(sum(cards))