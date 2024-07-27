import sys
input=sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    stocks = list(map(int, input().split()))
    totalStockPrice = 0
    maxStockPrice = 0

    for i in range(len(stocks)-1, -1, -1):
        if stocks[i] > maxStockPrice:
            maxStockPrice = stocks[i]
        else:
            totalStockPrice += maxStockPrice - stocks[i]

    print(totalStockPrice)