#include<bits/stdc++.h>

using namespace std;

int t, n;

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> t;
	
	while (t--) {
		cin >> n;
		
		// 어떤 수의 끝에 0이 붙으려면 그 수가 10의 배수여야 함 
		// 곱셈 결과에 2 * 5 쌍이 들어있을 때마다 10이 생김
		// n!의 소인수 분해에서 2의 개수와 5의 개수 중 작은 값이 0의 개수가 됨 
		int cnt2 = 0;
		int cnt5 = 0;
		
		for (int i = 2; i <= n; i *= 2) {
			cnt2 += n / i;
		}
		
		for (int i = 5; i <= n; i *= 5) {
			cnt5 += n / i;
		}
		
		cout << min(cnt2, cnt5) << "\n";
	}
	
	return 0;
}