#include<bits/stdc++.h>

using namespace std;

int n, m, j, pos, l, r, cnt;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> n >> m;
	cin >> j;
	
	l = 1;
	
	for (int i = 0; i < j; i++) {
        r = l + m - 1;
		cin >> pos;
		
		if (pos >= l && pos <= r) {
			continue;
		} else {
			if (pos < l) {
				cnt += (l - pos);
				l = pos;
			} else {
				l += (pos - r);
				cnt += (pos - r);
			}
		}
	}
	
	cout << cnt << "\n";
	
	return 0;
}