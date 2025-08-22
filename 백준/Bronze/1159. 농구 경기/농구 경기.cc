#include <bits/stdc++.h>

using namespace std;

int N, a[26];
string name, result;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> N;

    for (int i = 0; i < N; i++) {
        cin >> name;
        a[name[0] - 'a']++;
    }

    for (int i = 0; i < 26; i++) {

        if (a[i] >= 5) {
            result += i + 'a';
        }
    }

    if (result != "") {
        cout << result << "\n";
    } else {
        cout << "PREDAJA" << "\n";
    }

    return 0;
};