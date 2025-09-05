#include<bits/stdc++.h>

using namespace std;

int t;
string s;

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> t;
	
	while (t--) {
		cin >> s;
		stack<char> st;
		
		for (int i = 0; i < s.size(); i++) {
			char cur = s[i];
			
			if (!st.empty() && st.top() == '(' && cur == ')') {
				st.pop();
			} else {
				st.push(cur);
			}
		}
		
		if (st.empty()) {
			cout << "YES" << "\n";
		} else {
			cout << "NO" << "\n";
		}
	}
		
	return 0;
}