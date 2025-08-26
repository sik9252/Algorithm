#include<bits/stdc++.h>

using namespace std;

int N, M;
string name, question, poketmon[100004];
map<string, int> mp;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> N >> M;
	
	for (int i = 0; i < N; i++) {
		cin >> name;
		
		mp[name] = i + 1;
		poketmon[i + 1] = name;
	}
	
	for (int i = 0; i < M; i++) {
		cin >> question;
		
		if (atoi(question.c_str()) == 0) {
			cout << mp[question] << "\n";
		} else {
			cout << poketmon[atoi(question.c_str())] << "\n";
		}
	}
	
	return 0;
}