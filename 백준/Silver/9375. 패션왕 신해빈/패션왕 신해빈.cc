#include<bits/stdc++.h>

using namespace std;

int T, N;
string type, name;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> T;
	
	for (int i = 0; i < T; i++) {
		map<string, int> clothes;
		cin >> N;
		
		for (int j = 0; j < N; j++) {
			cin >> name >> type;
			clothes[type]++;
		}
		
		int result = 1;
		for (auto it : clothes) {
			result *= (it.second + 1);
		}
		
		result--;
		
		cout << result << "\n";
	}

	return 0;
}