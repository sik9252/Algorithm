#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

ll a, b, c;

ll calc(ll a, ll b) {
    if ( b == 1 ) {
        return a % c;
    }

    // 짝수
    ll result = calc(a, b / 2);
    result = (result * result) % c;

    // 홀수
    if (b % 2 == 1) {
        result = (result * a) % c;
    }

    return result;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> a >> b >> c;
    cout << calc(a, b) << "\n";

    return 0;
};