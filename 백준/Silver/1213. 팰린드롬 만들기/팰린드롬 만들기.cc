#include<bits/stdc++.h>

using namespace std;

string name, l, r;
int ordCount;
char mid;
map<char, int> alpha;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> name;
	
	for (char a : name) {
		alpha[a]++;
	}
	
	for (auto it : alpha) {
		if (it.second % 2 == 1) {
			ordCount++;
			mid = it.first;
		}
		
		if (ordCount >= 2) {
			cout << "I'm Sorry Hansoo" << "\n";
			return 0;
		}
	}
	
	for (auto it : alpha) {
		l.append(it.second / 2, it.first);
	}
	
	r = l;
	reverse(r.begin(), r.end());
	
	if (ordCount == 1) {
		cout << l << mid << r << "\n";
	} else {
		cout << l << r << "\n";
	}

	return 0;
}