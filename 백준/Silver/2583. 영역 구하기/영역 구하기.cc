#include<bits/stdc++.h>
#define y1 aaaa

using namespace std;

const int maxN = 104;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};

int M, N, K, x1, y1, x2, y2, graph[maxN][maxN], visited[maxN][maxN];
vector<int> cnt;

int dfs(int y, int x) {
	visited[y][x] = 1;
	int cnt = 1;
	
	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if (ny < 0 || nx < 0 || ny >= M || nx >= N || visited[ny][nx] == 1 || graph[ny][nx] == 1) continue;
		
		cnt += dfs(ny, nx);
	}
	
	return cnt;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> M >> N >> K;
	
	for (int i = 0; i < K; i++) {
		cin >> x1 >> y1 >> x2 >> y2;
		
		for (int x = x1; x < x2; x++) {
			for (int y = y1; y < y2; y++) {
				graph[y][x] = 1;
			}
		}
	}
	
	for (int x = 0; x < N; x++) {
		for (int y = 0; y < M; y++) {
			if (graph[y][x] == 0 && !visited[y][x]) {
				cnt.push_back(dfs(y, x));
			}
		}
	}
	
	sort(cnt.begin(), cnt.end());
	cout << cnt.size() << "\n";
	
	for (int a: cnt) {
		cout << a <<" ";
	}

	return 0;
}