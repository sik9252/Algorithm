#include<bits/stdc++.h>

using namespace std;

int n, nums[1000004], result[1000004];
stack<int> st;

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	memset(result, -1, sizeof(result));
	
	for (int i = 0; i < n; i++) {
		cin >> nums[i];
		
		while (st.size() && nums[st.top()] < nums[i]) {
			result[st.top()] = nums[i];
			st.pop();
		}
		
		st.push(i);
	}
	
	for (int i = 0; i < n; i++) {
		cout << result[i] << " ";
	}
		
	return 0;
}