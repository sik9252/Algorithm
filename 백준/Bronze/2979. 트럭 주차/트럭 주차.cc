#include <bits/stdc++.h>

using namespace std;

int A, B, C, a, b, cnt[104], total;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> A >> B >> C;

    for (int i = 0; i < 3; i++) {
        cin >> a >> b;

        for (int j = a; j < b; j++) {
            cnt[j]++;
        }
    }

    for (int c : cnt) {
        if (c == 1) {
            total += A * 1;
        } else if (c == 2) {
            total += B * 2;
        } else if (c == 3) {
            total += C * 3;
        }
    }

    cout << total;

    return 0;
};