#include<bits/stdc++.h>

using namespace std;

int n, team, A, B, asum, bsum;
string t, prv;

string print(int a) {
	string d = "00" + to_string(a / 60);
	string e = "00" +to_string(a % 60);
	
	return d.substr(d.size() - 2, 2) + ":" + e.substr(e.size() - 2, 2);
}

int stringToInt(string a) {
	return atoi(a.substr(0, 2).c_str()) * 60 + atoi(a.substr(3, 2).c_str());
}

void calc(int &sum, string s) {
	sum += (stringToInt(s) - stringToInt(prv));
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
	
	cout << print(asum) << "\n";
	cout << print(bsum) << "\n";
	
	return 0;
}