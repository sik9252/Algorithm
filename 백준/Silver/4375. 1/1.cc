#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

int N;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    while (scanf("%d", &N) != EOF) {
        int cnt = 1, result = 1;

        while (true) {
            if (cnt % N == 0) {
                printf("%d\n", result);
                break;
            }
            else
            {
                cnt = cnt * 10 + 1;
                cnt %= N;
                result++;
            }
        }
    }

    return 0;
};