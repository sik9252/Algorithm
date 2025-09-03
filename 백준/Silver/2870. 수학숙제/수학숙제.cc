#include <bits/stdc++.h>

using namespace std;

int m;
string str, result;
vector<string> nums;

void processing() {
    while (true) {
        if (result.size() && result.front() == '0') {
            result.erase(result.begin());
        } else {
            break;
        }
    }

    if (result.size() == 0) {
        result = "0";
    }

    nums.push_back(result);
    result = "";
}

bool cmp(string a, string b){
	if (a.size() == b.size()) {
        return a < b;
    }

    return a.size() < b.size();
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> m;

    for (int i = 0; i < m; i++) {
        cin >> str;
        result = "";

        for (int j = 0; j < str.size(); j++) {
            if (isdigit(str[j])) {
                result += str[j];
            } else if (result.size()) {
                processing();
            }
        }

        if (result.size()) {
            processing();
        }
    }

    sort(nums.begin(), nums.end(), cmp);

    for (auto it: nums) {
        cout << it << "\n";
    }

    return 0;
};