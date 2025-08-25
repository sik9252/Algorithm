#include<bits/stdc++.h>

using namespace std;

int N;
string pattern, str, pre, suf;

int main() {
	cin >> N;
	cin >> pattern;
	
	for (int i = 0; i < N; i++) {
		cin >> str;

		int pos = pattern.find("*");
		pre = pattern.substr(0, pos);
		suf = pattern.substr(pos + 1);
		
		if (pre.size() + suf.size() > str.size()) {
			cout << "NE\n";
		} else {
			if (pre == str.substr(0, pre.size()) && suf == str.substr(str.size() - suf.size())) {
				cout << "DA\n";
			} else {
				cout << "NE\n";
			}
		}
	}
	
	return 0;
}