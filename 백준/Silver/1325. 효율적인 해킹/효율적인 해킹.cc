#include<bits/stdc++.h>

using namespace std;

int n, m, a, b, maxHackCount = -1;
vector<int> graph[10004];
vector<int> result;
bool visited[10004];

int findHackCount(int start) {
	int count = 1;
	visited[start] = true;
	
	for (int next: graph[start]) {
		if (!visited[next]) {
			count += findHackCount(next);
		}
	}
	
	return count;
}

int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> n >> m;
	
	while (m--) {
		cin >> a >> b;
		
		graph[b].push_back(a);
	}
	
	// 각 컴퓨터마다 해킹 가능한 컴퓨터 개수 계산
	for (int i = 1; i <= n; i++) {
		fill(visited, visited + n + 1, false);
		
		int hackCount = findHackCount(i);
		if (maxHackCount < hackCount) {
			result.clear();
			result.push_back(i);
			maxHackCount = hackCount;
		} else if (maxHackCount == hackCount) {
			result.push_back(i);
		}
	}
	
	for (auto i: result) {
		cout << i << " ";
	}
		
	return 0;
}