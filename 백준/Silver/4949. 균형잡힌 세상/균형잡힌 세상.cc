#include<bits/stdc++.h>

using namespace std;

string s;

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	while (true) {
		getline(cin, s);
		
		stack<char> st;
		bool success = true;
		
		if (s == ".") break;
		
		for (int i = 0; i < s.size(); i++) {
			char cur = s[i];
			
			if (cur == '(' || cur == '[') {
				st.push(cur);
			} else if (cur == ')' || cur == ']') {
				if (st.empty()) {
					success = false;
					break;
				}
				
				if (st.top() == '(' && cur == ')' || st.top() == '[' && cur == ']') {
					st.pop();
				} else {
					success = false;
					break;
				}
			}
			
		}
		
		if (success && st.empty()) {
			cout << "yes" << "\n";
		} else {
			cout << "no" << "\n";
		}
	}
		
	return 0;
}