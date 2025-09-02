#include<bits/stdc++.h>

using namespace std;

const int maxN = 101;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};

int N, graph[maxN][maxN], visited[maxN][maxN], result = 1;

void DFS(int y, int x, int h) {
	visited[y][x] = 1;
	
	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
		
		if (graph[ny][nx] > h && !visited[ny][nx]) {
			DFS(ny, nx, h);
		}
	}
	
	return;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> N;
	
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> graph[i][j];
		}
	}
	
	for (int h = 1; h < 101; h++) {
		memset(visited, 0, sizeof(visited));
		int cnt = 0;
		
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (graph[i][j] > h && !visited[i][j]) {
					DFS(i, j, h);
					cnt++;
				}
			}
		}
		
		result = max(result, cnt);
	}
	
	cout << result << "\n";

	return 0;
}