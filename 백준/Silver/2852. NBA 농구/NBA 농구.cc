#include<bits/stdc++.h>

using namespace std;

int n, team, A, B, asum, bsum;
string t, prv;

int stringToIntSecond(string a) {
	// (0, 2) -> 분, (3, 2) -> 초, c_str() -> C char로 변환 
	// return atoi(a.substr(0, 2).c_str()) * 60 + atoi(a.substr(3, 2).c_str());
	return stoi(a.substr(0, 2)) * 60 + stoi(a.substr(3, 2));
}

void calc(int &sum, string s) {
	sum += (stringToIntSecond(s) - stringToIntSecond(prv));
}

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	
	for (int i = 0; i < n; i++) {
		cin >> team >> t;
		
		// 직전까지 A가 리드 
		if (A > B) calc(asum, t);
		// 직전까지 B가 리드 
		else if (B > A) calc(bsum, t);
		
		team == 1 ? A++ : B++;
		// 직전 골이 들어간 시간 
		prv = t;
	}
	
	if (A > B) calc(asum, "48:00");
	else if (B > A) calc(bsum, "48:00");
	
	printf("%02d:%02d\n", asum / 60, asum % 60);
	printf("%02d:%02d\n", bsum / 60, bsum % 60);
	
	return 0;
}