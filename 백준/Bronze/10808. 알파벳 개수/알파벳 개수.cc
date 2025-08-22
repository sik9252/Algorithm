#include <bits/stdc++.h>

using namespace std;

int alpha[26];
string str;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    
    cin >> str;

    for (char a : str) {
        alpha[a - 'a']++;
    }

    for (int a : alpha) {
        cout << a << " ";
    }

    return 0;
};