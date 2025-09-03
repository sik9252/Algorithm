#include <bits/stdc++.h>

using namespace std;

int n, c, num;
map<int, pair<int, int>> nums;

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n >> c;

    for (int i = 0; i < n; i++) {
        cin >> num;

        if (nums[num].second) {
            nums[num].second++;
        } else {
            nums[num].first = i;
            nums[num].second = 1;
        }
    }

    vector<pair<int, pair<int,int>>> v(nums.begin(), nums.end());

    sort(v.begin(), v.end(), [](auto &a, auto &b){
        if (a.second.second == b.second.second) {
            return a.second.first < b.second.first; 
        }

        return a.second.second > b.second.second;
    });

    for (auto &p : v) {
        for (int i = 0; i < p.second.second; i++) {
            cout << p.first << " ";
        }
    }

    return 0;
};