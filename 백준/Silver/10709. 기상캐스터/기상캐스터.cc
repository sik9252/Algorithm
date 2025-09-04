#include<bits/stdc++.h>
#define y1 aaaa

using namespace std;

int h, w, sky[104][104];
string s;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> h >> w;
	
	for (int i = 0; i < h; i++) {
		cin >> s;
		for (int j = 0; j < w; j++) {
			if (s[j] == '.') {
				sky[i][j] = -1;
			} else {
				sky[i][j] = 0;
			}
		}
	}
	
	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			if (sky[i][j] == 0) {
				int cnt = 1;
				while (sky[i][j+1] == -1) {
					sky[i][j+1] = cnt++;
					j++;
				}
			}
		}
	}
	
	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			cout << sky[i][j] << " ";
		}
		cout << "\n";
	}
	
	return 0;
}