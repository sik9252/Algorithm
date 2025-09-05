#include<bits/stdc++.h>

using namespace std;

int n, cnt;

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	
	int num = 666;
	
	while (true) {
		if (to_string(num).find("666") != string::npos) {
			cnt++;
			
			if (cnt == n) {
				cout << num << "\n";
				break;
			}
		}
		num++;
	}
	
	return 0;
}