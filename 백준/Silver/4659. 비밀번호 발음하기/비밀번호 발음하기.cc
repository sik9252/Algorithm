#include <bits/stdc++.h>

using namespace std;
string pw;

bool checkVowel(int c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    while (true) {
        cin >> pw;

        if (pw == "end") {
            break;
        }

        bool includeV = false;
        int vcount = 0;
        int ccount = 0;
        int prevLetter = -1;
        bool success = true;

        for (int i = 0; i < pw.size(); i++) {
            if (checkVowel(pw[i])) {
                vcount++;
                ccount = 0;
                includeV = true;
            } else {
                ccount++;
                vcount = 0;
            }

            if (vcount == 3 || ccount == 3) {
                success = false;
            }

            if (i >= 1 && pw[i] == prevLetter && pw[i] != 'e' && pw[i] != 'o') {
                success = false;
            }

            prevLetter = pw[i];
        }

        if (!includeV) {
            success = false;
        }

        if (success) {
            cout << "<" << pw << ">" << " " << "is acceptable." << "\n";
        } else {
            cout << "<" << pw << ">" << " " << "is not acceptable." << "\n";
        }
    }

    return 0;
};

