#include<bits/stdc++.h>

using namespace std;

int N, K, num, nums[1000001], result = -987654321;

int main() {
	cin >> N >> K;
	
	for (int i = 1; i <= N; i++) {
		cin >> num;
		nums[i] = nums[i - 1] + num;
	}
	
	for (int i = K; i <= N; i++) {
		result = max(result, nums[i] - nums[i - K]);
	}
	
	cout << result;
	
	return 0;
}