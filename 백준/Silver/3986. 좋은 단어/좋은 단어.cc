#include<bits/stdc++.h>

using namespace std;

int N, result;
string str;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> N;
	
	for (int i = 0; i < N; i++) {
		stack<char> st;
		
		cin >> str;
		
		for (char s : str) {
			if (st.size() && st.top() == s) {
				st.pop();
			} else {
				st.push(s);
			}
		}
		
		if (st.size() == 0) {
			result++;
		}
	}
	
	cout << result << "\n";

	return 0;
}