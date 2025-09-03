#include<bits/stdc++.h>
#define y1 aaaa

using namespace std;

const int maxN = 68;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};

int N;
char graph[101][101];
string row;

string dfs(int y, int x, int size) {
	if (size == 1) {
		return string(1, graph[y][x]);
	}
	
	// 현재 (y, x) 좌표가 속한 정사각형 영역의 왼쪽 위 모서리 값 저장 
	char cur = graph[y][x];
	string result = "";
	
	// 현재 구역을 모두 돌면서 모든 원소가 기준값(cur)과 같은지 확인
	// 하나라도 다르면 단일 값으로 표현할 수 없는 영역임 
	for (int i = y; i < y + size; i++) {
		for (int j = x; j < x + size; j++) {
			if (cur != graph[i][j]) {
				result += "(";
				result += dfs(y, x, size / 2); // 왼쪽 위 
				result += dfs(y, x + size / 2, size / 2); // 오른쪽 위 
				result += dfs(y + size / 2, x, size / 2); // 왼쪽 아래 
				result += dfs(y + size / 2, x + size / 2, size / 2); // 오른쪽 아래 
				result += ")";
				return result;
			}
		}
	}
	
	return string(1, graph[y][x]);
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	cin >> N;
	
	for (int i = 0; i < N; i++) {
		cin >> row;
		for (int j = 0; j < N; j++) {
			graph[i][j] = row[j];
		}
	}
	
	cout << dfs(0, 0, N) << "\n";
	
	return 0;
}